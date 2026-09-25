"use client";

import { Icon } from "@/components/ui/Icon";
import { bookableServices } from "@/data/services";
import { cn } from "@/lib/utils";
import type { ServiceId } from "@/types";

export type SortKey =
  | "relevancia"
  | "melhor-avaliados"
  | "mais-proximos"
  | "menor-preco";

export interface FilterState {
  services: ServiceId[];
  verifiedOnly: boolean;
  lastMinuteOnly: boolean;
  maxPrice: number | null;
  sort: SortKey;
}

export const defaultFilters: FilterState = {
  services: [],
  verifiedOnly: false,
  lastMinuteOnly: false,
  maxPrice: null,
  sort: "relevancia",
};

export const sortOptions: { value: SortKey; label: string }[] = [
  { value: "relevancia", label: "Mais relevantes" },
  { value: "melhor-avaliados", label: "Melhor avaliados" },
  { value: "mais-proximos", label: "Mais próximos" },
  { value: "menor-preco", label: "Menor preço" },
];

const priceOptions: { value: number | null; label: string }[] = [
  { value: null, label: "Qualquer valor" },
  { value: 40, label: "Até R$ 40" },
  { value: 60, label: "Até R$ 60" },
  { value: 120, label: "Até R$ 120" },
];

interface CaregiverFiltersProps {
  value: FilterState;
  onChange: (next: FilterState) => void;
  onReset: () => void;
  isDirty: boolean;
}

function Switch({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (next: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="flex w-full items-center justify-between gap-3 py-1.5 text-left text-sm text-ink"
    >
      {label}
      <span
        className={cn(
          "relative h-6 w-10 shrink-0 rounded-full transition-colors",
          checked ? "bg-forest-600" : "bg-line-strong",
        )}
      >
        <span
          className={cn(
            "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform",
            checked ? "translate-x-[1.125rem]" : "translate-x-0.5",
          )}
        />
      </span>
    </button>
  );
}

export function CaregiverFilters({
  value,
  onChange,
  onReset,
  isDirty,
}: CaregiverFiltersProps) {
  const toggleService = (id: ServiceId) => {
    const has = value.services.includes(id);
    onChange({
      ...value,
      services: has
        ? value.services.filter((s) => s !== id)
        : [...value.services, id],
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label
          htmlFor="sort"
          className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint"
        >
          Ordenar por
        </label>
        <div className="relative">
          <select
            id="sort"
            value={value.sort}
            onChange={(event) =>
              onChange({ ...value, sort: event.target.value as SortKey })
            }
            className="h-11 w-full appearance-none rounded-xl border border-line-strong bg-white pl-3.5 pr-9 text-sm text-ink outline-none transition-colors focus:border-forest-400 focus:ring-2 focus:ring-forest-500/30"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <Icon
            name="chevron-down"
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint"
          />
        </div>
      </div>

      <fieldset className="space-y-2 border-t border-line pt-5">
        <legend className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint">
          Serviços
        </legend>
        <div className="space-y-1">
          {bookableServices.map((service) => {
            const checked = value.services.includes(service.id);
            return (
              <label
                key={service.id}
                className="flex cursor-pointer items-center gap-3 py-1.5 text-sm text-ink"
              >
                <span
                  className={cn(
                    "grid h-5 w-5 shrink-0 place-items-center rounded-md border transition-colors",
                    checked
                      ? "border-forest-600 bg-forest-600 text-white"
                      : "border-line-strong bg-white",
                  )}
                >
                  {checked && (
                    <Icon name="check" className="h-3.5 w-3.5" strokeWidth={3} />
                  )}
                </span>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleService(service.id)}
                  className="sr-only"
                />
                {service.name}
              </label>
            );
          })}
        </div>
      </fieldset>

      <fieldset className="space-y-2 border-t border-line pt-5">
        <legend className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint">
          Preço máximo
        </legend>
        <div className="space-y-1">
          {priceOptions.map((option) => {
            const checked = value.maxPrice === option.value;
            return (
              <label
                key={String(option.value)}
                className="flex cursor-pointer items-center gap-3 py-1.5 text-sm text-ink"
              >
                <span
                  className={cn(
                    "grid h-5 w-5 shrink-0 place-items-center rounded-full border transition-colors",
                    checked ? "border-forest-600" : "border-line-strong",
                  )}
                >
                  {checked && (
                    <span className="h-2.5 w-2.5 rounded-full bg-forest-600" />
                  )}
                </span>
                <input
                  type="radio"
                  name="maxPrice"
                  checked={checked}
                  onChange={() => onChange({ ...value, maxPrice: option.value })}
                  className="sr-only"
                />
                {option.label}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="space-y-1 border-t border-line pt-5">
        <Switch
          checked={value.verifiedOnly}
          onChange={(next) => onChange({ ...value, verifiedOnly: next })}
          label="Somente verificados"
        />
        <Switch
          checked={value.lastMinuteOnly}
          onChange={(next) => onChange({ ...value, lastMinuteOnly: next })}
          label="Aceita última hora"
        />
      </div>

      {isDirty && (
        <button
          type="button"
          onClick={onReset}
          className="flex items-center gap-1.5 text-sm font-medium text-forest-700 transition-colors hover:text-forest-900"
        >
          <Icon name="x" className="h-4 w-4" />
          Limpar filtros
        </button>
      )}
    </div>
  );
}
