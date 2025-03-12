import { generatePageMetadata, isMobile } from "@/lib/utils";
import AboutSection from "./pageComponents/aboutSection/AboutSection";
import ContactSection from "./pageComponents/contactSection/ContactSection";
import ExperienceSection from "./pageComponents/experienceSection/ExperienceSection";
import HeroSection from "./pageComponents/heroSection/HeroSection";
import ServicesSection from "./pageComponents/servicesSection/ServicesSection";
import TestimonialsSection from "./pageComponents/testimonialsSection/TestimonialsSection";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { headers } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("HomePage.Metadata");
  return generatePageMetadata(t);
}

export default async function Home() {
  const header = await headers();
  const userAgent = header.get("user-agent") || "";
  const checkIsMobile = isMobile(userAgent);

  return (
    <>
      <HeroSection isMobile={checkIsMobile} />
      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
