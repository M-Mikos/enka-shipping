import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { galleryImage } from "@/types";
import { Maximize, Minimize, X } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import { DialogClose } from "./ui/dialog";
import ImageLoader from "./ui/imageLoader";
import { useTranslations } from "next-intl";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface LightboxContentProps {
  gallery: galleryImage[];
  initialSlide: number;
  isFullscreen: boolean;
  toggleFullscreen: () => void;
}

function LightboxContent({ gallery, initialSlide, isFullscreen, toggleFullscreen }: LightboxContentProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const t = useTranslations("Global.LightboxControls");

  const scrollTo = useCallback(
    (index: number) => {
      if (api) {
        api.scrollTo(index, true);
      }
    },
    [api]
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("init", () => scrollTo(initialSlide));

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api, initialSlide, scrollTo]);

  return (
    <Carousel className="flex flex-col w-full h-full" setApi={setApi}>
      <div className="flex justify-between items-center w-full h-12 text-white px-4 text-xs">
        <span>
          {current}/{count}
        </span>
        <div className="flex g-2 h-full items-center text-white">
          <Button
            variant="subtle"
            size="icon"
            className="text-slate-300 hover:text-white hover:bg-white/5 focus-visible:ring-slate-300"
            onClick={toggleFullscreen}
          >
            {isFullscreen ? (
              <>
                <Minimize />
                <VisuallyHidden>{t("closeFullscreenButtonLabel")}</VisuallyHidden>
              </>
            ) : (
              <>
                <Maximize />
                <VisuallyHidden>{t("openFullscreenButtonLabel")}</VisuallyHidden>
              </>
            )}
          </Button>
          <Button
            variant="subtle"
            size="icon"
            className="text-slate-300 hover:text-white hover:bg-white/5 focus-visible:ring-slate-300"
            asChild
          >
            <DialogClose>
              <X />
              <VisuallyHidden>{t("closeLightboxButtonLabel")}</VisuallyHidden>
            </DialogClose>
          </Button>
        </div>
      </div>
      <CarouselContent className="h-full w-[calc(100vw-1rem)]">
        {gallery.map((image) => {
          return (
            <CarouselItem key={image.description} className="h-[calc(100vh-5rem)] ">
              <div className="relative h-full flex flex-col items-center">
                <div className="relative flex-1 flex w-full justify-center items-center text-slate-300">
                  <ImageLoader
                    className="object-contain"
                    src={image.src}
                    fill
                    alt={image.description}
                    sizes={"100vw"}
                  />
                </div>
                <div className="w-full basis-18 flex justify-center items-center text-slate-300 px-2 pt-4 text-xs">
                  {image.description}
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious
        variant="subtle"
        size="icon"
        className="left-4 text-slate-300 hover:text-white hover:bg-white/5 border-none focus-visible:ring-slate-300"
      />
      <CarouselNext
        variant="subtle"
        size="icon"
        className="right-4 text-slate-300 hover:text-white hover:bg-white/5 border-none  focus-visible:ring-slate-300"
      />
    </Carousel>
  );
}

export default LightboxContent;
