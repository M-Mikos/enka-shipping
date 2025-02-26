import clsx from "clsx";
import { getImageProps, ImageProps } from "next/image";

type ResponsiveBackgroundImageProps = {
  mobileImage: string;
  desktopImage: string;
  mobileSettings: Partial<ImageProps>;
  desktopSettings: Partial<ImageProps>;
  commonSettings: Partial<ImageProps>;
  className?: string;
};

const ResponsiveBackgroundImage = ({
  mobileImage,
  desktopImage,
  mobileSettings,
  desktopSettings,
  commonSettings,
  className,
}: ResponsiveBackgroundImageProps) => {
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...commonSettings,
    ...desktopSettings,
    alt: commonSettings.alt ? commonSettings.alt : "",
    src: desktopImage,
  });

  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...commonSettings,
    ...mobileSettings,
    alt: commonSettings.alt ? commonSettings.alt : "",
    src: mobileImage,
  });

  return (
    <picture>
      <source media="(min-width: 600px)" srcSet={desktop} />
      <source media="(max-width: 599px)" srcSet={mobile} />
      <img {...rest} className={clsx("absolute inset-0 w-full h-auto object-cover -z-1", className)} />
    </picture>
  );
};

export default ResponsiveBackgroundImage;
