import ContentContainer from "@/components/ContentContainer";
import SectionContainer from "@/components/SectionContainer";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import GalleryGrid from "./pageComponents/GalleryGrid";
import ContactSection from "../pageComponents/contactSection/ContactSection";
// import { useTranslations } from "next-intl";
export default function Realizacje() {
  //   const t = useTranslations("HomePage");

  return (
    <>
      <SectionContainer>
        <ContentContainer className="py-16 lg:py-24">
          <Heading variant="h1">Realizacje</Heading>
          <Paragraph className="max-w-4xl mb-16" variant="large">
            Zapraszamy do zapoznania się z galerią naszych realizacji, w której prezentujemy przykłady skutecznych
            transportów zrealizowanych przez Enka. Każde zdjęcie to dowód naszego zaangażowania w dostarczanie ładunków
            na czas, niezależnie od ich wielkości, trasy czy branży.
          </Paragraph>
          <GalleryGrid />
        </ContentContainer>
      </SectionContainer>
      <ContactSection />
    </>
  );
}
