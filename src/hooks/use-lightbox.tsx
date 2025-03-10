import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogClose, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { galleryImage } from "@/types";
import { DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Maximize, Minimize, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export function useLightbox(gallery: galleryImage[]) {
  const apiRef = useRef<CarouselApi | null>(null);
  const [open, setOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const openLightbox = (openAt: number) => {
    setInitialSlide(openAt);
    setOpen(true);
  };

  const scrollTo = () => {
    const api = apiRef.current;
    if (api) {
      api.scrollTo(initialSlide, true);
    }
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      apiRef.current?.destroy();
      apiRef.current = null;
      setOpen(false);
      closeFullScreen();
    }
  };

  const toggleFullScreen = () => {
    if (isFullscreen) document.exitFullscreen();
    if (!isFullscreen) document.documentElement.requestFullscreen();
    setIsFullscreen((state) => !state);
  };

  const closeFullScreen = useCallback(() => {
    if (isFullscreen) document.exitFullscreen();
    setIsFullscreen(false);
  }, [isFullscreen]);

  useEffect(() => {
    const api = apiRef.current;
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, []);

  // Synchronize isFullscreen state with native fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isNowFullscreen = !!document.fullscreenElement;
      setIsFullscreen(isNowFullscreen);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const Lightbox: React.FC = () => (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className="sm:max-w-full w-full h-full bg-transparent border-0 rounded-none p-0"
        defaultCloseButton={false}
      >
        <VisuallyHidden>
          <DialogHeader>
            <DialogTitle>See gallery</DialogTitle>
          </DialogHeader>
        </VisuallyHidden>
        <Carousel
          className="flex flex-col w-full h-full "
          setApi={(newApi) => {
            if (!apiRef.current && newApi) {
              apiRef.current = newApi;
              apiRef.current.on("init", scrollTo);
            }
          }}
        >
          <div className="flex justify-between items-center w-full h-12 text-white px-4">
            <span>
              {current}/{count}
            </span>
            <div className="flex g-2 h-full  text-white">
              <Button variant={"ghost"} className="focus-visible:ring-slate-300 px-2" onClick={toggleFullScreen}>
                {isFullscreen ? <Minimize /> : <Maximize />}
              </Button>
              <Button variant={"ghost"} className="focus-visible:ring-slate-300 px-2" asChild>
                <DialogClose>
                  <X />
                </DialogClose>
              </Button>
            </div>
          </div>
          <CarouselContent className="h-full w-[calc(100vw-1rem)]">
            {gallery.map((image) => {
              return (
                <CarouselItem key={image.description} className="h-[calc(100vh-5rem)] ">
                  <div className="relative h-full flex flex-col items-center">
                    <div className="relative flex-1 w-full">
                      <Image
                        className="object-contain"
                        src={image.src}
                        fill
                        alt={image.description}
                        placeholder="blur"
                      />
                    </div>
                    <div className="w-full basis-18 flex justify-center items-center text-white px-2 pt-4">
                      {image.description}
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="left-0 text-slate-300 hover:text-white hover:bg-transparent border-none focus-visible:ring-slate-300" />
          <CarouselNext className="right-0 text-slate-300 hover:text-white hover:bg-transparent border-none  focus-visible:ring-slate-300" />
        </Carousel>
      </DialogContent>
    </Dialog>
  );

  return { Lightbox, openLightbox };
}
