import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconTile } from "@/components/ui/IconTile";
import { Reveal } from "@/components/ui/Reveal";
import { howItWorksSteps } from "@/data/home";

export function HowItWorks() {
  return (
    <Section id="como-funciona" tone="paper">
      <SectionHeading
        eyebrow="Como funciona"
        title="Do primeiro contato ao relatório final"
        description="Quatro passos simples para deixar o seu pet com quem cuida bem."
      />

      <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
        {howItWorksSteps.map((step, index) => (
          <Reveal
            as="li"
            key={step.number}
            delay={index * 80}
            className="relative flex h-full flex-col gap-4 rounded-2xl border border-line bg-cream/60 p-6 transition-colors hover:border-forest-200"
          >
            <div className="flex items-center justify-between">
              <IconTile name={step.icon} size="md" />
              <span className="font-display text-4xl font-semibold text-forest-100">
                {String(step.number).padStart(2, "0")}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
            <p className="text-sm leading-relaxed text-ink-soft">
              {step.description}
            </p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
