// Provide default DATABASE_URL for Vercel/build environments if not provided
process.env.DATABASE_URL = process.env.DATABASE_URL || 'mysql://dummy:dummy@localhost:3306/globon_db';

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
