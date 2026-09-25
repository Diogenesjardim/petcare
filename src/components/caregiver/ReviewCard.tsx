import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Rating } from "@/components/ui/Rating";
import { getServiceLabel } from "@/data/services";
import { formatMonthYear } from "@/lib/format";
import type { CaregiverReview } from "@/types";

export function ReviewCard({ review }: { review: CaregiverReview }) {
  return (
    <article className="rounded-2xl border border-line bg-white p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <Avatar name={review.author} size="sm" />
          <div>
            <p className="text-sm font-semibold text-ink">{review.author}</p>
            <p className="text-xs text-ink-soft">
              Tutor de {review.petName} · {review.petBreed}
            </p>
          </div>
        </div>
        <span className="shrink-0 text-xs text-ink-faint">
          {formatMonthYear(review.date)}
        </span>
      </div>

      <div className="mt-3 flex items-center gap-3">
        <Rating value={review.rating} size="sm" showCount={false} />
        <Badge tone="muted" size="sm">
          {getServiceLabel(review.service)}
        </Badge>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{review.text}</p>
    </article>
  );
}
