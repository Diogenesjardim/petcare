import type { ReactNode } from "react";

interface ProfileSectionProps {
  id?: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export function ProfileSection({
  id,
  title,
  description,
  children,
}: ProfileSectionProps) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
        {title}
      </h2>
      {description && (
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          {description}
        </p>
      )}
      <div className="mt-5">{children}</div>
    </section>
  );
}
