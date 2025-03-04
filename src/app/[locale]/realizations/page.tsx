import ContentContainer from "@/components/ContentContainer";
import SectionContainer from "@/components/SectionContainer";
import GalleryGrid from "./pageComponents/GalleryGrid";
import ContactSection from "../pageComponents/contactSection/ContactSection";
import PageTitle from "@/components/PageTitle";
import { useTranslations } from "next-intl";

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
