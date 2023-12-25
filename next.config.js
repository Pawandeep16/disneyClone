/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "beforeifly.com",
      },
    ],
  },
};

module.exports = nextConfig;
