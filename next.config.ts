import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'komarev.com',
      },
    ],
    unoptimized: true, // Required for static export
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
