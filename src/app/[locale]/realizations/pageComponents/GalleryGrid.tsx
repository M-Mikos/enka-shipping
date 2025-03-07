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
import clsx from "clsx";
import { Paragraph } from "@/components/ui/paragraph";
import { useTranslations } from "next-intl";

function GalleryGrid() {
  const t = useTranslations("RealizationsPage");

  const imageData = [
    { src: image10, orientation: "horizontal", description: t("Gallery.image10") },
    { src: image17, orientation: "vartical", description: t("Gallery.image17") },
    { src: image2, orientation: "horizontal", description: t("Gallery.image5") },
    { src: image5, orientation: "horizontal", description: t("Gallery.image8") },
    { src: image8, orientation: "horizontal", description: t("Gallery.image2") },
    { src: image3, orientation: "horizontal", description: t("Gallery.image3") },
    { src: image4, orientation: "horizontal", description: t("Gallery.image4") },
    { src: image6, orientation: "horizontal", description: t("Gallery.image6") },
    { src: image18, orientation: "vaertical", description: t("Gallery.image18") },
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
  ];

  return (
    <>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-1 lg:gap-6">
        {imageData.map((image) => {
          const isHorizontal = image.orientation === "horizontal";
          return (
            <div
              key={image.description}
              className={clsx(
                "group flex flex-col not-first:col-span-1 overflow-hidden ",
                isHorizontal ? "row-span-1" : "row-span-2"
              )}
            >
              <Image
                className="flex-1 object-cover transition group-hover:brightness-110 rounded-sm lg:rounded"
                src={image.src}
                width={isHorizontal ? "1920" : "1280"}
                height={isHorizontal ? "1280" : "1920"}
                alt={image.description}
                placeholder="blur"
              />
              <div className="flex items-center w-full h-10  ">
                <Paragraph className="truncate" variant="xs">
                  {image.description}
                </Paragraph>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default GalleryGrid;
