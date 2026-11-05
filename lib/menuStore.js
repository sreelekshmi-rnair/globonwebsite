import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const MENU_FILE = path.join(DATA_DIR, 'menu_hierarchy.json');

// Ensure data directory and file exist
function ensureMenuFile() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!fs.existsSync(MENU_FILE)) {
    // Default initial seed matching the website services
    const initialMenu = [
      {
        id: 'menu-loans',
        title: 'Loans',
        url: '/services/loans',
        parentId: null,
        order: 1,
        children: []
      },
      {
        id: 'menu-business-services',
        title: 'Business Services',
        url: '/services/business-services',
        parentId: null,
        order: 2,
        children: []
      },
      {
        id: 'menu-study-abroad',
        title: 'Study Abroad',
        url: '/services/study-abroad',
        parentId: null,
        order: 3,
        children: [
          {
            id: 'menu-edu-loan',
            title: 'Education Loan Assistancee',
            url: '/services/study-abroad/education-loan-assistancee',
            parentId: 'menu-study-abroad',
            order: 1,
            children: []
          }
        ]
      },
      {
        id: 'menu-insurance',
        title: 'Insurance',
        url: '/services/insurance',
        parentId: null,
        order: 4,
        children: []
      },
      {
        id: 'menu-real-estate',
        title: 'Real Estate',
        url: '/services/real-estate',
        parentId: null,
        order: 5,
        children: []
      },
      {
        id: 'menu-digital-services',
        title: 'Digital Services',
        url: '/services/digital-services',
        parentId: null,
        order: 6,
        children: []
      }
    ];

    fs.writeFileSync(MENU_FILE, JSON.stringify(initialMenu, null, 2), 'utf-8');
  }
}

// Read tree from JSON
export function getMenuTree() {
  try {
    ensureMenuFile();
    const raw = fs.readFileSync(MENU_FILE, 'utf-8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error('Error reading menu hierarchy file:', err);
    return [];
  }
}

// Flatten tree to a list of items with depth
export function flattenMenuTree(nodes, depth = 1) {
  const list = [];
  if (!Array.isArray(nodes)) return list;

  nodes.forEach((node, idx) => {
    const { children, ...rest } = node;
    list.push({
      ...rest,
      depth,
      order: idx + 1,
      hasChildren: Boolean(children && children.length > 0)
    });

    if (children && children.length > 0) {
      list.push(...flattenMenuTree(children, depth + 1));
    }
  });

  return list;
}

// Save tree to JSON
export function saveMenuTree(tree) {
  try {
    ensureMenuFile();
    fs.writeFileSync(MENU_FILE, JSON.stringify(tree, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error saving menu hierarchy file:', err);
    return false;
  }
}
