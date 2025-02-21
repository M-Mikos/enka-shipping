import ContentContainer from "@/components/ContentContainer";
import RichText from "@/components/RichText";
import SectionContainer from "@/components/SectionContainer";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Map from "@/../public/home/enka-world-map.svg";
import MapPin from "./MapPin";
import Numbers from "./Numbers";

function ExperienceSection() {
  const t = useTranslations("HomePage.ExperienceSection");

  return (
    <SectionContainer id={t("id")} className="bg-slate-950 text-slate-300">
      <ContentContainer className="lg:grid lg:gap-x-12 lg:grid-cols-[2fr_3fr] lg:grid-rows-[auto_auto] py-18 xl:py-24 group">
        {/* List of Regions */}
        <div className="column-[1/2] row-[1/2] xl:text-lg">
          <div className="flex flex-col justify-between">
            <h2 className="text-white text-3xl xl:text-5xl 2xl:text-6xl font-extrabold leading-none tracking-wide mb-12">
              {t("header")}
            </h2>
            <p className="mb-12">{t("textContent")}</p>
            <ul className="flex flex-wrap mb-12">
              <li data-region="Italy" className="basis-1/2 flex gap-4">
                <ChevronRight className="stroke-primary" />
                <span className="hover:text-primary group-has-[div[data-region='Italy']:hover]:text-primary">
                  {t("RegionsList.regionItaly")}
                </span>
              </li>
              <li data-region="Scandinavia" className="basis-1/2 flex gap-4">
                <ChevronRight className="stroke-primary" />
                <span className="hover:text-primary group-has-[div[data-region='Scandinavia']:hover]:text-primary">
                  {t("RegionsList.regionScandinavia")}
                </span>
              </li>
              <li data-region="Poland" className="basis-1/2 flex gap-4">
                <ChevronRight className="stroke-primary" />
                <span className="hover:text-primary group-has-[div[data-region='Poland']:hover]:text-primary">
                  {t("RegionsList.regionPoland")}
                </span>
              </li>
              <li data-region="Spain" className="basis-1/2 flex gap-4">
                <ChevronRight className="stroke-primary" />
                <span className="hover:text-primary group-has-[div[data-region='Spain']:hover]:text-primary">
                  {t("RegionsList.regionSpain")}
                </span>
              </li>
              <li data-region="Kazakhstan" className="basis-1/2 flex gap-4">
                <ChevronRight className="stroke-primary" />
                <span className="hover:text-primary group-has-[div[data-region='Kazakhstan']:hover]:text-primary">
                  {t("RegionsList.regionKazakhstan")}
                </span>
              </li>
              <li data-region="China" className="basis-1/2 flex gap-4">
                <ChevronRight className="stroke-primary" />
                <span className="hover:text-primary group-has-[div[data-region='China']:hover]:text-primary">
                  {t("RegionsList.regionChina")}
                </span>
              </li>
              <li data-region="India" className="basis-1/2 flex gap-4">
                <ChevronRight className="stroke-primary" />
                <span className="hover:text-primary group-has-[div[data-region='India']:hover]:text-primary">
                  {t("RegionsList.regionIndia")}
                </span>
              </li>
              <li data-region="Turkey" className="basis-1/2 flex gap-4">
                <ChevronRight className="stroke-primary" />
                <span className="hover:text-primary group-has-[div[data-region='Turkey']:hover]:text-primary">
                  {t("RegionsList.regionTurkey")}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Map with Pins */}
        <div className="relative lg:column-[2/3] lg:row-[1/3] mb-12">
          <Image className="w-full" src={Map} width={800} height={596} alt={t("mapImageAlt")} unoptimized />
          <div className="absolute inset-0 w-full h-full z-10">
            <div
              data-region="Italy"
              className="absolute w-4 h-4 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-6 lg:h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 top-[35%] left-[15%] transition-transform group-has-[li[data-region='Italy']:hover]:-translate-y-2 hover:-translate-y-2"
            >
              <MapPin />
            </div>
            <div
              data-region="Scandinavia"
              className="absolute w-4 h-4 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-6 lg:h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 top-[18%] left-[13%] transition-transform group-has-[li[data-region='Scandinavia']:hover]:-translate-y-2 hover:-translate-y-2"
            >
              <MapPin />
            </div>
            <div
              data-region="Poland"
              className="absolute w-4 h-4 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-6 lg:h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 top-[27%] left-[18%] transition-transform group-has-[li[data-region='Poland']:hover]:-translate-y-2 hover:-translate-y-2"
            >
              <MapPin />
            </div>
            <div
              data-region="Spain"
              className="absolute w-4 h-4 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-6 lg:h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 top-[37%] left-[6%] transition-transform group-has-[li[data-region='Spain']:hover]:-translate-y-2 hover:-translate-y-2"
            >
              <MapPin />
            </div>
            <div
              data-region="Kazakhstan"
              className="absolute w-4 h-4 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-6 lg:h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 top-[28%] left-[40%] transition-transform group-has-[li[data-region='Kazakhstan']:hover]:-translate-y-2 hover:-translate-y-2"
            >
              <MapPin />
            </div>
            <div
              data-region="China"
              className="absolute w-4 h-4 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-6 lg:h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 top-[40%] left-[60%] transition-transform group-has-[li[data-region='China']:hover]:-translate-y-2 hover:-translate-y-2"
            >
              <MapPin />
            </div>
            <div
              data-region="India"
              className="absolute w-4 h-4 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-6 lg:h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 top-[48%] left-[45%] transition-transform group-has-[li[data-region='India']:hover]:-translate-y-2 hover:-translate-y-2"
            >
              <MapPin />
            </div>
            <div
              data-region="Turkey"
              className="absolute w-4 h-4 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-6 lg:h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 top-[37%] left-[26%] transition-transform group-has-[li[data-region='Turkey']:hover]:-translate-y-2 hover:-translate-y-2"
            >
              <MapPin />
            </div>
          </div>
        </div>

        {/* Disclaimer Text */}
        <div className="lg:column-[1/2] lg:row-[2/3]">
          <RichText>{(tags) => t.rich("dislaimerText", tags)}</RichText>
        </div>
      </ContentContainer>
      <Numbers />
    </SectionContainer>
  );
}

export default ExperienceSection;
