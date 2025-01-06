/** @type {import('next').NextConfig} */
import path from "path";

const nextConfig = {
  webpack(config) {
    config.resolve.alias["@"] = path.resolve("src");
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
      },
    ],
  },
};

export default nextConfig;
