/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
    ],
  },
  env: {
    API_URL: process.env.REACT_APP_API_URL,
  }
};

module.exports = nextConfig;
