import AboutSection from "./components/about/AboutSection";
import ExperienceSection from "./components/experience/ExperienceSection";
import HeroSection from "./components/hero/HeroSection";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Services />
      <ExperienceSection />
      <Testimonials />
    </>
  );
}
