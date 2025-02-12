import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { getImageProps, StaticImageData } from "next/image";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type BackgroundImageStylesProps = {
  image: StaticImageData;
  width: number;
  height: number;
  lazyLoad?: boolean;
};

export async function getBackgroundImageStyles({
  image,
  width,
  height,
  lazyLoad = false,
}: BackgroundImageStylesProps): Promise<{
  style: React.CSSProperties;
  lazyLoader?: () => void;
}> {
  const { props } = await getImageProps({
    src: image,
    width,
    height,
    alt: "",
    sizes: "100vw",
    placeholder: "blur", // Generate blurDataURL
  });

  const { src, srcSet, blurDataURL } = props;

  function getBackgroundImage(srcSet: string) {
    const imageSet = srcSet
      .split(", ")
      .map((str) => {
        const [url, dpi] = str.split(" ");
        return `url("${url}") ${dpi}`;
      })
      .join(", ");
    return `image-set(${imageSet})`;
  }

  if (!lazyLoad) {
    return {
      style: {
        backgroundImage: getBackgroundImage(srcSet),
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      },
    };
  }

  // Lazy loading with a low-res placeholder
  return {
    style: {
      backgroundImage: `url(${blurDataURL})`, // Start with the blurred placeholder
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    lazyLoader: () => {
      const element = document.querySelector(`[data-src="${src}"]`) as HTMLElement;
      if (element) {
        element.style.backgroundImage = `url(${src})`;
        element.dataset.srcLoaded = "true";
      }
    },
  };
}
