import { CarouselItem } from "@/components/ui/carousel";
import { ImageProps } from "next/image";
import Image from "next/image";

interface PortfolioCarouselItemProps extends ImageProps {
  slideIndex: number;
  selectedSlideIndex: number;
}

function PortfolioCarouselItem({ src, alt, slideIndex, selectedSlideIndex, ...props }: PortfolioCarouselItemProps) {
  const opacityValue = selectedSlideIndex === slideIndex ? 1 : 0.5;
  return (
    <CarouselItem className="sm:basis-[40%] transition duration lg:basis-[75%]" style={{ opacity: opacityValue }}>
      <Image
        className="rounded-lg aspect-square"
        src={src}
        width={1280}
        height={1280}
        alt={alt}
        placeholder="blur"
        sizes="(min-width: 1024px) 360px, (min-width: 1280px) 488px, (min-width: 1536px) 616px, (min-width: 1920px) 808px, 100vw"
        {...props}
      />
    </CarouselItem>
  );
}

export default PortfolioCarouselItem;
