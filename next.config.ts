import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Single Lenis instance in dev to match prod (StrictMode double-mount fights Lenis).
  reactStrictMode: false,
};

export default nextConfig;
