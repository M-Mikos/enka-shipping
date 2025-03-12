import { CarouselItem } from "@/components/ui/carousel";
import { ImageProps } from "next/image";
import Image from "next/image";

function PortfolioCarouselItem({ src, alt, ...props }: ImageProps) {
  return (
    <CarouselItem className="sm:basis-[40%] transition duration lg:basis-[75%]">
      <Image
        className="rounded-lg aspect-square"
        src={src}
        width={1280}
        height={1280}
        alt={alt}
        sizes="(max-width: 1024px) 360px, (max-width: 1280px) 488px, (max-width: 1536px) 616px, 1200px"
        fetchPriority="low"
        loading="lazy"
        {...props}
      />
    </CarouselItem>
  );
}

export default PortfolioCarouselItem;
