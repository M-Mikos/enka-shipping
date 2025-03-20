"use client";

import ContentContainer from "@/components/ContentContainer";
import SectionContainer from "@/components/SectionContainer";
import TestimonialCarousel from "./TestimonialsCarousel";
import { useTranslations } from "next-intl";

function TestimonialsSection() {
  const t = useTranslations("HomePage.TestimonialsSection");
  const testimonials = [
    { content: t("Testimonials.1.content"), author: t("Testimonials.1.author"), title: t("Testimonials.1.title") },
    { content: t("Testimonials.2.content"), author: t("Testimonials.2.author"), title: t("Testimonials.2.title") },
  ];
  return (
    <SectionContainer id={t("id")}>
      <ContentContainer className="mb-16">
        <TestimonialCarousel testimonials={testimonials} />
      </ContentContainer>
    </SectionContainer>
  );
}

export default TestimonialsSection;
