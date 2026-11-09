import crypto from 'crypto';
import { cookies } from 'next/headers';

// The signing secret must come from the environment in production. A fixed secret
// in the source code would let anyone who reads the repo forge an admin session.
// Local development (`next dev`) falls back to a dev-only value; production never
// uses it, so a deployment without ADMIN_JWT_SECRET refuses admin logins instead.
const SECRET_KEY =
  process.env.ADMIN_JWT_SECRET ||
  (process.env.NODE_ENV !== 'production' ? 'local-development-only-admin-secret' : null);

export function isAuthConfigured() {
  return Boolean(SECRET_KEY);
}

export function signToken(payload, expiresInHours = 24) {
  if (!SECRET_KEY) {
    throw new Error('ADMIN_JWT_SECRET is not set; refusing to sign admin sessions.');
  }
  const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
  const exp = Math.floor(Date.now() / 1000) + (expiresInHours * 3600);
  const data = Buffer.from(JSON.stringify({ ...payload, exp })).toString('base64url');
  const signature = crypto
    .createHmac('sha256', SECRET_KEY)
    .update(`${header}.${data}`)
    .digest('base64url');
  return `${header}.${data}.${signature}`;
}

export function verifyToken(token) {
  if (!token || !SECRET_KEY) return null;
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  const [header, data, signature] = parts;
  const expectedSig = crypto
    .createHmac('sha256', SECRET_KEY)
    .update(`${header}.${data}`)
    .digest('base64url');

  if (signature !== expectedSig) return null;

  try {
    const payload = JSON.parse(Buffer.from(data, 'base64url').toString('utf8'));
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
      return null; // Expired
    }
    return payload;
  } catch (err) {
    return null;
  }
}

export function getCurrentAdmin() {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('globon_admin_token')?.value;
    if (!token) return null;
    return verifyToken(token);
  } catch (err) {
    return null;
  }
}
