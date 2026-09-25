"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useId, useMemo, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { bookableServices } from "@/data/services";
import { getCaregiverById } from "@/data/caregivers";
import type { ServiceId } from "@/types";
import { cn } from "@/lib/utils";

const timeOptions = [
  { value: "", label: "Sem preferência de horário" },
  { value: "manha", label: "Manhã, das 8h às 12h" },
  { value: "tarde", label: "Tarde, das 12h às 18h" },
  { value: "noite", label: "Noite, das 18h às 21h" },
];

function todayLocalISO(): string {
  const now = new Date();
  const offset = now.getTimezoneOffset() * 60000;
  return new Date(now.getTime() - offset).toISOString().slice(0, 10);
}

export function SearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const fieldId = useId();

  const preselectedService = searchParams.get("servico");
  const caregiverId = searchParams.get("cuidador");
  const caregiver = caregiverId ? getCaregiverById(caregiverId) : undefined;

  const today = useMemo(() => todayLocalISO(), []);

  const [location, setLocation] = useState("");
  const [service, setService] = useState<ServiceId>(() => {
    const match = bookableServices.find((s) => s.id === preselectedService);
    return match?.id ?? "passeio";
  });
  const [date, setDate] = useState(today);
  const [time, setTime] = useState("");
  const [touched, setTouched] = useState(false);

  const locationInvalid = touched && location.trim().length === 0;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (location.trim().length === 0) {
      setTouched(true);
      return;
    }

    const params = new URLSearchParams();
    params.set("local", location.trim());
    params.set("servico", service);
    if (date) params.set("data", date);
    if (time) params.set("horario", time);
    if (caregiver) params.set("cuidador", caregiver.id);

    router.push(`/cuidadores?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-line bg-white p-6 shadow-lift sm:p-8"
    >
      {caregiver && (
        <p className="mb-6 flex items-center gap-2 rounded-xl bg-forest-50 px-4 py-3 text-sm text-forest-800">
          <Icon name="heart-handshake" className="h-4 w-4 shrink-0" />
          Você está agendando com <strong>{caregiver.name}</strong>. Confirme os
          detalhes abaixo.
        </p>
      )}

      <fieldset className="space-y-2">
        <legend className="text-sm font-semibold text-ink">
          Onde você precisa do serviço?
        </legend>
        <div className="relative">
          <Icon
            name="map-pin"
            className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-faint"
          />
          <input
            id={`${fieldId}-local`}
            name="local"
            type="text"
            autoComplete="postal-code"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onBlur={() => setTouched(true)}
            placeholder="Digite seu CEP ou endereço"
            aria-invalid={locationInvalid}
            aria-describedby={
              locationInvalid ? `${fieldId}-local-error` : undefined
            }
            className={cn(
              "h-12 w-full rounded-xl border bg-cream/40 pl-11 pr-4 text-[0.95rem] text-ink outline-none transition-colors placeholder:text-ink-faint focus:bg-white focus:ring-2 focus:ring-forest-500/30",
              locationInvalid
                ? "border-red-300 focus:border-red-400"
                : "border-line-strong focus:border-forest-400",
            )}
          />
        </div>
        {locationInvalid && (
          <p id={`${fieldId}-local-error`} className="text-xs text-red-600">
            Informe um CEP ou endereço para buscar cuidadores por perto.
          </p>
        )}
      </fieldset>

      <fieldset className="mt-6 space-y-2">
        <legend className="text-sm font-semibold text-ink">Qual serviço?</legend>
        <div className="grid gap-2 sm:grid-cols-3">
          {bookableServices.map((option) => {
            const active = service === option.id;
            return (
              <label
                key={option.id}
                className={cn(
                  "flex cursor-pointer flex-col gap-1 rounded-xl border p-4 transition-colors",
                  active
                    ? "border-forest-500 bg-forest-50 ring-1 ring-forest-500"
                    : "border-line-strong bg-white hover:border-forest-300 hover:bg-forest-50/50",
                )}
              >
                <input
                  type="radio"
                  name="servico"
                  value={option.id}
                  checked={active}
                  onChange={() => setService(option.id)}
                  className="sr-only"
                />
                <span className="flex items-center justify-between">
                  <Icon
                    name={option.icon}
                    className={cn(
                      "h-5 w-5",
                      active ? "text-forest-700" : "text-ink-soft",
                    )}
                  />
                  {active && (
                    <Icon
                      name="check"
                      className="h-4 w-4 text-forest-600"
                      strokeWidth={3}
                    />
                  )}
                </span>
                <span className="text-sm font-semibold text-ink">
                  {option.shortName}
                </span>
                <span className="text-xs leading-snug text-ink-soft">
                  {option.tagline}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <fieldset className="mt-6 space-y-2">
        <legend className="text-sm font-semibold text-ink">Quando?</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          <div className="relative">
            <Icon
              name="calendar-days"
              className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-faint"
            />
            <input
              id={`${fieldId}-data`}
              name="data"
              type="date"
              value={date}
              min={today}
              onChange={(event) => setDate(event.target.value)}
              className="h-12 w-full rounded-xl border border-line-strong bg-cream/40 pl-11 pr-3 text-[0.95rem] text-ink outline-none transition-colors focus:border-forest-400 focus:bg-white focus:ring-2 focus:ring-forest-500/30"
            />
          </div>
          <div className="relative">
            <Icon
              name="clock"
              className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-faint"
            />
            <select
              id={`${fieldId}-horario`}
              name="horario"
              value={time}
              onChange={(event) => setTime(event.target.value)}
              className="h-12 w-full appearance-none rounded-xl border border-line-strong bg-cream/40 pl-11 pr-9 text-[0.95rem] text-ink outline-none transition-colors focus:border-forest-400 focus:bg-white focus:ring-2 focus:ring-forest-500/30"
            >
              {timeOptions.map((option) => (
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
      </fieldset>

      <Button type="submit" size="lg" fullWidth className="mt-8">
        Buscar cuidadores
        <Icon name="search" className="h-4 w-4" />
      </Button>

      <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-ink-faint">
        <Icon name="shield-check" className="h-3.5 w-3.5" />
        Você vê os perfis e os valores antes de agendar qualquer coisa.
      </p>
    </form>
  );
}
