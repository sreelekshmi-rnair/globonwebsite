import fs from 'fs';
import path from 'path';
import { categories as staticCategories } from './servicesData.js';
import prisma from './prisma.js';
import { getMenuTree, saveMenuTree } from './menuStore.js';

const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'services.json');

// Error whose message is safe to show in the admin panel
export class ServiceSaveError extends Error {
  constructor(message, status = 400) {
    super(message);
    this.status = status;
  }
}

// MySQL silently cuts these VARCHAR(191) columns, so reject long values instead
const SHORT_TEXT_LIMIT = 191;
const SHORT_TEXT_FIELDS = {
  category: 'Category',
  categoryTitle: 'Category title',
  title: 'Service title',
  slug: 'URL slug',
  subtitle: 'Subtitle',
  heroImage: 'Hero image',
  overviewTitle: 'Overview title',
  overviewImage: 'Overview image',
  optionsBadge: 'Options badge',
  optionsTitle: 'Options title',
};

function assertShortFieldsFit(payload) {
  for (const [field, label] of Object.entries(SHORT_TEXT_FIELDS)) {
    const length = (payload[field] || '').length;
    if (length > SHORT_TEXT_LIMIT) {
      throw new ServiceSaveError(`${label} is too long (${length} characters, the limit is ${SHORT_TEXT_LIMIT}).`);
    }
  }
}

function toServiceSaveError(err, slug) {
  if (err instanceof ServiceSaveError) return err;
  if (err?.code === 'P2002') {
    return new ServiceSaveError(`Another service already uses the URL slug "${slug}". Please choose a different one.`, 409);
  }
  if (err?.name === 'PrismaClientInitializationError' || err?.code === 'P1001' || err?.code === 'P1000') {
    return new ServiceSaveError('The database is not running. Start MySQL in XAMPP, then save again.', 503);
  }
  console.error('[MySQL Save Service Error]:', err);
  return new ServiceSaveError('The service could not be saved to the database. Nothing was changed.', 500);
}

// Ensure data directory exists
function ensureDataFile() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, '[]', 'utf-8');
  }
}

// Safe JSON parser for stored text/JSON columns
function safeJsonParse(val, fallback) {
  if (!val) return fallback;
  if (typeof val !== 'string') return val;
  try {
    return JSON.parse(val);
  } catch {
    return fallback;
  }
}

// Convert a database row back into the full rich service object
export function parseDbService(dbRow) {
  if (!dbRow) return null;

  const parsedOptions = safeJsonParse(dbRow.options, []);
  const parsedDocGroups = safeJsonParse(dbRow.documentGroups, []);
  const parsedFaqs = safeJsonParse(dbRow.faqs, []);
  const parsedOverviewBullets = safeJsonParse(dbRow.overviewBullets, []);
  const parsedFeatures = safeJsonParse(dbRow.features, []);

  const featuresArr = Array.isArray(parsedFeatures)
    ? parsedFeatures
    : (typeof dbRow.features === 'string' ? dbRow.features.split('\n').map((s) => s.trim()).filter(Boolean) : []);

  return {
    id: dbRow.id ? String(dbRow.id) : dbRow.slug,
    category: dbRow.category || 'loans-advances',
    categoryTitle: dbRow.categoryTitle || '',
    title: dbRow.title || '',
    slug: dbRow.slug,
    subtitle: dbRow.subtitle || '',
    shortDesc: dbRow.shortDesc || '',
    heroImage: dbRow.heroImage || '',
    overviewTitle: dbRow.overviewTitle || '',
    overviewDesc: dbRow.overviewDesc || '',
    overviewImage: dbRow.overviewImage || '',
    overviewBullets: parsedOverviewBullets,
    features: featuresArr,
    highlights: featuresArr,
    optionsBadge: dbRow.optionsBadge || '',
    optionsTitle: dbRow.optionsTitle || '',
    options: parsedOptions,
    documentGroups: parsedDocGroups,
    advisoryNote: dbRow.advisoryNote || '',
    eligibilityDesc: dbRow.eligibilityDesc || '',
    feesDesc: dbRow.feesDesc || '',
    faqs: parsedFaqs,
    order: dbRow.order ?? 0,
    createdAt: dbRow.createdAt ? new Date(dbRow.createdAt).toISOString() : new Date().toISOString(),
    updatedAt: dbRow.updatedAt ? new Date(dbRow.updatedAt).toISOString() : new Date().toISOString(),
  };
}

