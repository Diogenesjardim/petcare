import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { Rating } from "@/components/ui/Rating";
import { formatDistance, pluralize } from "@/lib/format";
import type { Caregiver } from "@/types";

export function ProfileHero({ caregiver }: { caregiver: Caregiver }) {
  const stats = [
    {
      icon: "calendar-check" as const,
      label: `${caregiver.yearsExperience} anos de experiência`,
    },
    {
      icon: "list-checks" as const,
      label: `${caregiver.completedServices.toLocaleString("pt-BR")} atendimentos`,
    },
    {
      icon: "heart" as const,
      label: `${Math.round(caregiver.repeatClientRate * 100)}% de clientes que voltam`,
    },
    {
      icon: "message-circle" as const,
      label: `Responde ${caregiver.respondsIn}`,
    },
  ];

  return (
    <div className="rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-8">
      <div className="flex flex-col items-start gap-5 sm:flex-row sm:gap-6">
        <Avatar
          name={caregiver.name}
          size="xl"
          verified={caregiver.verified}
          className="shrink-0"
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              {caregiver.name}
            </h1>
            {caregiver.verified && (
              <Badge tone="mint" size="sm" icon="badge-check">
                Verificado
              </Badge>
            )}
            {caregiver.acceptsLastMinute && (
              <Badge tone="sand" size="sm" icon="sparkles">
                Aceita última hora
              </Badge>
            )}
          </div>

          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            {caregiver.headline}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
            <Rating
              value={caregiver.rating}
              count={caregiver.reviewsCount}
              size="md"
            />
            <span className="flex items-center gap-1.5 text-sm text-ink-soft">
              <Icon name="map-pin" className="h-4 w-4 shrink-0" />
              {caregiver.neighborhood}, {caregiver.city} · {caregiver.state}
              <span className="text-ink-faint">
                {" "}
                · {formatDistance(caregiver.distanceKm)} de você
              </span>
            </span>
          </div>
        </div>
      </div>

      <dl className="mt-6 grid grid-cols-2 gap-3 border-t border-line pt-6 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-start gap-2">
            <Icon
              name={stat.icon}
              className="mt-0.5 h-4 w-4 shrink-0 text-forest-600"
              strokeWidth={2}
            />
            <dd className="text-xs leading-snug text-ink-soft">{stat.label}</dd>
          </div>
        ))}
      </dl>

      <p className="sr-only">
        {pluralize(caregiver.reviewsCount, "avaliação", "avaliações")} no total.
      </p>
    </div>
  );
}
