import AboutSection from "./pageComponents/aboutSection/AboutSection";
import ContactSection from "./pageComponents/contactSection/ContactSection";
import ExperienceSection from "./pageComponents/experienceSection/ExperienceSection";
import HeroSection from "./pageComponents/heroSection/HeroSection";
import ServicesSection from "./pageComponents/servicesSection/ServicesSection";
import TestimonialsSection from "./pageComponents/testimonialsSection/TestimonialsSection";

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
