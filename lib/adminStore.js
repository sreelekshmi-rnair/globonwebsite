import fs from 'fs';
import path from 'path';

const ADMINS_FILE = path.join(process.cwd(), 'data', 'admins.json');

function getStoredAdmins() {
  try {
    if (!fs.existsSync(ADMINS_FILE)) {
      return [];
    }
    const raw = fs.readFileSync(ADMINS_FILE, 'utf8');
    return JSON.parse(raw || '[]');
  } catch (err) {
    console.error('Error reading admins file:', err);
    return [];
  }
}

function saveStoredAdmins(admins) {
  try {
    const dir = path.dirname(ADMINS_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(ADMINS_FILE, JSON.stringify(admins, null, 2), 'utf8');
  } catch (err) {
    console.error('Error writing admins file:', err);
  }
}

export function findAdminByEmail(email) {
  if (!email) return null;
  const clean = email.trim().toLowerCase();
  const admins = getStoredAdmins();
  return admins.find((a) => (a.email && a.email.toLowerCase() === clean) || (a.username && a.username.toLowerCase() === clean)) || null;
}

export function saveAdmin({ name, email, passwordHash }) {
  const admins = getStoredAdmins();
  const clean = email.trim().toLowerCase();

  const existingIndex = admins.findIndex((a) => (a.email && a.email.toLowerCase() === clean) || (a.username && a.username.toLowerCase() === clean));

  const newAdmin = {
    id: existingIndex >= 0 ? admins[existingIndex].id : Date.now(),
    name: name.trim(),
    email: clean,
    username: clean,
    password: passwordHash,
    createdAt: new Date().toISOString(),
  };

  if (existingIndex >= 0) {
    admins[existingIndex] = newAdmin;
  } else {
    admins.push(newAdmin);
  }

  saveStoredAdmins(admins);
  return newAdmin;
}

export function updateAdminPassword(email, newPasswordHash) {
  if (!email || !newPasswordHash) return false;
  const clean = email.trim().toLowerCase();
  const admins = getStoredAdmins();
  const index = admins.findIndex(
    (a) => (a.email && a.email.toLowerCase() === clean) || (a.username && a.username.toLowerCase() === clean)
  );

  if (index >= 0) {
    admins[index].password = newPasswordHash;
    admins[index].updatedAt = new Date().toISOString();
    saveStoredAdmins(admins);
    return true;
  }
  return false;
}
