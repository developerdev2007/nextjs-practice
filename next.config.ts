import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // domains: ["lh3.googleusercontent.com"],
  // images: {
  //   domains: ["lh3.googleusercontent.com", "avatars.githubusercontent.com"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
