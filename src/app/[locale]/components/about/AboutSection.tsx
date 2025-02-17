import ContentContainer from "@/components/ContentContainer";
import SectionContainer from "@/components/SectionContainer";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import ValueCard from "./ValueCard";
import { Boxes, CalendarCheck, Globe2 } from "lucide-react";
import PortfolioCarousel from "./PortfolioCarousel";

function AboutSection() {
  const t = useTranslations("HomePage");
  return (
    <SectionContainer id={t("AboutSection.id")}>
      <ContentContainer className="grid grid-cols-1 grid-rows-[repeat(3,auto)] lg:grid-cols-[1fr_1fr] lg:grid-rows-[auto_auto] lg:flex-row gap-x-36 gap-y-12 py-12 lg:py-18 xl:py-24">
        <div className="column-[1/2] row-[1/2] ">
          <h2 className="text-3xl xl:text-5xl 2xl:text-6xl font-extrabold leading-none tracking-wide mb-12 lg:mb-16">
            {t("AboutSection.header")}
          </h2>
          <p className="text-base lg:text-lg text-slate-600">{t("AboutSection.textContent")}</p>
        </div>
        <div className="row-[2/3] lg:column-[2/3] lg:row-[1/3]">
          <PortfolioCarousel />
        </div>
        <div className="text-center lg:text-left row-[3/4] lg:column-[1/3] lg:row-[2/3] self-end">
          <Button variant={"outline"} asChild>
            <Link title={t("AboutSection.PortfolioButton.linkTitleAttribute")} href="/realizations">
              {t("AboutSection.PortfolioButton.label")}
            </Link>
          </Button>
        </div>
      </ContentContainer>
      <div className="w-full bg-slate-50 py-12 lg:py-18 xl:py-24">
        <ContentContainer className="flex flex-col md:flex-row gap-12 lg:gap-16">
          <ValueCard
            Icon={Globe2}
            header={t("AboutSection.Values.GlobalCoverage.header")}
            content={t("AboutSection.Values.GlobalCoverage.text")}
          />
          <ValueCard
            Icon={Boxes}
            header={t("AboutSection.Values.ProjectCargo.header")}
            content={t("AboutSection.Values.ProjectCargo.text")}
          />
          <ValueCard
            Icon={CalendarCheck}
            header={t("AboutSection.Values.OnTime.header")}
            content={t("AboutSection.Values.OnTime.text")}
          />
        </ContentContainer>
      </div>
    </SectionContainer>
  );
}

export default AboutSection;
