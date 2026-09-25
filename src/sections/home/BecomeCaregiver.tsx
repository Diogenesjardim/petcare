import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Avatar } from "@/components/ui/Avatar";
import { Reveal } from "@/components/ui/Reveal";
import { becomeCaregiverPoints } from "@/data/home";

export function BecomeCaregiver() {
  return (
    <Section id="cuidadores" tone="cream">
      <div className="overflow-hidden rounded-[1.75rem] border border-forest-100 bg-forest-50">
        <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:items-center lg:gap-16 lg:p-16">
          <div className="max-w-lg">
            <Reveal
              as="span"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-forest-700"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-forest-500" />
              Seja cuidador
            </Reveal>
            <Reveal as="h2" delay={60} className="mt-4 text-3xl sm:text-4xl">
              Ama animais?
            </Reveal>
            <Reveal as="p" delay={120} className="mt-4 text-lg leading-relaxed text-ink-soft">
              Transforme esse carinho em uma oportunidade. Monte seu perfil,
              defina a sua agenda e receba solicitações de tutores perto de você.
            </Reveal>

            <Reveal delay={180} as="ul" className="mt-6 space-y-3">
              {becomeCaregiverPoints.map((point) => (
                <li key={point} className="flex items-center gap-3 text-ink">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-forest-600 text-white">
                    <Icon name="check" className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {point}
                </li>
              ))}
            </Reveal>

            <Reveal delay={240} className="mt-8">
              <Button href="/#cuidadores" size="lg">
                Quero ser cuidador
                <Icon name="arrow-right" className="h-4 w-4" />
              </Button>
            </Reveal>
          </div>

          <Reveal delay={140} className="lg:justify-self-end">
            <div className="w-full max-w-sm rounded-2xl border border-line bg-white p-5 shadow-lift">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-forest-50 px-2.5 py-1 text-xs font-semibold text-forest-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-forest-500" />
                  Nova solicitação
                </span>
                <span className="text-xs text-ink-faint">há 2 min</span>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <Avatar name="Diogenes Jardim" size="md" />
                <div>
                  <p className="text-sm font-semibold text-ink">Diogenes J.</p>
                  <p className="text-xs text-ink-soft">Tutor do Marshmallow</p>
                </div>
              </div>

              <dl className="mt-4 space-y-2 border-t border-line pt-4 text-sm">
                <div className="flex items-center justify-between">
                  <dt className="text-ink-soft">Serviço</dt>
                  <dd className="font-medium text-ink">Passeio, 40 min</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-ink-soft">Região</dt>
                  <dd className="font-medium text-ink">Vila Mariana</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-ink-soft">Quando</dt>
                  <dd className="font-medium text-ink">Hoje, 17:00</dd>
                </div>
              </dl>

              <div className="mt-5 grid grid-cols-2 gap-2">
                <span className="grid h-10 place-items-center rounded-xl border border-line-strong text-sm font-medium text-ink-soft">
                  Recusar
                </span>
                <span className="grid h-10 place-items-center rounded-xl bg-forest-600 text-sm font-medium text-white">
                  Aceitar
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
