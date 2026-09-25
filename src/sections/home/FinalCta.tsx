import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { assetPath } from "@/lib/asset-path";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-forest-900 text-white">
      <Image
        src={assetPath("/images/gallery/g6.jpg")}
        alt=""
        fill
        aria-hidden="true"
        sizes="100vw"
        className="object-cover object-center opacity-[0.14]"
      />
      <div
        className="u-paw-field pointer-events-none absolute inset-0 opacity-[0.12]"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-3xl px-5 py-20 text-center sm:px-6 sm:py-28 lg:py-32">
        <Reveal
          as="h2"
          className="text-balance text-3xl leading-tight font-semibold sm:text-4xl lg:text-[2.75rem]"
        >
          Seu melhor amigo merece cuidado mesmo quando você não pode estar por
          perto.
        </Reveal>
        <Reveal delay={120} className="mt-8 flex justify-center">
          <Button href="/buscar-cuidador" variant="inverse" size="lg">
            Encontrar um cuidador
            <Icon name="arrow-right" className="h-4 w-4" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
