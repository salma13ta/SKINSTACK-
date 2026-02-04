const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  images: {
    // طريقة استخدام الدومينات مباشرة
    domains: ['images.unsplash.com', 'i.pinimg.com', 'm.media-amazon.com'],
    // أو طريقة استخدام remotePatterns
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