// Prepare full database payload for MySQL table - ONLY what user added in admin
export function serializeServiceForDb(service) {
  return {
    category: service.category || 'loans-advances',
    categoryTitle: service.categoryTitle || '',
    title: service.title || '',
    slug: service.slug,
    subtitle: service.subtitle || '',
    shortDesc: service.shortDesc || '',
    heroImage: service.heroImage || '',
    overviewTitle: service.overviewTitle || '',
    overviewDesc: service.overviewDesc || '',
    overviewImage: service.overviewImage || '',
    overviewBullets: Array.isArray(service.overviewBullets)
      ? JSON.stringify(service.overviewBullets)
      : (typeof service.overviewBullets === 'string' ? service.overviewBullets : '[]'),
    features: Array.isArray(service.features)
      ? JSON.stringify(service.features)
      : (typeof service.features === 'string' ? service.features : '[]'),
    optionsBadge: service.optionsBadge || '',
    optionsTitle: service.optionsTitle || '',
    options: Array.isArray(service.options)
      ? JSON.stringify(service.options)
      : (typeof service.options === 'string' ? service.options : '[]'),
    documentGroups: Array.isArray(service.documentGroups)
      ? JSON.stringify(service.documentGroups)
      : (typeof service.documentGroups === 'string' ? service.documentGroups : '[]'),
    advisoryNote: service.advisoryNote || '',
    eligibilityDesc: service.eligibilityDesc || '',
    feesDesc: service.feesDesc || '',
    faqs: Array.isArray(service.faqs)
      ? JSON.stringify(service.faqs)
      : (typeof service.faqs === 'string' ? service.faqs : '[]'),
    order: Number(service.order) || 0,
  };
}

// Sync database with file cache
export async function syncDatabaseWithServices() {
  try {
    const dbServices = await prisma.service.findMany({ orderBy: { order: 'asc' } });
    if (Array.isArray(dbServices)) {
      const parsed = dbServices.map(parseDbService).filter(Boolean);
      writeServicesToFile(parsed);
    }
  } catch (err) {
    console.warn('[Database Sync Notice]:', err.message);
  }
}

// Read all services from persistent JSON store
export function readServicesFromFile() {
  try {
    ensureDataFile();
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading services.json:', err);
    return [];
  }
}

