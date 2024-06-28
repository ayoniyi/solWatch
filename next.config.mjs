/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Handle ESM externals
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false, // if you encounter issues with 'fs' module
      };
    }
    return config;
  },
};

export default nextConfig;
