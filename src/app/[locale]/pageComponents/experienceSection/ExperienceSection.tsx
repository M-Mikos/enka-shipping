import ContentContainer from "@/components/ContentContainer";
import RichText from "@/components/RichText";
import SectionContainer from "@/components/SectionContainer";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Map from "@/../public/home/enka-world-map.svg";
import MapPin from "./MapPin";
import Numbers from "./Numbers";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import Region from "./Region";

function ExperienceSection() {
  const t = useTranslations("HomePage.ExperienceSection");

  const regions = [
    { name: "Italy", pinCoords: ["15%", "35%"] },
    { name: "Scandinavia", pinCoords: ["13%", "18%"] },
    { name: "Poland", pinCoords: ["18%", "27%"] },
    { name: "Spain", pinCoords: ["6%", "37%"] },
    { name: "Kazakhstan", pinCoords: ["40%", "28%"] },
    { name: "China", pinCoords: ["60%", "40%"] },
    { name: "India", pinCoords: ["45%", "48%"] },
    { name: "Turkey", pinCoords: ["26%", "37%"] },
  ];

  return (
    <SectionContainer id={t("id")} className="bg-slate-950 text-slate-300 py-16 lg:py-24">
      <ContentContainer className="lg:grid lg:gap-x-16 2xl:gap-x-24 lg:grid-cols-[2fr_3fr] lg:grid-rows-[auto_auto] group mb-16">
        <div className="column-[1/2] row-[1/2] xl:text-lg">
          <div className="flex flex-col justify-between">
            <Heading variant="h2" shade="light">
              {t("header")}
            </Heading>
            <Paragraph shade="light" className="mb-12">
              {t("textContent")}
            </Paragraph>
            <Paragraph shade="light" asChild>
              <ul className="flex flex-wrap mb-12">
                {regions.map((region) => (
                  <Region key={region.name} region={region.name}>
                    <ChevronRight className="stroke-primary" />
                    <span>{t(`RegionsList.region${region.name}`)}</span>
                  </Region>
                ))}
              </ul>
            </Paragraph>
          </div>
        </div>

        <div className="relative lg:column-[2/3] lg:row-[1/3] mb-12">
          <Image className="w-full" src={Map} width={800} height={596} alt={t("mapImageAlt")} unoptimized />

          <div className="absolute inset-0 w-full h-full z-10">
            {regions.map((region) => (
              <MapPin key={region.name} region={region.name} coords={region.pinCoords} />
            ))}
          </div>
        </div>

        <Paragraph shade="light" className="lg:column-[1/2] lg:row-[2/3]">
          <RichText>{(tags) => t.rich("dislaimerText", tags)}</RichText>
        </Paragraph>
      </ContentContainer>
      <Numbers />
    </SectionContainer>
  );
}

export default ExperienceSection;
