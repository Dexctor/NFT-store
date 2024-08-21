/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        bcrypt: false,
        crypto: false,
        stream: false,
        util: false,
        'mock-aws-s3': false,
        'aws-sdk': false,
        nock: false,
      };
    }
    return config;
  },
}

export default nextConfig;