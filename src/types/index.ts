import type { IconName } from "@/components/ui/Icon";

export type ServiceId = "passeio" | "visita" | "pet-sitter" | "hospedagem";

export interface Service {
  id: ServiceId;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  icon: IconName;
  fromPrice: number | null;
  priceUnit: string;
  status: "ativo" | "em-breve";
}

export interface HowItWorksStep {
  number: number;
  title: string;
  description: string;
  icon: IconName;
}

export type ExperiencePhase = "antes" | "durante" | "depois";

export interface ExperienceStage {
  id: ExperiencePhase;
  label: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  points: string[];
}

export interface SafetyItem {
  title: string;
  description: string;
  icon: IconName;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export interface CaregiverServiceRate {
  service: ServiceId;
  price: number;
  unit: string;
}

export interface CaregiverReview {
  id: string;
  author: string;
  petName: string;
  petBreed: string;
  rating: number;
  date: string;
  service: ServiceId;
  text: string;
}

export type DayPart = "manha" | "tarde" | "noite";

export interface DayAvailability {
  day: string;
  shortDay: string;
  parts: DayPart[];
}

export interface Caregiver {
  id: string;
  name: string;
  headline: string;
  neighborhood: string;
  city: string;
  state: string;
  distanceKm: number;
  rating: number;
  reviewsCount: number;
  completedServices: number;
  repeatClientRate: number;
  yearsExperience: number;
  verified: boolean;
  respondsIn: string;
  acceptsLastMinute: boolean;
  about: string[];
  highlights: string[];
  acceptedPets: string[];
  rates: CaregiverServiceRate[];
  serviceArea: string[];
  availability: DayAvailability[];
  availabilityNote: string;
  photos: { src: string; alt: string }[];
  reviews: CaregiverReview[];
}

export interface CaregiverSummary
  extends Pick<
    Caregiver,
    | "id"
    | "name"
    | "headline"
    | "neighborhood"
    | "city"
    | "distanceKm"
    | "rating"
    | "reviewsCount"
    | "yearsExperience"
    | "verified"
    | "respondsIn"
    | "acceptsLastMinute"
  > {
  services: ServiceId[];
  fromPrice: number;
  fromPriceUnit: string;
}
