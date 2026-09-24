import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Explicitly tell Turbopack where the project root is.
  // This prevents it from being confused by nested lockfiles (e.g. .kilo worktrees).
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;