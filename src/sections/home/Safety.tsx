import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconTile } from "@/components/ui/IconTile";
import { Reveal } from "@/components/ui/Reveal";
import { safetyItems } from "@/data/home";

export function Safety() {
  return (
    <Section id="seguranca" tone="paper">
      <SectionHeading
        eyebrow="Segurança"
        title="Segurança para você. Carinho para ele."
        description="Cada atendimento acontece com verificação, registro e um time pronto para ajudar."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {safetyItems.map((item, index) => (
          <Reveal
            key={item.title}
            delay={(index % 3) * 80}
            className="flex h-full gap-4 rounded-2xl border border-line bg-cream/60 p-5"
          >
            <IconTile name={item.icon} size="md" />
            <div>
              <h3 className="text-[0.95rem] font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
