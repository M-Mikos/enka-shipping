import { useTranslations } from "next-intl";
import ContactSection from "../../_components/page-components/contactSection/ContactSection";
import PageTitle from "@/components/PageTitle";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { generatePageMetadata } from "@/lib/utils";
import OfferItem from "../_components/OfferItem";
import imageBulk from "@/../public/services/maritime-transport/maritimetransport-bulk.avif";
import imageIntermodal from "@/../public/services/maritime-transport/maritimetransport-intermodal.avif";
import imageOversize from "@/../public/services/maritime-transport/maritimetransport-oversize.avif";
import imagePort from "@/../public/services/maritime-transport/maritimetransport-port.avif";
import imageRoutes from "@/../public/services/maritime-transport/maritimetransport-routes.avif";
import imageServices from "@/../public/services/maritime-transport/maritimetransport-services.avif";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("MaritimeTransportPage.Metadata");
  return generatePageMetadata(t);
}

export default function MaritimeTransport() {
  const t = useTranslations("MaritimeTransportPage");
  const offerKeys = ["Services", "Oversize", "Bulk", "Intermodal", "Port", "Routes"];
  const listImages = [imageServices, imageOversize, imageBulk, imageIntermodal, imagePort, imageRoutes];

  return (
    <>
      <PageTitle messages={{ title: t("title"), subtitle: t("subtitle") }} />
      {offerKeys.map((key, i) => (
        <OfferItem key={key} pageKey="MaritimeTransport" translationsKey={key} image={listImages[i]} />
      ))}
      <ContactSection />
    </>
  );
}
