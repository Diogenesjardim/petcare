import type { IconName } from "@/components/ui/Icon";
import type { ExperienceStage, HowItWorksStep, SafetyItem } from "@/types";

export const heroTrustPoints: { label: string; icon: IconName }[] = [
  { label: "Cuidadores verificados", icon: "shield-check" },
  { label: "Acompanhamento", icon: "map-pin" },
  { label: "Fotos durante o serviço", icon: "camera" },
  { label: "Avaliações reais", icon: "star" },
];

export const howItWorksSteps: HowItWorksStep[] = [
  {
    number: 1,
    title: "Conte o que seu pet precisa",
    description:
      "Raça, idade, rotina e as manias dele. Quanto mais a gente sabe, mais o cuidado fica com a sua cara.",
    icon: "list-checks",
  },
  {
    number: 2,
    title: "Encontre o cuidador ideal",
    description:
      "Compare perfis, avaliações e valores. Você escolhe quem combina com o seu pet e com a sua rotina.",
    icon: "search",
  },
  {
    number: 3,
    title: "Acompanhe o atendimento",
    description:
      "Início do serviço, localização e fotos chegam para você enquanto tudo acontece.",
    icon: "route",
  },
  {
    number: 4,
    title: "Fique tranquilo",
    description:
      "No fim, um relatório com duração, trajeto, observações e o álbum completo do dia.",
    icon: "heart",
  },
];

export const experienceStages: ExperienceStage[] = [
  {
    id: "antes",
    label: "Antes",
    title: "Serviço agendado.",
    description:
      "Cuidador confirmado, horário definido e as instruções do seu pet já com quem vai cuidar.",
    image: "/images/mockups/mockup-agendado.jpg",
    imageAlt:
      "Tela inicial do app PetCare com o próximo passeio de Marshmallow confirmado.",
    points: [
      "Cuidador confirmado para a data",
      "Horário e duração combinados",
      "Rotina e cuidados do pet registrados",
    ],
  },
  {
    id: "durante",
    label: "Durante",
    title: "Acompanhamento do atendimento.",
    description:
      "Você vê o serviço começar, acompanha a localização e recebe fotos ao longo do caminho.",
    image: "/images/mockups/mockup-durante.jpg",
    imageAlt:
      "Tela do app mostrando o passeio de Marshmallow em andamento com mapa e tempo decorrido.",
    points: [
      "Aviso quando o serviço começa",
      "Localização em tempo real",
      "Fotos enviadas durante o passeio",
    ],
  },
  {
    id: "depois",
    label: "Depois",
    title: "Fotos, informações e relatório.",
    description:
      "Ao final, um resumo completo: quanto durou, quanto andou, como foi e todas as fotos do dia.",
    image: "/images/mockups/mockup-relatorio.jpg",
    imageAlt:
      "Tela de relatório do serviço no app PetCare, com duração, distância e observações do cuidador.",
    points: [
      "Duração e distância do serviço",
      "Observações escritas pelo cuidador",
      "Álbum completo para guardar",
    ],
  },
];

export const safetyItems: SafetyItem[] = [
  {
    title: "Perfis verificados",
    description:
      "Documento, referências e entrevista antes de qualquer cuidador atender pela PetCare.",
    icon: "badge-check",
  },
  {
    title: "Avaliações reais",
    description:
      "Só quem contratou pode avaliar. As notas e os comentários ficam visíveis no perfil.",
    icon: "star",
  },
  {
    title: "Registro dos atendimentos",
    description:
      "Cada serviço fica salvo com data, horário, cuidador e o que foi combinado.",
    icon: "list-checks",
  },
  {
    title: "Fotos durante o serviço",
    description:
      "O cuidador envia fotos no caminho, para você ver como o seu pet está naquele momento.",
    icon: "camera",
  },
  {
    title: "Relatório ao fim",
    description:
      "Trajeto, duração, alimentação e observações organizados em um resumo simples.",
    icon: "route",
  },
  {
    title: "Suporte quando precisar",
    description:
      "Um time de gente de verdade para ajudar antes, durante e depois do atendimento.",
    icon: "life-buoy",
  },
];

export const becomeCaregiverPoints: string[] = [
  "Você define os seus valores",
  "Você escolhe os dias e horários",
  "Pagamento organizado pela PetCare",
];
