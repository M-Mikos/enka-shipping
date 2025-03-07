import { generatePageMetadata } from "@/lib/utils";
import AboutSection from "./pageComponents/aboutSection/AboutSection";
import ContactSection from "./pageComponents/contactSection/ContactSection";
import ExperienceSection from "./pageComponents/experienceSection/ExperienceSection";
import HeroSection from "./pageComponents/heroSection/HeroSection";
import ServicesSection from "./pageComponents/servicesSection/ServicesSection";
import TestimonialsSection from "./pageComponents/testimonialsSection/TestimonialsSection";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("HomePage.Metadata");
  return generatePageMetadata(t);
}

export default function Home() {
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
