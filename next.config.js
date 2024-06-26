/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "beforeifly.com",
      },

      {
        protocol: "http",
        hostname: "image.tmdb.org",
      },
      {
        protocol: "https",
        hostname: "cdn3.iconfinder.com",
      },
    ],
  },
};

module.exports = nextConfig;
