/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["pbs.twimg.com", 'abs.twimg.com'],
  },
  reactStrictMode: false,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};

module.exports = nextConfig
