import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const TOKENS_FILE = path.join(process.cwd(), 'data', 'password_resets.json');

function getStoredTokens() {
  try {
    if (!fs.existsSync(TOKENS_FILE)) {
      return [];
    }
    const raw = fs.readFileSync(TOKENS_FILE, 'utf8');
    return JSON.parse(raw || '[]');
  } catch (err) {
    console.error('Error reading password resets file:', err);
    return [];
  }
}

function saveStoredTokens(tokens) {
  try {
    const dir = path.dirname(TOKENS_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(TOKENS_FILE, JSON.stringify(tokens, null, 2), 'utf8');
  } catch (err) {
    console.error('Error writing password resets file:', err);
  }
}

/**
 * Creates and stores a secure reset token valid for 1 hour.
 */
export function createResetToken(email) {
  if (!email) return null;
  const cleanEmail = email.trim().toLowerCase();
  const token = crypto.randomBytes(32).toString('hex');
  const now = Date.now();
  const oneHour = 60 * 60 * 1000;

  let tokens = getStoredTokens();
  // Filter out expired tokens older than 24 hours to keep the file clean
  tokens = tokens.filter((t) => now - (t.expiresAt || 0) < 24 * 60 * 60 * 1000);

  // Invalidate any existing unused tokens for this email
  tokens.forEach((t) => {
    if (t.email === cleanEmail && !t.used) {
      t.used = true;
      t.invalidated = true;
    }
  });

  const tokenRecord = {
    token,
    email: cleanEmail,
    expiresAt: now + oneHour,
    used: false,
    createdAt: new Date().toISOString(),
  };

  tokens.push(tokenRecord);
  saveStoredTokens(tokens);

  return token;
}

/**
 * Validates a reset token.
 */
export function verifyResetToken(token) {
  if (!token) {
    return { valid: false, error: 'No reset token provided' };
  }

  const tokens = getStoredTokens();
  const record = tokens.find((t) => t.token === token);

  if (!record) {
    return { valid: false, error: 'Invalid or non-existent password reset link' };
  }

  if (record.used) {
    return { valid: false, error: 'This password reset link has already been used. Please request a new one.' };
  }

  if (Date.now() > record.expiresAt) {
    return { valid: false, error: 'This password reset link has expired (valid for 1 hour). Please request a new one.' };
  }

  return { valid: true, email: record.email };
}

/**
 * Marks a reset token as used.
 */
export function markTokenUsed(token) {
  if (!token) return false;
  const tokens = getStoredTokens();
  const record = tokens.find((t) => t.token === token);

  if (record) {
    record.used = true;
    record.usedAt = new Date().toISOString();
    saveStoredTokens(tokens);
    return true;
  }
  return false;
}
