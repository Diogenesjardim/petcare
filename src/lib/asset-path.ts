/**
 * GitHub Pages serves this site from a sub-path (/<repo-name>/), set at
 * build time via PAGES_BASE_PATH (see next.config.ts and the deploy
 * workflow). next/link and next/router pick this up automatically, but
 * next/image does not add it to `src` on its own, so local image paths
 * need to go through this helper.
 */
const basePath = process.env.PAGES_BASE_PATH ?? "";

export function assetPath(path: string): string {
  if (!basePath) return path;
  return path.startsWith("/") ? `${basePath}${path}` : `${basePath}/${path}`;
}
