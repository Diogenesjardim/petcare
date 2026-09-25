import {
  BecomeCaregiver,
  Experience,
  FinalCta,
  Hero,
  HowItWorks,
  Mascot,
  Safety,
  Services,
} from "@/sections/home";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Experience />
      <Services />
      <Safety />
      <Mascot />
      <BecomeCaregiver />
      <FinalCta />
    </>
  );
}
