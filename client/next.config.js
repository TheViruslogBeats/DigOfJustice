/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.virusbeats.ru",
        port: "",
        pathname: "/img/speakers/*",
      },
    ],
  },
};

module.exports = nextConfig;
