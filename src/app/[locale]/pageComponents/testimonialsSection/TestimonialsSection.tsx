"use client";

import ContentContainer from "@/components/ContentContainer";
import SectionContainer from "@/components/SectionContainer";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import CarouselNav from "@/components/ui/carousel-nav";
import { Paragraph } from "@/components/ui/paragraph";
import { useEffect, useState } from "react";
import TestimonialItem from "./TestimonialItem";

function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <SectionContainer>
      <ContentContainer className="mb-16">
        <Carousel
          opts={{
            loop: true,
          }}
          setApi={setApi}
        >
          <CarouselContent className="py-24">
            <TestimonialItem />
            <TestimonialItem />
          </CarouselContent>
        </Carousel>
        <CarouselNav api={api} current={current} count={count} />
      </ContentContainer>
    </SectionContainer>
  );
}

export default TestimonialsSection;
