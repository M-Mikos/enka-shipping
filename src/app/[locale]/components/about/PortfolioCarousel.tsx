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
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
        className="mb-2"
        opts={{
          loop: false,
        }}
        setApi={setApi}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <PortfolioCarouselItem
              key={index}
              src={image.src}
              alt={image.alt}
              slideIndex={index}
              selectedSlideIndex={current - 1}
            />
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex w-full h-14 justify-between items-center">
        <Button
          className="w-8 h-8 p-0"
          variant={"outline"}
          disabled={!api?.canScrollPrev()}
          onClick={() => api?.scrollPrev()}
        >
          <ArrowLeft />
        </Button>
        <div className="relative w-20 h-0.25 bg-slate-300 rounded-full">
          <div
            className={`absolute h-full duration-700 ease-in-out bg-slate-600 `}
            style={{ width: (current / count) * 100 + "%" }}
          ></div>
        </div>
        <Button
          className="w-8 h-8 p-0"
          variant={"outline"}
          disabled={!api?.canScrollNext()}
          onClick={() => api?.scrollNext()}
        >
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}

export default PortfolioCarousel;
