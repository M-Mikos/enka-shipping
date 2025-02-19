import RichText from "@/components/RichText";
import MapPin from "./MapPin";
import ContentContainer from "@/components/ContentContainer";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

function MapContent({ translations }) {
  return (
    <ContentContainer className="lg:grid lg:gap-x-12 lg:grid-cols-[2fr_3fr] lg:grid-rows-[auto_auto] py-18 xl:py-24">
      {/* List of Regions */}
      <div className="column-[1/2] row-[1/2] xl:text-lg">
        <div className="flex flex-col justify-between">
          <h2 className="text-white text-3xl xl:text-5xl 2xl:text-6xl font-extrabold leading-none tracking-wide mb-12">
            {t("header")}
          </h2>
          <p className="mb-12">{t("textContent")}</p>
          <ul className="flex flex-wrap mb-12">
            {["Italy", "Scandinavia", "Poland", "Spain", "Kazakhstan", "China", "India", "Turkey"].map((region) => (
              <li key={region} data-region={region} className="basis-1/2 flex gap-4 group peer">
                <ChevronRight className="stroke-primary" />
                <span className="group-hover:text-primary peer-hover:text-primary">
                  {t(`RegionsList.region${region}`)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Map with Pins */}
      <div className="relative lg:column-[2/3] lg:row-[1/3] mb-12">
        <Image className="w-full" src={Map} width={800} height={596} alt={t("mapImageAlt")} unoptimized />
        <div className="absolute inset-0 w-full h-full z-10">
          {[
            { region: "Italy", top: "35%", left: "15%" },
            { region: "Scandinavia", top: "18%", left: "13%" },
            { region: "Poland", top: "27%", left: "18%" },
            { region: "Spain", top: "37%", left: "6%" },
            { region: "Kazakhstan", top: "28%", left: "40%" },
            { region: "China", top: "40%", left: "60%" },
            { region: "India", top: "48%", left: "45%" },
            { region: "Turkey", top: "37%", left: "26%" },
          ].map(({ region, top, left }) => (
            <div
              key={region}
              data-region={region}
              className={`absolute w-4 h-4 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-6 lg:h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 top-[${top}] left-[${left}] group peer-hover:-translate-y-2`}
            >
              <div className="transition-transform group-hover:-translate-y-2 peer-hover:-translate-y-2">
                <MapPin />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer Text */}
      <div className="lg:column-[1/2] lg:row-[2/3]">
        <RichText>{(tags) => t.rich("dislaimerText", tags)}</RichText>
      </div>
    </ContentContainer>
  );
}

export default MapContent;
