"use client";

import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { getImageProps, ImageProps, StaticImageData } from "next/image";

type ResponsiveBackgroundImageProps = {
  mobileImage: StaticImageData;
  desktopImage: StaticImageData;
  breakpoint: number;
} & Partial<ImageProps>;

const preloadImage = (srcSet: string) => {
  // Split the srcSet into individual URLs and preload them
  srcSet.split(",").forEach((src) => {
    const [url] = src.trim().split(" "); // Extract the URL part
    ReactDOM.preload(url, { as: "image" });
  });
};

const ResponsiveBackgroundImage = ({
  mobileImage,
  desktopImage,
  breakpoint = 640,
  className,
  sizes = "100vw",
  alt = "",
  fill = true,
  priority = true,
  ...props
}: ResponsiveBackgroundImageProps) => {
  useEffect(() => {
    // Generate srcSet strings for desktop and mobile
    const desktopProps = getImageProps({ src: desktopImage, sizes, alt: "" }).props;
    const mobileProps = getImageProps({ src: mobileImage, sizes, alt: "" }).props;

    // Preload desktop and mobile primary images
    ReactDOM.preload(desktopImage.src, { as: "image" });
    ReactDOM.preload(mobileImage.src, { as: "image" });

    // Preload all sources from srcSet
    preloadImage(desktopProps.srcSet as string);
    preloadImage(mobileProps.srcSet as string);
  }, [desktopImage, mobileImage, sizes]);

  // Common attributes for the image sources
  const commonImageAttributes = { alt, fill, priority, sizes, ...props };
  const { srcSet: desktop } = getImageProps({ ...commonImageAttributes, src: desktopImage }).props;
  const { srcSet: mobile, ...rest } = getImageProps({ ...commonImageAttributes, src: mobileImage }).props;

  const desktopMedia = `(min-width: ${breakpoint}px)`;
  const mobileMedia = `(max-width: ${breakpoint - 1}px)`;

  return (
    <picture>
      <source media={desktopMedia} srcSet={desktop} />
      <source media={mobileMedia} srcSet={mobile} />
      <img className={className} fetchPriority="high" {...rest} alt={alt} />
    </picture>
  );
};

export default ResponsiveBackgroundImage;
