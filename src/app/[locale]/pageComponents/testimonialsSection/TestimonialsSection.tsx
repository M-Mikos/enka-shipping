"use client";

import ContentContainer from "@/components/ContentContainer";
import SectionContainer from "@/components/SectionContainer";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import CarouselNav from "@/components/ui/carousel-nav";
import { Paragraph } from "@/components/ui/paragraph";
import { useEffect, useState } from "react";

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
            <CarouselItem className="flex items-center h-64 justify-center">
              <blockquote className="w-4xl">
                <Paragraph variant="large" className="text-slate-950 mb-12">
                  Lorem ipsum
                </Paragraph>
                <footer>
                  <Paragraph variant="small" className="font-bold text-slate-950">
                    Piotr Pogorzelski
                  </Paragraph>
                  <Paragraph variant="small">CEO of The Company</Paragraph>
                </footer>
              </blockquote>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        <CarouselNav api={api} current={current} count={count} />
      </ContentContainer>
    </SectionContainer>
  );
}

export default TestimonialsSection;
