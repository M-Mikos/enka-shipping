"use client";

import { Carousel, CarouselApi, CarouselContent } from "@/components/ui/carousel";
import photo1 from "@/../public/home/home-slider-photo-1.avif";
import photo2 from "@/../public/home/home-slider-photo-2.avif";
import photo3 from "@/../public/home/home-slider-photo-3.avif";
import photo4 from "@/../public/home/home-slider-photo-4.avif";
import photo5 from "@/../public/home/home-slider-photo-5.avif";
import photo6 from "@/../public/home/home-slider-photo-6.avif";
import photo7 from "@/../public/home/home-slider-photo-7.avif";
import photo8 from "@/../public/home/home-slider-photo-8.avif";
import PortfolioCarouselItem from "./PortfolioCarouselItem";
import { useEffect, useState } from "react";
import CarouselNav from "@/components/ui/carousel-nav";

function PortfolioCarousel() {
  const images = [
    { src: photo1, alt: "" },
    { src: photo2, alt: "" },
    { src: photo3, alt: "" },
    { src: photo4, alt: "" },
    { src: photo5, alt: "" },
    { src: photo6, alt: "" },
    { src: photo7, alt: "" },
    { src: photo8, alt: "" },
  ];

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
    <div className="flex h-full flex-col justify-between">
      <Carousel
        className="mb-2 lg:rounded-lg overflow-hidden"
        opts={{
          loop: false,
        }}
        setApi={setApi}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <PortfolioCarouselItem key={index} src={image.src} alt={image.alt} />
          ))}
        </CarouselContent>
      </Carousel>
      <CarouselNav api={api} current={current} count={count} />
    </div>
  );
}

export default PortfolioCarousel;
