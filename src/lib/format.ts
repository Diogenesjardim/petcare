const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

const currencyCents = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
});

/** R$ 45 */
export function formatBRL(value: number): string {
  return currency.format(value);
}

/** R$ 45,00 */
export function formatBRLExact(value: number): string {
  return currencyCents.format(value);
}

/** 4,9 */
export function formatRating(value: number): string {
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
}

/** 1,2 km  ·  850 m */
export function formatDistance(km: number): string {
  if (km < 1) {
    return `${Math.round(km * 1000)} m`;
  }
  return `${km.toLocaleString("pt-BR", { maximumFractionDigits: 1 })} km`;
}

/** "12 de maio de 2026" */
export function formatDateLong(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** "mai. 2026" */
export function formatMonthYear(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleDateString("pt-BR", { month: "short", year: "numeric" });
}

/** "sáb, 6 de set" from a yyyy-mm-dd string */
export function formatDateShort(value: string): string | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return null;
  const date = new Date(
    Number(match[1]),
    Number(match[2]) - 1,
    Number(match[3]),
  );
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString("pt-BR", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

/** "128 avaliações" · "1 avaliação" */
export function pluralize(
  count: number,
  singular: string,
  plural: string,
): string {
  return `${count.toLocaleString("pt-BR")} ${count === 1 ? singular : plural}`;
}
