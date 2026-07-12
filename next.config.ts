import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  allowedDevOrigins: ['10.179.196.88'],
};

export default nextConfig;
