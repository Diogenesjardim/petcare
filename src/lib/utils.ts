export type ClassValue = string | number | false | null | undefined;

/**
 * Minimal className joiner. Filters falsy values and flattens.
 */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}

/**
 * Deterministic pick from a list based on a seed string. Used to give mock
 * entities stable, varied styling without randomness on every render.
 */
export function seededIndex(seed: string, length: number): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash) % Math.max(length, 1);
}

/** Initials from a full name, at most two letters. */
export function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
