"use client";

import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import photo1 from "@/../public/home/home-slider-photo-1.avif";
import photo2 from "@/../public/home/home-slider-photo-2.avif";
import photo3 from "@/../public/home/home-slider-photo-3.avif";
import photo4 from "@/../public/home/home-slider-photo-4.avif";
import photo5 from "@/../public/home/home-slider-photo-5.avif";
import photo6 from "@/../public/home/home-slider-photo-6.avif";
import photo7 from "@/../public/home/home-slider-photo-7.avif";
import photo8 from "@/../public/home/home-slider-photo-8.avif";
import PortfolioCarouselItem from "./PortfolioCarouselItem";

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

  return (
    <div className="flex h-full flex-col justify-between">
      <Carousel className="px-12 xl:rounded-lg overflow-hidden">
        <CarouselContent>
          {images.map((image, index) => (
            <PortfolioCarouselItem key={index} src={image.src} alt={image.alt} />
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 border-none" />
        <CarouselNext className="right-0 border-none" />
      </Carousel>
    </div>
  );
}

export default PortfolioCarousel;
