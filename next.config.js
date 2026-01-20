/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  // Optimize for production
  compress: true,
  poweredByHeader: false,
  // SEO
  trailingSlash: false,
}

module.exports = nextConfig
