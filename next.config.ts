import type { NextConfig } from "next";

// Static export so the site can be published as plain HTML/CSS/JS on
// GitHub Pages. PAGES_BASE_PATH is injected by the deploy workflow
// (actions/configure-pages) and is undefined for local dev/build, which
// Next.js treats as "no base path".
const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.PAGES_BASE_PATH,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
