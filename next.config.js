/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for Netlify deployment
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // App directory is now stable in Next.js 14
}

module.exports = nextConfig
