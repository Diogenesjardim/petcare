import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { experienceStages } from "@/data/home";
import { assetPath } from "@/lib/asset-path";

export function Experience() {
  return (
    <Section id="experiencia" tone="mint">
      <SectionHeading
        eyebrow="Acompanhamento"
        title="Você acompanha cada momento."
        description="Antes, durante e depois. O serviço fica visível para você o tempo todo, direto no aplicativo."
      />

      <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3">
        {experienceStages.map((stage, index) => (
          <Reveal
            key={stage.id}
            delay={index * 90}
            className="flex flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-soft"
          >
            <div className="relative flex justify-center bg-gradient-to-b from-forest-50/70 to-white px-6 pt-8">
              <Badge tone="mint" className="absolute left-5 top-5">
                {stage.label}
              </Badge>
              <Image
                src={assetPath(stage.image)}
                alt={stage.imageAlt}
                width={480}
                height={1185}
                sizes="(min-width: 1024px) 300px, 70vw"
                className="h-auto w-[62%] max-w-[240px] drop-shadow-[0_18px_30px_rgba(15,61,31,0.16)]"
              />
            </div>

            <div className="flex flex-1 flex-col gap-3 border-t border-line p-6">
              <h3 className="text-lg font-semibold text-ink">{stage.title}</h3>
              <p className="text-sm leading-relaxed text-ink-soft">
                {stage.description}
              </p>
              <ul className="mt-1 space-y-2">
                {stage.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm text-ink"
                  >
                    <Icon
                      name="check"
                      className="mt-0.5 h-4 w-4 shrink-0 text-forest-600"
                      strokeWidth={2.5}
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
