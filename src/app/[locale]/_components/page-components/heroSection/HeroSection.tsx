import ContentContainer from "@/components/ContentContainer";
import SectionContainer from "@/components/SectionContainer";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import desktopHeroBackground from "@/../public/home/home-hero-background-horizontal.avif";
import mobileHeroBackground from "@/../public/home/home-hero-background-vertical.avif";
import { ArrowDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Heading } from "@/components/ui/heading";
import RichText from "@/components/RichText";
import { Paragraph } from "@/components/ui/paragraph";
import ResponsiveBackgroundImage from "@/components/ResponsiveBackgroundImage";

function HeroSection() {
  const t = useTranslations("HomePage");
  return (
    <SectionContainer
      id={t("HeroSection.id")}
      className="relative h-[calc(100lvh-5rem)] max-h-[60rem] lg:max-h-[80rem] 3xl:max-h-[135rem] "
    >
      <div className="absolute inset-0 bg-[#366AB5] -z-2" />
      <ResponsiveBackgroundImage
        mobileImage={mobileHeroBackground}
        desktopImage={desktopHeroBackground}
        breakpoint={640}
        className="absolute left-0 bottom-0 w-full aspect-[3/2] h-auto object-cover sm:h-full sm:aspect-auto -z-1 sm:object-center"
      />
      <ContentContainer className="flex flex-col lg:justify-between min-h-[calc(100svh-5rem)] max-h-[60rem] lg:max-h-[80rem] 3xl:max-h-[135rem] gap-12 py-16 lg:py-24">
        <div className="flex flex-col w-full lg:max-w-[36rem] text-center lg:text-left">
          <Heading variant="h1" shade="light">
            <RichText>{(tags) => t.rich("HeroSection.header", tags)}</RichText>
          </Heading>
          <Paragraph variant="large" shade="light" className="text-white">
            <RichText>{(tags) => t.rich("HeroSection.subHeader", tags)}</RichText>
          </Paragraph>
        </div>
        <div className="flex justify-center lg:justify-between">
          <Button variant="default" asChild>
            <Link title={t("HeroSection.ActionButton.linkTitle")} href={{ hash: t("HeroSection.ActionButton.link") }}>
              <ArrowRight />
              {t("HeroSection.ActionButton.label")}
            </Link>
          </Button>
          <Button
            className="hidden lg:flex bg-white border border-slate-100 hover:bg-white/90 w-[3.25rem] h-[3.25rem]"
            variant="default"
            asChild
          >
            <Link title={t("HeroSection.ScrollButton.linkTitle")} href={t("HeroSection.ScrollButton.link")}>
              <ArrowDown />
            </Link>
          </Button>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
}

export default HeroSection;
