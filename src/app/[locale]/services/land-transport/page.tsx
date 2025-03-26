import { useTranslations } from "next-intl";
import ContactSection from "../../_components/page-components/contactSection/ContactSection";
import PageTitle from "@/components/PageTitle";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { generatePageMetadata } from "@/lib/utils";
import OfferItem from "../_components/OfferItem";
import imageFlexibility from "@/../public/services/land-transport/landtransport-flexibility.avif";
import imagePlanning from "@/../public/services/land-transport/landtransport-planning.avif";
import imageRange from "@/../public/services/land-transport/landtransport-range.avif";
import imagServices from "@/../public/services/land-transport/landtransport-services.avif";
import imageSupport from "@/../public/services/land-transport/landtransport-support.avif";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("LandTransportPage.Metadata");
  return generatePageMetadata(t);
}

export default function LandTransport() {
  const t = useTranslations("LandTransportPage");
  const offerKeys = ["Services", "Planning", "Range", "Flexibility", "Support"];
  const listImages = [imagServices, imagePlanning, imageRange, imageFlexibility, imageSupport];

  return (
    <>
      <PageTitle messages={{ title: t("title"), subtitle: t("subtitle") }} />
      {offerKeys.map((key, i) => (
        <OfferItem key={key} pageKey="LandTransport" translationsKey={key} image={listImages[i]} />
      ))}
      <ContactSection />
    </>
  );
}
