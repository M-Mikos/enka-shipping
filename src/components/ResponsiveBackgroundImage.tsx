"use client";

import { useMediaQuery } from "@/hooks/use-media-query";

import Image, { ImageProps, StaticImageData } from "next/image";

// For optimalization reazons, this component is preloading images. Use only for critical resources.

type ResponsiveBackgroundImageProps = {
  mobileImage: StaticImageData;
  desktopImage: StaticImageData;
  settings?: Partial<ImageProps>;
  isMobileAtLoad: boolean;
};

const ResponsiveBackgroundImage = ({
  mobileImage,
  desktopImage,
  settings,
  isMobileAtLoad,
}: ResponsiveBackgroundImageProps) => {
  const isCurrentlyMobile = useMediaQuery("(max-width:60em");
  return (
    <Image
      className="absolute inset-0 w-full h-auto object-cover -z-1 max-h-lvh"
      src={isMobileAtLoad && isCurrentlyMobile ? mobileImage : desktopImage}
      fill
      alt=""
      sizes="100vw"
      priority
      {...settings}
    />
  );
};

export default ResponsiveBackgroundImage;
