import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { footerColumns, socialLinks } from "@/data/navigation";

const currentYear = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="border-t border-forest-800 bg-forest-900 text-forest-100">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo tone="inverse" href="/" />
            <p className="mt-4 text-sm leading-relaxed text-forest-100/70">
              Cuidado e carinho quando você não pode estar. Cuidadores
              verificados para passeios, visitas e cuidados do seu pet.
            </p>
            <Button
              href="/buscar-cuidador"
              variant="inverse"
              size="sm"
              className="mt-6"
            >
              Encontrar um cuidador
            </Button>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="font-display text-sm font-semibold tracking-tight text-white">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-forest-100/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-forest-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-forest-100/60">
            © {currentYear} PetCare. Cuidado feito com atenção aos detalhes.
          </p>
          <div className="flex items-center gap-5">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-forest-100/70 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-6 text-xs text-forest-100/45">
          Marshmallow, Spitz Alemão de 1 ano, é o mascote da PetCare.
        </p>
      </div>
    </footer>
  );
}
