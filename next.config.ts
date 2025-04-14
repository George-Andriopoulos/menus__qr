import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "", // Leave empty unless a specific port is needed
        pathname: "/**", // Allow any path on this host
      },
      // Add other allowed hostnames here if needed
    ],
  },
};

export default nextConfig;
