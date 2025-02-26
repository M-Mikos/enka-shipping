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
import ResponsiveBackgroundImage from "@/components/ResponsiveBackgroundImage";

function HeroSection() {
  const t = useTranslations("HomePage");

  return (
    <SectionContainer id={t("HeroSection.id")} className="min-h-[calc(100vh-5rem)] h-auto">
      <ResponsiveBackgroundImage
        mobileImage={mobileHeroBackground.src}
        desktopImage={desktopHeroBackground.src}
        mobileSettings={{ width: "1200", height: "2400" }}
        desktopSettings={{ width: "3840", height: "2158" }}
        commonSettings={{ sizes: "100vw", priority: true }}
      />
      <ContentContainer className="flex flex-col justify-between min-h-[calc(100vh-5rem)] h-auto gap-12 py-12 lg:py-18 xl:py-24">
        <div className="flex flex-col gap-4 lg:gap-6 w-full lg:max-w-[48rem] text-center lg:text-left">
          <Heading variant="h1" background="dark">
            <RichText>{(tags) => t.rich("HeroSection.header", tags)}</RichText>
          </Heading>
          <p className="text-base lg:text-xl text-white">
            {t.rich("HeroSection.subHeader", {
              important: (chunks) => <strong className="font-semibold">{chunks}</strong>,
            })}
          </p>
        </div>
        <div className="flex justify-between">
          <Button variant="default" asChild>
            <a title={t("HeroSection.ActionButton.linkTitle")} href={t("HeroSection.ActionButton.link")}>
              <ArrowRight />
              {t("HeroSection.ActionButton.label")}
            </a>
          </Button>
          <Button
            className="bg-white border border-slate-100 hover:bg-white/90 w-[3.25rem] h-[3.25rem]"
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
