import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/rema-maule",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
