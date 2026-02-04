/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  images: {
    // طريقة استخدام الدومينات مباشرة
    domains: ['images.unsplash.com', 'i.pinimg.com', 'm.media-amazon.com'],
    
    // أو لو حابب تستخدم remotePatterns بدل domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
