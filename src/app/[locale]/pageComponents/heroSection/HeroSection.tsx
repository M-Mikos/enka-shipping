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
import { Paragraph } from "@/components/ui/paragraph";

function HeroSection() {
  const t = useTranslations("HomePage");

  return (
    <SectionContainer id={t("HeroSection.id")} className="min-h-[calc(100dvh-5rem)] h-auto">
      <ResponsiveBackgroundImage
        mobileImage={mobileHeroBackground.src}
        desktopImage={desktopHeroBackground.src}
        mobileSettings={{}}
        desktopSettings={{}}
        commonSettings={{ sizes: "100vw", fill: true }}
      />
      <ContentContainer className="flex flex-col justify-between min-h-[calc(100dvh-5rem)] h-auto gap-12 py-16 lg:py-24">
        <div className="flex flex-col gap-4 lg:gap-6 w-full lg:max-w-[36rem] text-center lg:text-left">
          <Heading variant="h1" shade="light">
            <RichText>{(tags) => t.rich("HeroSection.header", tags)}</RichText>
          </Heading>
          <Paragraph variant="large" shade="light" className="text-white">
            {t.rich("HeroSection.subHeader", {
              important: (chunks) => <strong className="font-semibold">{chunks}</strong>,
            })}
          </Paragraph>
        </div>
        <div className="flex justify-center lg:justify-between">
          <Button variant="default" asChild>
            <Link title={t("HeroSection.ActionButton.linkTitle")} href={t("HeroSection.ActionButton.link")}>
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
