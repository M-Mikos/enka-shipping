import ContentContainer from "@/components/ContentContainer";
import SectionContainer from "@/components/SectionContainer";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Boxes, CalendarCheck, Globe2 } from "lucide-react";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import ValueCard from "@/components/ValueCard";
import dynamic from "next/dynamic";

const PortfolioCarousel = dynamic(() => import("./PortfolioCarousel"));

function AboutSection() {
  const t = useTranslations("HomePage");
  const values = [
    {
      icon: Globe2,
      header: t("AboutSection.Values.GlobalCoverage.header"),
      content: t("AboutSection.Values.GlobalCoverage.text"),
    },
    {
      icon: Boxes,
      header: t("AboutSection.Values.ProjectCargo.header"),
      content: t("AboutSection.Values.ProjectCargo.text"),
    },
    {
      icon: CalendarCheck,
      header: t("AboutSection.Values.OnTime.header"),
      content: t("AboutSection.Values.OnTime.text"),
    },
  ];
  return (
    <SectionContainer id={t("AboutSection.id")}>
      <ContentContainer className="grid grid-cols-1 grid-rows-[repeat(3,auto)] xl:grid-cols-[1fr_1fr] 4xl:grid-cols-[3fr_2fr] xl:grid-rows-[auto_auto] xl:flex-row xl:gap-x-16 2xl:gap-x-24 gap-y-12 py-16 xl:py-24">
        <div className="column-[1/2] row-[1/2] ">
          <Heading variant="h2">{t("AboutSection.header")}</Heading>
          <Paragraph>{t("AboutSection.textContent")}</Paragraph>
        </div>
        <div className="row-[2/3] xl:column-[2/3] xl:row-[1/3]">
          <PortfolioCarousel />
        </div>
        <div className="text-center xl:text-left row-[3/4] xl:column-[1/3] xl:row-[2/3] self-end">
          <Button variant={"outline"} asChild>
            <Link title={t("AboutSection.PortfolioButton.linkTitle")} href="/realizations">
              {t("AboutSection.PortfolioButton.label")}
            </Link>
          </Button>
        </div>
      </ContentContainer>
      <div className="w-full bg-slate-50 py-16 xl:py-24">
        <ContentContainer className="flex flex-col md:flex-row gap-12 xl:gap-16 ">
          {values.map((value) => (
            <ValueCard key={value.header} Icon={value.icon} header={value.header} content={value.content} />
          ))}
        </ContentContainer>
      </div>
    </SectionContainer>
  );
}

export default AboutSection;
