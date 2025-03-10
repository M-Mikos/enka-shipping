import { StaticImageData } from "next/image";

export interface galleryImage {
  src: StaticImageData;
  orientation: "horizontal" | "vertical";
  description: string;
}
