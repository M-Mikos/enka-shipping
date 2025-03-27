"use client";

import Image from "next/image";
import image1 from "@/../public/realizations/photo-1.avif";
import image2 from "@/../public/realizations/photo-2.avif";
import image3 from "@/../public/realizations/photo-3.avif";
import image4 from "@/../public/realizations/photo-4.avif";
import image5 from "@/../public/realizations/photo-5.avif";
import image6 from "@/../public/realizations/photo-6.avif";
import image7 from "@/../public/realizations/photo-7.avif";
import image8 from "@/../public/realizations/photo-8.avif";
import image9 from "@/../public/realizations/photo-9.avif";
import image10 from "@/../public/realizations/photo-10.avif";
import image11 from "@/../public/realizations/photo-11.avif";
import image12 from "@/../public/realizations/photo-12.avif";
import image13 from "@/../public/realizations/photo-13.avif";
import image14 from "@/../public/realizations/photo-14.avif";
import image15 from "@/../public/realizations/photo-15.avif";
import image16 from "@/../public/realizations/photo-16.avif";
import image17 from "@/../public/realizations/photo-17.avif";
import image18 from "@/../public/realizations/photo-18.avif";
import image19 from "@/../public/realizations/photo-19.avif";
import image20 from "@/../public/realizations/photo-20.avif";
import image21 from "@/../public/realizations/photo-21.avif";
import image22 from "@/../public/realizations/photo-22.avif";
import image23 from "@/../public/realizations/photo-23.avif";
import image24 from "@/../public/realizations/photo-24.avif";
import image25 from "@/../public/realizations/photo-25.avif";
import image26 from "@/../public/realizations/photo-26.avif";
import image27 from "@/../public/realizations/photo-27.avif";
import image28 from "@/../public/realizations/photo-28.avif";
import image29 from "@/../public/realizations/photo-29.avif";
import image30 from "@/../public/realizations/photo-30.avif";
import image31 from "@/../public/realizations/photo-31.avif";
import image32 from "@/../public/realizations/photo-32.avif";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { useLightbox } from "@/hooks/use-lightbox";
import { galleryImage } from "@/types";

function GalleryGrid() {
  const t = useTranslations("RealizationsPage");

  const gallery: galleryImage[] = [
    { src: image10, orientation: "horizontal", description: t("Gallery.image10") },
    { src: image17, orientation: "vertical", description: t("Gallery.image17") },
    { src: image2, orientation: "horizontal", description: t("Gallery.image5") },
    { src: image5, orientation: "horizontal", description: t("Gallery.image8") },
    { src: image8, orientation: "horizontal", description: t("Gallery.image2") },
    { src: image3, orientation: "horizontal", description: t("Gallery.image3") },
    { src: image4, orientation: "horizontal", description: t("Gallery.image4") },
    { src: image6, orientation: "horizontal", description: t("Gallery.image6") },
    { src: image18, orientation: "vertical", description: t("Gallery.image18") },
    { src: image7, orientation: "horizontal", description: t("Gallery.image7") },
    { src: image9, orientation: "horizontal", description: t("Gallery.image9") },
    { src: image1, orientation: "horizontal", description: t("Gallery.image1") },
    { src: image11, orientation: "horizontal", description: t("Gallery.image11") },
    { src: image12, orientation: "horizontal", description: t("Gallery.image12") },
    { src: image19, orientation: "vertical", description: t("Gallery.image19") },
    { src: image13, orientation: "horizontal", description: t("Gallery.image13") },
    { src: image20, orientation: "vertical", description: t("Gallery.image20") },
    { src: image14, orientation: "horizontal", description: t("Gallery.image14") },
    { src: image15, orientation: "horizontal", description: t("Gallery.image15") },
    {
      src: image16,
      orientation: "horizontal",
      description: t("Gallery.image16"),
    },
    { src: image21, orientation: "horizontal", description: t("Gallery.image21") },
    { src: image22, orientation: "horizontal", description: t("Gallery.image22") },
    { src: image23, orientation: "vertical", description: t("Gallery.image23") },
    { src: image24, orientation: "vertical", description: t("Gallery.image24") },
    { src: image25, orientation: "vertical", description: t("Gallery.image25") },
    { src: image26, orientation: "vertical", description: t("Gallery.image26") },
    { src: image27, orientation: "vertical", description: t("Gallery.image27") },
    { src: image28, orientation: "vertical", description: t("Gallery.image28") },
    { src: image29, orientation: "vertical", description: t("Gallery.image29") },
    { src: image30, orientation: "horizontal", description: t("Gallery.image30") },
    { src: image31, orientation: "horizontal", description: t("Gallery.image31") },
    { src: image32, orientation: "horizontal", description: t("Gallery.image32") },
  ];

  const { Lightbox, openLightbox } = useLightbox(gallery);

  return (
    <>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-1 lg:gap-2">
        {gallery.map((image, i) => {
          const isHorizontal = image.orientation === "horizontal";
          return (
            <div
              key={image.description}
              className={clsx(
                "group flex flex-col not-first:col-span-1 overflow-hidden ",
                isHorizontal ? "row-span-1" : "row-span-2"
              )}
              onClick={() => openLightbox(i)}
            >
              <Image
                className="flex-1 object-cover transition group-hover:brightness-110 "
                src={image.src}
                width={isHorizontal ? "1920" : "1280"}
                height={isHorizontal ? "1280" : "1920"}
                alt={image.description}
                placeholder={i < 6 ? "empty" : "blur"}
                priority={i < 6}
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 272px, (max-width: 1535px) 360px, (max-width: 1920px) 450px, 900px"
              />
            </div>
          );
        })}
      </div>
      <Lightbox />
    </>
  );
}

export default GalleryGrid;
