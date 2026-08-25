import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  allowedDevOrigins: [
    '192.168.100.113',
    '10.179.196.88',
    'localhost:3000',
    'localhost:3001',
    'localhost:3002',
    'localhost:3003',
    'localhost:3004',
    'localhost:3005',
    '127.0.0.1:3000',
  ],
};

export default nextConfig;
