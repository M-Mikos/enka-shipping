import { generatePageMetadata } from "@/lib/utils";
import AboutSection from "./_components/page-components/aboutSection/AboutSection";
import ContactSection from "./_components/page-components/contactSection/ContactSection";
import ExperienceSection from "./_components/page-components/experienceSection/ExperienceSection";
import HeroSection from "./_components/page-components/heroSection/HeroSection";
import ServicesSection from "./_components/page-components/servicesSection/ServicesSection";
import TestimonialsSection from "./_components/page-components/testimonialsSection/TestimonialsSection";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("HomePage.Metadata");
  return generatePageMetadata(t);
}

export default async function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
