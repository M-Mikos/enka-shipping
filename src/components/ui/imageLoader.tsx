import { Loader2 } from "lucide-react";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

function ImageLoader({ src, width, height, alt, ...props }: ImageProps) {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <>
      <Image src={src} width={width} height={height} alt={alt} {...props} onLoad={() => setIsImageLoading(false)} />
      {isImageLoading && (
        <Loader2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin" />
      )}
    </>
  );
}

export default ImageLoader;
