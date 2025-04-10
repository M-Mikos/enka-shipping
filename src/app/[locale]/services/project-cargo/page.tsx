import { useTranslations } from "next-intl";
import ContactSection from "../../_components/page-components/contactSection/ContactSection";
import PageTitle from "@/components/PageTitle";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { generatePageMetadata } from "@/lib/utils";
import OfferItem from "../_components/OfferItem";
import imageCranes from "@/../public/services/project-cargo/projectcargo-cranes.avif";
import imagePlatforms from "@/../public/services/project-cargo/projectcargo-platforms.avif";
import imageRealization from "@/../public/services/project-cargo/projectcargo-realization.avif";
import imageSpmt from "@/../public/services/project-cargo/projectcargo-spmt.avif";
import imageSupport from "@/../public/services/project-cargo/projectcargo-support.avif";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("ProjectCargoPage.Metadata");
  return generatePageMetadata(t);
}

export default function ProjectCargo() {
  const t = useTranslations("ProjectCargoPage");
  const offerKeys = ["Cranes", "Spmt", "Platforms", "Support", "Realization"];
  const listImages = [imageCranes, imageSpmt, imagePlatforms, imageSupport, imageRealization];

  return (
    <>
      <PageTitle messages={{ title: t("title"), subtitle: t("subtitle") }} />
      {offerKeys.map((key, i) => (
        <OfferItem key={key} pageKey="ProjectCargo" translationsKey={key} image={listImages[i]} />
      ))}
      <ContactSection />
    </>
  );
}
