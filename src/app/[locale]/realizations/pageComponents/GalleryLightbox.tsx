"use client";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

interface GalleryLightboxProps {
  currentImage: number;
  images: {
    src: StaticImageData;
    orientation: string;
    description: string;
  }[];
}

function GalleryLightbox({ images, currentImage }: GalleryLightboxProps) {
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
    <Dialog>
      <DialogTrigger>Dialog</DialogTrigger>
      <DialogContent className="sm:max-w-full w-full h-full bg-transparent border-0 rounded-none">
        <Carousel className="flex flex-col w-full h-full" setApi={setApi}>
          <CarouselContent>
            {images.map((image) => {
              const isHorizontal = image.orientation === "horizontal";
              return (
                <CarouselItem key={image.description} className="flex flex-col items-center">
                  <div className="flex-1 w-full h-full flex justify-center p-4">
                    <Image
                      className="max-h-full max-w-full object-contain"
                      src={image.src}
                      width={isHorizontal ? "1920" : "1280"}
                      height={isHorizontal ? "1280" : "1920"}
                      alt={image.description}
                      placeholder="blur"
                    />
                  </div>

                  <div className="h-20">{image.description}</div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}

export default GalleryLightbox;
