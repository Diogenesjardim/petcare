import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/Icon";
import { getServiceLabel } from "@/data/services";
import { formatDateShort } from "@/lib/format";
import type { ServiceId } from "@/types";

const timeLabels: Record<string, string> = {
  manha: "de manhã",
  tarde: "de tarde",
  noite: "à noite",
};

export interface SearchQuery {
  local: string | null;
  servico: string | null;
  data: string | null;
  horario: string | null;
  cuidador: string | null;
}

function chip(icon: IconName, text: string) {
  return (
    <span
      key={text}
      className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-xs font-medium text-ink-soft"
    >
      <Icon name={icon} className="h-3.5 w-3.5 text-forest-600" />
      {text}
    </span>
  );
}

export function SearchSummary({ query }: { query: SearchQuery }) {
  const dateLabel = query.data ? formatDateShort(query.data) : null;
  const editHref = (() => {
    const params = new URLSearchParams();
    if (query.local) params.set("local", query.local);
    if (query.servico) params.set("servico", query.servico);
    if (query.data) params.set("data", query.data);
    if (query.horario) params.set("horario", query.horario);
    if (query.cuidador) params.set("cuidador", query.cuidador);
    const qs = params.toString();
    return qs ? `/buscar-cuidador?${qs}` : "/buscar-cuidador";
  })();

  const chips = [
    query.local ? chip("map-pin", query.local) : null,
    query.servico
      ? chip("footprints", getServiceLabel(query.servico as ServiceId))
      : null,
    dateLabel ? chip("calendar-days", dateLabel) : null,
    query.horario && timeLabels[query.horario]
      ? chip("clock", timeLabels[query.horario])
      : null,
  ].filter(Boolean);

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-2">
        {chips.length > 0 ? (
          chips
        ) : (
          <span className="text-sm text-ink-soft">
            Mostrando todos os cuidadores
          </span>
        )}
      </div>
      <Link
        href={editHref}
        className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-forest-700 transition-colors hover:text-forest-900"
      >
        <Icon name="search" className="h-4 w-4" />
        Editar busca
      </Link>
    </div>
  );
}
