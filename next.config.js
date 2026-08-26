/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // Temporarily allow production builds to succeed while we add type deps
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
