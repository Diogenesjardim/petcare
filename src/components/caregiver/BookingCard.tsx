import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { serviceMap } from "@/data/services";
import { formatBRL } from "@/lib/format";
import type { Caregiver } from "@/types";

function cheapestRate(caregiver: Caregiver) {
  return [...caregiver.rates].sort((a, b) => a.price - b.price)[0];
}

function bookingHref(caregiver: Caregiver): string {
  const cheapest = cheapestRate(caregiver);
  const params = new URLSearchParams({ cuidador: caregiver.id });
  if (cheapest) params.set("servico", cheapest.service);
  return `/buscar-cuidador?${params.toString()}`;
}

function RateList({ caregiver }: { caregiver: Caregiver }) {
  return (
    <ul className="divide-y divide-line">
      {caregiver.rates.map((rate) => {
        const service = serviceMap[rate.service];
        return (
          <li
            key={rate.service}
            className="flex items-center justify-between gap-4 py-3"
          >
            <span className="flex items-center gap-2.5 text-sm text-ink">
              <Icon
                name={service.icon}
                className="h-4 w-4 text-forest-600"
                strokeWidth={2}
              />
              {service.name}
            </span>
            <span className="text-sm font-semibold text-ink">
              {formatBRL(rate.price)}
              <span className="ml-1 text-xs font-normal text-ink-faint">
                /{rate.unit}
              </span>
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export function BookingPanel({ caregiver }: { caregiver: Caregiver }) {
  const cheapest = cheapestRate(caregiver);
  const shortUnit = serviceMap[cheapest.service]?.priceUnit ?? cheapest.unit;

  return (
    <div className="sticky top-24 rounded-2xl border border-line bg-white p-6 shadow-soft">
      <p className="text-xs text-ink-faint">a partir de</p>
      <p className="font-display text-3xl font-semibold text-ink">
        {formatBRL(cheapest.price)}
        <span className="ml-1 text-sm font-normal text-ink-faint">
          /{shortUnit}
        </span>
      </p>

      <div className="mt-4 border-t border-line">
        <RateList caregiver={caregiver} />
      </div>

      <Button href={bookingHref(caregiver)} fullWidth size="lg" className="mt-5">
        Agendar com este cuidador
      </Button>

      <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-ink-soft">
        <Icon name="message-circle" className="h-3.5 w-3.5" />
        Responde {caregiver.respondsIn}
      </p>
      <p className="mt-3 text-center text-xs text-ink-faint">
        Sem cobrança agora. Você combina os detalhes com o cuidador antes de
        confirmar.
      </p>
    </div>
  );
}

export function BookingBar({ caregiver }: { caregiver: Caregiver }) {
  const cheapest = cheapestRate(caregiver);
  const shortUnit = serviceMap[cheapest.service]?.priceUnit ?? cheapest.unit;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-4 py-3 backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-2xl items-center justify-between gap-4">
        <div>
          <p className="text-[0.7rem] text-ink-faint">a partir de</p>
          <p className="font-display text-lg font-semibold text-ink">
            {formatBRL(cheapest.price)}
            <span className="ml-1 text-xs font-normal text-ink-faint">
              /{shortUnit}
            </span>
          </p>
        </div>
        <Button href={bookingHref(caregiver)} size="md">
          Agendar
        </Button>
      </div>
    </div>
  );
}
