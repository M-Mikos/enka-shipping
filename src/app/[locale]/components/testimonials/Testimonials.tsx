"use client";

import ContentContainer from "@/components/ContentContainer";
import SectionContainer from "@/components/SectionContainer";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import CarouselNav from "@/components/ui/carousel-nav";
import { useEffect, useState } from "react";

function Testimonials() {
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
                <p className="text-2xl font-semibold mb-12 prose prose-no-quotes">Lorem ipsum</p>
                <footer>
                  <p className="font-bold">Piotr Pogorzelski</p>
                  <p className="text-slate-600">CEO of The Company</p>
                </footer>
              </blockquote>
            </CarouselItem>
            <CarouselItem className="flex items-center h-64 justify-center">
              <blockquote className="w-4xl">
                <p className="text-2xl font-semibold mb-12">Lorem ipsum</p>
                <footer>
                  <p className="font-bold">Piotr Pogorzelski</p>
                  <p className="text-slate-600">CEO of The Company</p>
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

export default Testimonials;
