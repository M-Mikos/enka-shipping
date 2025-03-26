import { useTranslations } from "next-intl";
import ContactSection from "../../_components/page-components/contactSection/ContactSection";
import PageTitle from "@/components/PageTitle";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { generatePageMetadata } from "@/lib/utils";
import OfferItem from "../_components/OfferItem";
import imageApplications from "@/../public/services/inland-transport/inlandtransport-applications.avif";
import imageEquipment from "@/../public/services/inland-transport/inlandtransport-equipment.avif";
import imageFleet from "@/../public/services/inland-transport/inlandtransport-fleet.avif";
import imageOrganizing from "@/../public/services/inland-transport/inlandtransport-organizing.avif";
import imageSupport from "@/../public/services/inland-transport/inlandtransport-support.avif";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("InlandTransportPage.Metadata");
  return generatePageMetadata(t);
}

export default function InlandTransport() {
  const t = useTranslations("InlandTransportPage");
  const offerKeys = ["Fleet", "Equipment", "Organizing", "Support", "Applications"];
  const listImages = [imageFleet, imageEquipment, imageOrganizing, imageSupport, imageApplications];

  return (
    <>
      <PageTitle messages={{ title: t("title"), subtitle: t("subtitle") }} />
      {offerKeys.map((key, i) => (
        <OfferItem key={key} pageKey="InlandTransport" translationsKey={key} image={listImages[i]} />
      ))}
      <ContactSection />
    </>
  );
}
