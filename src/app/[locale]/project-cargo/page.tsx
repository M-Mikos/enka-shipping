import { useTranslations } from "next-intl";
import ContactSection from "../pageComponents/contactSection/ContactSection";
import PageTitle from "@/components/PageTitle";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { generatePageMetadata } from "@/lib/utils";
import OfferItem from "./serciveContent";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("ProjectCargoPage.Metadata");
  return generatePageMetadata(t);
}

export default function Services() {
  const t = useTranslations("ProjectCargoPage");
  const offerKeys = ["Cranes", "Spmt", "Platforms", "Support", "Realization"];

  return (
    <>
      <PageTitle messages={{ title: t("title"), subtitle: t("subtitle") }} />
      {offerKeys.map((key) => (
        <OfferItem key={key} pageKey="ProjectCargo" translationsKey={key} />
      ))}
      <ContactSection />
    </>
  );
}
