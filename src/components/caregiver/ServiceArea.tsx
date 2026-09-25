import { Icon } from "@/components/ui/Icon";

interface ServiceAreaProps {
  neighborhoods: string[];
  centerLabel: string;
}

const pins = [
  { top: "46%", left: "50%", primary: true },
  { top: "28%", left: "26%", primary: false },
  { top: "62%", left: "72%", primary: false },
  { top: "34%", left: "74%", primary: false },
];

export function ServiceArea({ neighborhoods, centerLabel }: ServiceAreaProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white">
      <div
        className="relative h-52 w-full bg-forest-50"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,61,31,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,61,31,0.06) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
        role="img"
        aria-label={`Mapa ilustrativo da área de atendimento em torno de ${centerLabel}`}
      >
        <span className="absolute left-[14%] top-[18%] h-16 w-24 rounded-2xl bg-forest-100/80" />
        <span className="absolute bottom-[12%] right-[16%] h-14 w-20 rounded-full bg-forest-100/70" />

        {pins.map((pin, index) => (
          <span
            key={index}
            className="absolute -translate-x-1/2 -translate-y-full"
            style={{ top: pin.top, left: pin.left }}
          >
            {pin.primary ? (
              <span className="flex flex-col items-center">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-forest-600 text-white shadow-lift ring-4 ring-white">
                  <Icon name="map-pin" className="h-4 w-4" strokeWidth={2.5} />
                </span>
              </span>
            ) : (
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white text-forest-600 shadow-soft ring-1 ring-line">
                <Icon name="paw-print" className="h-3 w-3" strokeWidth={2} />
              </span>
            )}
          </span>
        ))}
      </div>

      <div className="border-t border-line p-5">
        <p className="text-sm text-ink-soft">
          Atende {centerLabel} e regiões vizinhas:
        </p>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {neighborhoods.map((name) => (
            <li
              key={name}
              className="inline-flex items-center gap-1.5 rounded-full bg-forest-50 px-3 py-1.5 text-xs font-medium text-forest-800 ring-1 ring-inset ring-forest-100"
            >
              <Icon name="map-pin" className="h-3 w-3" />
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
