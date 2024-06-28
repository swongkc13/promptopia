/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // appDir: true, // Comment this out if it's causing issues
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  }
};

export default nextConfig; // Use ES module export syntax