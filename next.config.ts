import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd2alght3o41s9j.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: '**.zomi.menu',
      },
    ],
  },
};

export default nextConfig;
