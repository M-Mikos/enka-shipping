import LightboxContent from "@/components/LightboxContent";
import LightboxDialog from "@/components/LightboxDialog";
import { galleryImage } from "@/types";
import { useCallback, useEffect, useState } from "react";

export function useLightbox(gallery: galleryImage[]) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [initialSlide, setinitialSlide] = useState(0);

  const openLightbox = (openAt: number) => {
    setIsOpen(true);
    setinitialSlide(openAt);
  };

  const handleDialogOpenChange = (open: boolean) => {
    if (!open) {
      setIsOpen(false);
      closeFullscreen();
    }
  };

  const toggleFullscreen = () => {
    if (isFullscreen) document.exitFullscreen();
    if (!isFullscreen) document.documentElement.requestFullscreen();
    setIsFullscreen((state) => !state);
  };

  const closeFullscreen = useCallback(() => {
    if (isFullscreen) document.exitFullscreen();
    setIsFullscreen(false);
  }, [isFullscreen]);

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
    <LightboxDialog isOpen={isOpen} handleDialogOpenChange={handleDialogOpenChange}>
      <LightboxContent
        gallery={gallery}
        initialSlide={initialSlide}
        isFullscreen={isFullscreen}
        toggleFullscreen={toggleFullscreen}
      />
    </LightboxDialog>
  );

  return { Lightbox, openLightbox };
}
