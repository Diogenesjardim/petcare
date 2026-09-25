import type { Service, ServiceId } from "@/types";

export const services: Service[] = [
  {
    id: "passeio",
    name: "Passeio",
    shortName: "Passeio",
    tagline: "Exercício, diversão e cuidado para o seu pet.",
    description:
      "Meia hora ou uma hora de rua com um cuidador atento. Você recebe o trajeto, as fotos e como o seu pet se comportou.",
    icon: "footprints",
    fromPrice: 35,
    priceUnit: "passeio",
    status: "ativo",
  },
  {
    id: "visita",
    name: "Visita em casa",
    shortName: "Visita",
    tagline: "Alimentação, água, carinho e companhia.",
    description:
      "O cuidador vai até a sua casa, cuida da comida e da água, troca a caixa de areia e passa um tempo com o seu pet.",
    icon: "home",
    fromPrice: 40,
    priceUnit: "visita",
    status: "ativo",
  },
  {
    id: "pet-sitter",
    name: "Pet Sitter",
    shortName: "Pet Sitter",
    tagline: "Cuidado personalizado quando você precisar ficar longe.",
    description:
      "Acompanhamento estendido, com rotina combinada e atualizações ao longo do dia. Ideal para viagens e jornadas longas.",
    icon: "heart-handshake",
    fromPrice: 90,
    priceUnit: "diária",
    status: "ativo",
  },
  {
    id: "hospedagem",
    name: "Hospedagem",
    shortName: "Hospedagem",
    tagline: "O seu pet hospedado na casa de um cuidador de confiança.",
    description:
      "Estamos preparando a hospedagem com o mesmo cuidado dos outros serviços: perfis verificados, fotos e relatório diário.",
    icon: "moon",
    fromPrice: null,
    priceUnit: "noite",
    status: "em-breve",
  },
];

export const serviceMap: Record<ServiceId, Service> = services.reduce(
  (acc, service) => {
    acc[service.id] = service;
    return acc;
  },
  {} as Record<ServiceId, Service>,
);

export const bookableServices = services.filter(
  (service) => service.status === "ativo",
);

export function getServiceLabel(id: ServiceId): string {
  return serviceMap[id]?.name ?? id;
}
