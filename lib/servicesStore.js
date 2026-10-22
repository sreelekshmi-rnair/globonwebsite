import fs from 'fs';
import path from 'path';
import { categories as staticCategories } from './servicesData.js';
import prisma from './prisma.js';

const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'services.json');

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

// Get all categories, combining static metadata with all dynamic services
export function getAllCategories() {
  const allServices = readServicesFromFile();

  return staticCategories.map((cat) => {
    // Services belonging to this category
    const catServices = allServices.filter(
      (s) => s.category === cat.slug || s.category === cat.title || s.category === cat.id
    );

    return {
      ...cat,
      services: catServices,
    };
  });
}

// Get category by slug with dynamic services included
export function getCategoryBySlug(categorySlug) {
  const allCats = getAllCategories();
  return allCats.find((cat) => cat.slug === categorySlug || cat.id === categorySlug) || null;
}

// Get service by category and service slug
export function getServiceBySlug(categorySlug, serviceSlug) {
  const allServices = readServicesFromFile();

  const found = allServices.find(
    (s) =>
      (s.category === categorySlug || slugify(s.category) === categorySlug) &&
      s.slug === serviceSlug
  );

  if (found) return found;

  // Fallback check across all services
  return allServices.find((s) => s.slug === serviceSlug) || null;
}

// Find service across all categories
export function findServiceAcrossAll(serviceSlug) {
  const allServices = readServicesFromFile();
  const service = allServices.find((s) => s.slug === serviceSlug);

  if (!service) return null;

  const category = getCategoryBySlug(service.category) || {
    id: service.category,
    slug: service.category,
    title: service.categoryTitle || 'General Services',
  };

  return { service, category };
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
  let existingPrisma = null;
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
    console.error('[MySQL Save Service Error]:', err);
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

  return formattedService;
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

