import { Carousel, CarouselApi, CarouselContent } from "@/components/ui/carousel";
import TestimonialItem from "./TestimonialItem";
import CarouselNav from "@/components/ui/carousel-nav";
import { useEffect, useState } from "react";

interface TestimonialsCarouselProps {
  testimonials: { content: string; author: string; title: string }[];
}
function TestimonialCarousel({ testimonials }: TestimonialsCarouselProps) {
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
    <>
      <Carousel
        opts={{
          loop: true,
        }}
        setApi={setApi}
      >
        <CarouselContent className="py-24">
          {testimonials.map((testimonial) => (
            <TestimonialItem
              key={testimonial.content}
              content={testimonial.content}
              author={testimonial.author}
              title={testimonial.title}
            />
          ))}
        </CarouselContent>
      </Carousel>
      <CarouselNav api={api} current={current} count={count} />
    </>
  );
}

export default TestimonialCarousel;
