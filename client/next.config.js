/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.virusbeats.ru",
        pathname: "/img/**",
      },
    ],
  },
};

module.exports = nextConfig;
