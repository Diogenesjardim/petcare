import Link from "next/link";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { Rating } from "@/components/ui/Rating";
import { ServicePills } from "@/components/caregiver/ServicePills";
import { formatBRL, formatDistance } from "@/lib/format";
import type { CaregiverSummary } from "@/types";

interface CaregiverCardProps {
  caregiver: CaregiverSummary;
}

export function CaregiverCard({ caregiver }: CaregiverCardProps) {
  const profileHref = `/cuidador/${caregiver.id}`;

  return (
    <article className="group relative flex flex-col gap-5 rounded-2xl border border-line bg-white p-5 shadow-soft transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-forest-200 hover:shadow-lift sm:flex-row sm:p-6">
      <div className="flex items-start gap-4 sm:flex-col sm:items-center sm:gap-3">
        <Avatar
          name={caregiver.name}
          size="xl"
          verified={caregiver.verified}
          className="shrink-0"
        />
        <div className="sm:hidden">
          <h3 className="font-display text-lg font-semibold text-ink">
            <Link href={profileHref} className="after:absolute after:inset-0">
              {caregiver.name}
            </Link>
          </h3>
          <p className="mt-0.5 flex items-center gap-1 text-sm text-ink-soft">
            <Icon name="map-pin" className="h-3.5 w-3.5" />
            {caregiver.neighborhood} · {formatDistance(caregiver.distanceKm)}
          </p>
        </div>
      </div>

      <div className="min-w-0 flex-1">
        <div className="hidden sm:block">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <h3 className="font-display text-lg font-semibold text-ink">
              <Link href={profileHref} className="after:absolute after:inset-0">
                {caregiver.name}
              </Link>
            </h3>
            {caregiver.acceptsLastMinute && (
              <Badge tone="sand" size="sm" icon="sparkles">
                Aceita última hora
              </Badge>
            )}
          </div>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-soft">
            <Icon name="map-pin" className="h-4 w-4 shrink-0" />
            {caregiver.neighborhood}, {caregiver.city}
            <span className="text-ink-faint">
              · {formatDistance(caregiver.distanceKm)} de você
            </span>
          </p>
        </div>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-soft">
          {caregiver.headline}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
          <Rating value={caregiver.rating} count={caregiver.reviewsCount} size="sm" />
          <span className="flex items-center gap-1.5 text-xs text-ink-soft">
            <Icon name="calendar-check" className="h-3.5 w-3.5" />
            {caregiver.yearsExperience} anos de experiência
          </span>
          <span className="flex items-center gap-1.5 text-xs text-ink-soft">
            <Icon name="message-circle" className="h-3.5 w-3.5" />
            Responde {caregiver.respondsIn}
          </span>
        </div>

        <div className="mt-4">
          <ServicePills services={caregiver.services} />
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4">
          <div className="min-w-0">
            <p className="text-xs text-ink-faint">a partir de</p>
            <p className="font-display text-xl font-semibold text-ink">
              {formatBRL(caregiver.fromPrice)}
              <span className="ml-1 text-xs font-normal text-ink-faint">
                /{caregiver.fromPriceUnit}
              </span>
            </p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-xl border border-line-strong bg-white px-4 py-2 text-sm font-medium text-forest-800 transition-colors group-hover:border-forest-300 group-hover:bg-forest-50">
            Ver perfil
            <Icon
              name="arrow-right"
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            />
          </span>
        </div>
      </div>
    </article>
  );
}
