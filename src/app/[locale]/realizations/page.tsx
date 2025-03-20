import ContentContainer from "@/components/ContentContainer";
import SectionContainer from "@/components/SectionContainer";
import GalleryGrid from "./_components/GalleryGrid";
import ContactSection from "../_components/page-components/contactSection/ContactSection";
import PageTitle from "@/components/PageTitle";
import { useTranslations } from "next-intl";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { generatePageMetadata } from "@/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("RealizationsPage.Metadata");
  return generatePageMetadata(t);
}

export default function Realizacje() {
  const t = useTranslations("RealizationsPage");

  return (
    <>
      <PageTitle messages={{ title: t("title"), subtitle: t("subtitle") }} />
      <SectionContainer>
        <ContentContainer className="py-16 lg:py-24">
          <GalleryGrid />
        </ContentContainer>
      </SectionContainer>
      <ContactSection />
    </>
  );
}
