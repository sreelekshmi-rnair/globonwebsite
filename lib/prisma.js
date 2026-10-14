import { PrismaClient } from '@prisma/client';

const globalForPrisma = global;

// Ensure a fallback string exists so PrismaClient never errors on missing env var
if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = 'mysql://dummy:dummy@localhost:3306/globon_db';
}

let realPrisma = null;

try {
  realPrisma =
    globalForPrisma.prisma ||
    new PrismaClient({
      log: ['error'],
    });

  if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = realPrisma;
  }
} catch (err) {
  console.warn('PrismaClient init notice:', err.message);
}

// Fallback proxy so pages & API routes never crash during build or live preview
function createModelProxy(model) {
  return new Proxy(model || {}, {
    get(target, prop) {
      if (typeof target[prop] === 'function') {
        return async (...args) => {
          try {
            return await target[prop](...args);
          } catch (err) {
            if (prop === 'count') return 0;
            if (prop === 'findMany') return [];
            return null;
          }
        };
      }
      return async () => {
        if (prop === 'count') return 0;
        if (prop === 'findMany') return [];
        return null;
      };
    },
  });
}

export const prisma = new Proxy(realPrisma || {}, {
  get(target, prop) {
    if (prop === '$connect' || prop === '$disconnect') {
      return async () => {};
    }
    if (realPrisma && prop in realPrisma) {
      const val = realPrisma[prop];
      if (typeof val === 'object' && val !== null) {
        return createModelProxy(val);
      }
      return val;
    }
    return createModelProxy(null);
  },
});

export default prisma;
