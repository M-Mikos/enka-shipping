"use client";

import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";

type ResponsiveBackgroundImageProps = {
  mobileImage: StaticImageData;
  desktopImage: StaticImageData;
  breakpoint: number;
  className?: string;
  alt?: string;
  sizes?: string;
};

const ResponsiveBackgroundImage: React.FC<ResponsiveBackgroundImageProps> = ({
  mobileImage,
  desktopImage,
  breakpoint = 640,
  className = "",
  alt = "",
  sizes = "100vw",
}) => {
  return (
    <picture className={className}>
      {/* Source for desktop */}
      <source srcSet={desktopImage.src} media={`(min-width: ${breakpoint}px)`} sizes={sizes} />
      {/* Source for mobile */}
      <source srcSet={mobileImage.src} media={`(max-width: ${breakpoint - 1}px)`} sizes={sizes} />
      {/* Fallback image */}
      <Image src={mobileImage} alt={alt} sizes={sizes} className="object-cover w-full h-full" priority />
    </picture>
  );
};

export default ResponsiveBackgroundImage;
