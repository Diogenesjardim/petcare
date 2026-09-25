import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import type { DayAvailability, DayPart } from "@/types";

const parts: { id: DayPart; label: string }[] = [
  { id: "manha", label: "Manhã" },
  { id: "tarde", label: "Tarde" },
  { id: "noite", label: "Noite" },
];

interface AvailabilityGridProps {
  availability: DayAvailability[];
  note?: string;
}

export function AvailabilityGrid({ availability, note }: AvailabilityGridProps) {
  return (
    <div className="rounded-2xl border border-line bg-white p-5 sm:p-6">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[22rem] border-collapse text-sm">
          <thead>
            <tr>
              <th className="w-20 pb-3 text-left text-xs font-semibold uppercase tracking-[0.1em] text-ink-faint">
                Período
              </th>
              {availability.map((day) => (
                <th
                  key={day.day}
                  className="pb-3 text-center text-xs font-semibold text-ink-soft"
                >
                  {day.shortDay}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {parts.map((part) => (
              <tr key={part.id} className="border-t border-line">
                <th
                  scope="row"
                  className="py-3 text-left text-sm font-medium text-ink"
                >
                  {part.label}
                </th>
                {availability.map((day) => {
                  const available = day.parts.includes(part.id);
                  return (
                    <td key={day.day + part.id} className="py-3 text-center">
                      <span
                        className={cn(
                          "mx-auto grid h-6 w-6 place-items-center rounded-full",
                          available
                            ? "bg-forest-100 text-forest-700"
                            : "bg-cream text-transparent",
                        )}
                        aria-label={
                          available
                            ? `${day.day} ${part.label}: disponível`
                            : `${day.day} ${part.label}: indisponível`
                        }
                      >
                        {available ? (
                          <Icon
                            name="check"
                            className="h-3.5 w-3.5"
                            strokeWidth={3}
                          />
                        ) : (
                          <span className="h-1 w-1 rounded-full bg-line-strong" />
                        )}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && (
        <p className="mt-4 flex items-center gap-2 border-t border-line pt-4 text-sm text-ink-soft">
          <Icon name="clock" className="h-4 w-4 shrink-0 text-forest-600" />
          {note}
        </p>
      )}
    </div>
  );
}
