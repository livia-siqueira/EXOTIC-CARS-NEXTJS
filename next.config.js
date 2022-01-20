/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  images: {
    domains: ['i.ibb.co'],
    deviceSizes: [320,640,768,1024]
  }

}

module.exports = nextConfig