// Write services to persistent JSON store
export function writeServicesToFile(services) {
  try {
    ensureDataFile();
    fs.writeFileSync(DATA_FILE, JSON.stringify(services, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error writing services.json:', err);
    return false;
  }
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

function findStaticCategory(slug) {
  return staticCategories.find((c) => c.slug === slug || (c.aliases || []).includes(slug)) || null;
}

// Work out what a menu item links to: a category, a service, or nothing yet
function resolveMenuItem(node, allServices) {
  const match = /^\/services\/([^/?#]+)(?:\/([^/?#]+))?\/?$/.exec(node.url || '');
  if (!match) return {};
  const category = match[2] ? null : findStaticCategory(match[1]);
  if (category) return { category };
  const slug = match[2] || match[1];
  return { service: allServices.find((s) => s.slug === slug) || null };
}

function menuSlug(node) {
  return (node.url || '').split('/').filter(Boolean).pop() || node.id;
}

// Turn menu items into display items, keeping their sub-levels.
function buildSubServices(nodes, allServices) {
  const items = [];
  for (const node of nodes || []) {
    const { category, service } = resolveMenuItem(node, allServices);
    const subServices = buildSubServices(node.children, allServices);
    if (category) {
      items.push({
        id: category.id,
        slug: category.slug,
        title: category.title,
        subtitle: category.subtitle || '',
        shortDesc: category.description || '',
        heroImage: category.image || '',
        highlights: [],
        href: `/services/${category.slug}`,
        subServices,
      });
    } else if (service) {
      items.push({ ...service, href: `/services/${service.category}/${service.slug}`, subServices });
    } else {
      // In the menu but no details added yet: still shown, and opens a basic page
      items.push({
        id: node.id,
        slug: menuSlug(node),
        title: node.title,
        shortDesc: '',
        highlights: [],
        href: node.url || '#',
        subServices,
      });
    }
  }
  return items;
}

function findMenuNode(nodes, predicate) {
  for (const node of nodes || []) {
    if (predicate(node)) return node;
    const found = findMenuNode(node.children, predicate);
    if (found) return found;
  }
  return null;
}

function collectSlugs(items, slugs = new Set()) {
  for (const item of items) {
    slugs.add(item.slug);
    collectSlugs(item.subServices, slugs);
  }
  return slugs;
}

// A basic service for a menu item that has no details yet, so its link always opens
function menuPlaceholderService(serviceSlug) {
  const allServices = readServicesFromFile();
  const node = findMenuNode(getMenuTree(), (n) => {
    if (!(n.url || '').startsWith('/services/') || menuSlug(n) !== serviceSlug) return false;
    return !resolveMenuItem(n, allServices).category;
  });
  if (!node) return null;
  const segments = node.url.split('/').filter(Boolean);
  return {
    id: node.id,
    title: node.title,
    slug: serviceSlug,
    category: segments.length > 2 ? segments[1] : 'general',
    categoryTitle: '',
  };
}

// Add a service's own sub-services from the menu
function withSubServices(service) {
  if (!service) return service;
  const node = findMenuNode(getMenuTree(), (n) => (n.url || '').split('/').filter(Boolean).pop() === service.slug);
  return { ...service, subServices: node ? buildSubServices(node.children, readServicesFromFile()) : [] };
}

// Top-level cards for the services page, in menu order
export function getMenuOrderedCards() {
  const categories = getAllCategories();
  const allServices = readServicesFromFile();
  const tree = getMenuTree();
  if (tree.length === 0) return categories;

  const cards = [];
  for (const node of tree) {
    const { category, service } = resolveMenuItem(node, allServices);
    if (category) {
      cards.push(categories.find((c) => c.slug === category.slug));
    } else if (service) {
      const parent = categories.find((c) => c.slug === service.category);
      cards.push({
        id: service.slug,
        slug: service.slug,
        href: `/services/${service.category}/${service.slug}`,
        title: service.title,
        description: service.shortDesc || service.subtitle || '',
        image: service.heroImage || parent?.image || '/images/services/1.png',
        imageAlt: service.title,
        badgeClass: parent?.badgeClass,
        services: buildSubServices(node.children, allServices),
      });
    } else {
      const parent = categories.find((c) => (node.url || '').startsWith(`/services/${c.slug}/`));
      cards.push({
        id: node.id,
        slug: menuSlug(node),
        href: node.url || '#',
        title: node.title,
        description: '',
        image: parent?.image || '/images/services/1.png',
        imageAlt: node.title,
        badgeClass: parent?.badgeClass,
        services: buildSubServices(node.children, allServices),
      });
    }
  }
  return cards;
}

// Get all categories, combining static metadata with all dynamic services
export function getAllCategories() {
  const allServices = readServicesFromFile();
  const tree = getMenuTree();

  return staticCategories.map((cat) => {
    // Services belonging to this category, matching slug, title, id, or any alias
    const matchSlugs = [cat.slug, cat.id, cat.title, ...(cat.aliases || [])].map((s) => s.toLowerCase());
    const catServices = allServices.filter((s) => {
      const sCat = (s.category || '').toLowerCase();
      const sCatTitle = (s.categoryTitle || '').toLowerCase();
      return matchSlugs.includes(sCat) || matchSlugs.includes(sCatTitle);
    });

    // Show the menu's arrangement first, then this category's services not placed under it yet
    const node = findMenuNode(tree, (n) => n.url === `/services/${cat.slug}`);
    const fromMenu = buildSubServices(node?.children, allServices);
    const placed = collectSlugs(fromMenu);
    const notPlaced = catServices
      .filter((s) => !placed.has(s.slug))
      .map((s) => ({ ...s, href: `/services/${cat.slug}/${s.slug}`, subServices: [] }));

    return {
      ...cat,
      services: [...fromMenu, ...notPlaced],
    };
  });
}

// Get category by slug with dynamic services included
export function getCategoryBySlug(categorySlug) {
  if (!categorySlug) return null;
  const normalized = categorySlug.toLowerCase().trim();
  const allCats = getAllCategories();
  return allCats.find((cat) => 
    cat.slug === normalized || 
    cat.id === normalized || 
    (cat.aliases && cat.aliases.includes(normalized))
  ) || null;
}

// Get service by category and service slug
export function getServiceBySlug(categorySlug, serviceSlug) {
  const allServices = readServicesFromFile();

  const found = allServices.find(
    (s) =>
      (s.category === categorySlug || slugify(s.category) === categorySlug) &&
      s.slug === serviceSlug
  );

  if (found) return withSubServices(found);

  // Fallback check across all services
  return withSubServices(allServices.find((s) => s.slug === serviceSlug) || menuPlaceholderService(serviceSlug));
}

// Find service across all categories
export function findServiceAcrossAll(serviceSlug) {
  const allServices = readServicesFromFile();
  const service = allServices.find((s) => s.slug === serviceSlug) || menuPlaceholderService(serviceSlug);

  if (!service) return null;

  const category = getCategoryBySlug(service.category) || {
    id: service.category,
    slug: service.category,
    title: service.categoryTitle || 'General Services',
  };

  return { service: withSubServices(service), category };
}

// Get all services
export function getAllServices(categoryFilter = null) {
  const allServices = readServicesFromFile();
  if (categoryFilter) {
    return allServices.filter(
      (s) => s.category === categoryFilter || slugify(s.category) === categoryFilter
    );
  }
  return allServices;
}

// Create or update service
// Create or update service in place
export async function saveService(serviceData) {
  const allServices = readServicesFromFile();
  const slug = serviceData.slug ? slugify(serviceData.slug) : slugify(serviceData.title);
  if (!slug) {
    throw new ServiceSaveError('A URL slug is required. Please use letters or numbers.');
  }

  // Find category title if not supplied
  const cat = staticCategories.find(
    (c) => c.slug === serviceData.category || c.title === serviceData.category
  );
  const categoryTitle = cat ? cat.title : (serviceData.categoryTitle || serviceData.category || 'General');
  const categorySlug = cat ? cat.slug : slugify(serviceData.category || 'general');

  // Convert serviceData identifiers to strings and numbers
  const rawId = serviceData.id != null ? String(serviceData.id).trim() : null;
  const numericId = rawId && !isNaN(Number(rawId)) ? Number(rawId) : null;
  const origNumericId = serviceData.originalId && !isNaN(Number(serviceData.originalId)) ? Number(serviceData.originalId) : null;
  const origSlug = serviceData.originalSlug ? slugify(serviceData.originalSlug) : null;

  // 1. Look up existing record in MySQL by:
  //    a) numeric ID (serviceData.id)
  //    b) originalId (if passed from edit modal)
  //    c) originalSlug (if passed from edit modal)
  //    d) rawId if it was a slug
  //    e) current slug
  const isEditing = Boolean(rawId || origNumericId || origSlug);
  let existingPrisma = null;
  try {
    if (numericId) {
      existingPrisma = await prisma.service.findUnique({ where: { id: numericId } });
    }
    if (!existingPrisma && origNumericId) {
      existingPrisma = await prisma.service.findUnique({ where: { id: origNumericId } });
    }
    if (!existingPrisma && origSlug) {
      existingPrisma = await prisma.service.findUnique({ where: { slug: origSlug } });
    }
    if (!existingPrisma && rawId && isNaN(Number(rawId))) {
      existingPrisma = await prisma.service.findUnique({ where: { slug: slugify(rawId) } });
    }
    if (!existingPrisma && slug) {
      existingPrisma = await prisma.service.findUnique({ where: { slug } });
      // A new service must never overwrite an existing one that has the same slug
      if (existingPrisma && !isEditing) {
        throw new ServiceSaveError(`Another service already uses the URL slug "${slug}". Please choose a different one.`, 409);
      }
    }
  } catch (err) {
    throw toServiceSaveError(err, slug);
  }

  // 2. Locate existing index in local cache (services.json)
  const existingIndex = allServices.findIndex((s) => {
    if (numericId && Number(s.id) === numericId) return true;
    if (rawId && String(s.id) === rawId) return true;
    if (origNumericId && Number(s.id) === origNumericId) return true;
    if (serviceData.originalId && String(s.id) === String(serviceData.originalId)) return true;
    if (existingPrisma && (Number(s.id) === existingPrisma.id || String(s.id) === String(existingPrisma.id))) return true;
    if (existingPrisma && s.slug === existingPrisma.slug) return true;
    if (origSlug && (s.slug === origSlug || s.slug === serviceData.originalSlug)) return true;
    if (rawId && isNaN(Number(rawId)) && (s.slug === rawId || s.slug === slugify(rawId))) return true;
    if (s.slug === slug) return true;
    return false;
  });

  const targetId = existingPrisma
    ? String(existingPrisma.id)
    : (existingIndex >= 0 && allServices[existingIndex].id
        ? String(allServices[existingIndex].id)
        : (numericId ? String(numericId) : (rawId || slug)));

  const formattedService = {
    id: targetId,
    category: categorySlug,
    categoryTitle: categoryTitle,
    title: serviceData.title,
    slug: slug,
    subtitle: serviceData.subtitle || '',
    shortDesc: serviceData.shortDesc || '',
    heroImage: serviceData.heroImage || serviceData.image || '',
    overviewTitle: serviceData.overviewTitle || '',
    overviewDesc: serviceData.overviewDesc || '',
    overviewImage: serviceData.overviewImage || '',
    overviewBullets: Array.isArray(serviceData.overviewBullets)
      ? serviceData.overviewBullets
      : typeof serviceData.overviewBullets === 'string' && serviceData.overviewBullets.trim()
      ? serviceData.overviewBullets.split('\n').map((s) => s.trim()).filter(Boolean)
      : [],
    features: Array.isArray(serviceData.features)
      ? serviceData.features
      : typeof serviceData.features === 'string' && serviceData.features.trim()
      ? serviceData.features.split('\n').map((s) => s.trim()).filter(Boolean)
      : Array.isArray(serviceData.highlights)
      ? serviceData.highlights
      : [],
    highlights: Array.isArray(serviceData.features)
      ? serviceData.features
      : typeof serviceData.features === 'string' && serviceData.features.trim()
      ? serviceData.features.split('\n').map((s) => s.trim()).filter(Boolean)
      : Array.isArray(serviceData.highlights)
      ? serviceData.highlights
      : [],
    optionsBadge: serviceData.optionsBadge || '',
    optionsTitle: serviceData.optionsTitle || '',
    options: Array.isArray(serviceData.options) ? serviceData.options : [],
    documentGroups: Array.isArray(serviceData.documentGroups) ? serviceData.documentGroups : [],
    advisoryNote: serviceData.advisoryNote || '',
    eligibilityDesc: serviceData.eligibilityDesc || '',
    feesDesc: serviceData.feesDesc || '',
    faqs: Array.isArray(serviceData.faqs) ? serviceData.faqs : [],
    order: Number(serviceData.order) || (existingIndex >= 0 ? allServices[existingIndex].order : (allServices.length + 1)),
    updatedAt: new Date().toISOString(),
  };

  // 3. Persist to MySQL directly (Update if exists, Create ONLY if truly new)
  try {
    const dbPayload = serializeServiceForDb(formattedService);
    assertShortFieldsFit(dbPayload);
    if (existingPrisma) {
      const updatedRow = await prisma.service.update({
        where: { id: existingPrisma.id },
        data: dbPayload,
      });
      formattedService.id = String(updatedRow.id);
      console.log(`[Database] Updated existing service ID ${formattedService.id} ("${formattedService.title}") in place.`);
    } else {
      const createdRow = await prisma.service.create({
        data: dbPayload,
      });
      formattedService.id = String(createdRow.id);
      console.log(`[Database] Created new service ID ${formattedService.id} ("${formattedService.title}").`);
    }
  } catch (err) {
    // Stop here: the next page load rebuilds services.json from MySQL, so a
    // file-only save would look successful and then disappear.
    throw toServiceSaveError(err, slug);
  }

  // 4. Update the local cache (services.json) strictly in place
  if (existingIndex >= 0) {
    formattedService.createdAt = allServices[existingIndex].createdAt || new Date().toISOString();
    allServices[existingIndex] = { ...allServices[existingIndex], ...formattedService };
  } else {
    formattedService.createdAt = new Date().toISOString();
    allServices.push(formattedService);
  }

  writeServicesToFile(allServices);

  // Keep the menu in step when a service is renamed or its URL slug changes.
  // A menu title the admin typed differently is left as it is.
  if (existingPrisma && (existingPrisma.slug !== slug || existingPrisma.title !== formattedService.title)) {
    const relink = (nodes) => nodes.map((node) => {
      const isThisService = menuSlug(node) === existingPrisma.slug;
      return {
        ...node,
        url: isThisService ? node.url.replace(new RegExp(`/${existingPrisma.slug}/?$`), `/${slug}`) : node.url,
        title: isThisService && node.title === existingPrisma.title ? formattedService.title : node.title,
        children: relink(node.children || []),
      };
    });
    saveMenuTree(relink(getMenuTree()));
  }

  return formattedService;
}

// Nesting a service under a category in the menu moves it to that category, so the
// menu, the admin list and the public category pages all agree.
// Items outside any category, and links with no matching service, are left alone.
export async function syncServicesWithMenu(tree) {
  const moved = [];
  const warnings = [];

  async function walk(nodes, parentCategorySlug) {
    const result = [];
    for (const node of nodes) {
      const next = { ...node };
      const match = /^\/services\/([^/?#]+)(?:\/([^/?#]+))?\/?$/.exec(next.url || '');
      const nodeCategory = match && !match[2] ? getCategoryBySlug(match[1]) : null;

      if (match && !nodeCategory && parentCategorySlug) {
        const serviceSlug = match[2] || match[1];
        const service = readServicesFromFile().find((s) => s.slug === serviceSlug);
        if (service) {
          try {
            if (service.category !== parentCategorySlug) {
              await saveService({
                ...service,
                originalId: service.id,
                originalSlug: service.slug,
                category: parentCategorySlug,
              });
              moved.push(service.title);
            }
            next.url = `/services/${parentCategorySlug}/${serviceSlug}`;
          } catch (err) {
            warnings.push(`"${service.title}" was not moved: ${err.message}`);
          }
        }
      }

      next.children = await walk(next.children || [], nodeCategory ? nodeCategory.slug : parentCategorySlug);
      result.push(next);
    }
    return result;
  }

  return { tree: await walk(tree, null), moved, warnings };
}

// Delete service
export async function deleteService(idOrSlug) {
  const allServices = readServicesFromFile();
  const rawId = String(idOrSlug);
  const isNumericId = !isNaN(Number(rawId)) && String(Number(rawId)) === rawId;

  const filtered = allServices.filter((s) => String(s.id) !== rawId && s.slug !== idOrSlug);
  writeServicesToFile(filtered);

  try {
    await prisma.service.deleteMany({
      where: {
        OR: [
          { slug: String(idOrSlug) },
          ...(isNumericId ? [{ id: Number(rawId) }] : []),
        ],
      },
    });
    console.log(`[Database] Deleted service "${idOrSlug}" from MySQL.`);
  } catch (err) {
    console.warn('[MySQL Delete Notice]:', err.message);
  }

  return true;
}

// Clear all services
export async function clearAllServices() {
  writeServicesToFile([]);
  try {
    await prisma.service.deleteMany({});
  } catch (err) {
    console.warn('[MySQL Clear Notice]:', err.message);
  }
  return true;
}

