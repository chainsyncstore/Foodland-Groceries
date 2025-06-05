/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com']
  },
  // Do NOT set output: 'export' unless you intend a static export and your app supports it.
  // Do NOT set distDir or outputDirectory unless you have a specific reason.
};

module.exports = nextConfig;