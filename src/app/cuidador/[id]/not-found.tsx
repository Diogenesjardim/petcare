import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

export default function CaregiverNotFound() {
  return (
    <Container className="py-24 text-center">
      <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-forest-50 text-forest-600">
        <Icon name="search" className="h-7 w-7" />
      </span>
      <h1 className="mt-6 font-display text-2xl font-semibold text-ink">
        Cuidador não encontrado
      </h1>
      <p className="mx-auto mt-3 max-w-md text-sm text-ink-soft">
        O perfil que você procurou não está mais disponível ou o endereço está
        incorreto.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Button href="/cuidadores" variant="secondary" size="sm">
          Ver cuidadores
        </Button>
        <Button href="/buscar-cuidador" size="sm">
          Fazer nova busca
        </Button>
      </div>
      <p className="mt-8 text-sm">
        <Link href="/" className="font-medium text-forest-700 hover:text-forest-900">
          Voltar para o início
        </Link>
      </p>
    </Container>
  );
}
