import ContentContainer from "@/components/ContentContainer";
import { Heading } from "@/components/ui/heading";
import { useTranslations } from "next-intl";
import ServiceSection from "./pageComponents/ServiceSection";
import ContactSection from "../pageComponents/contactSection/ContactSection";

// import { useTranslations } from "next-intl";
export default function Services() {
  const t = useTranslations("ServicesPage");
  const services = [
    {
      title: t("Services.ProjectCargo.title"),
      id: t("Services.ProjectCargo.id"),
      textContent: t("Services.ProjectCargo.textContent"),
      altText: t("Services.ProjectCargo.altText"),
      values: {
        1: {
          title: t("Services.ProjectCargo.Values.1.title"),
          textContent: t("Services.ProjectCargo.Values.1.textContent"),
        },
        2: {
          title: t("Services.ProjectCargo.Values.2.title"),
          textContent: t("Services.ProjectCargo.Values.2.textContent"),
        },
        3: {
          title: t("Services.ProjectCargo.Values.3.title"),
          textContent: t("Services.ProjectCargo.Values.3.textContent"),
        },
        4: {
          title: t("Services.ProjectCargo.Values.4.title"),
          textContent: t("Services.ProjectCargo.Values.4.textContent"),
        },
      },
    },
    {
      title: t("Services.InlandTransport.title"),
      id: t("Services.InlandTransport.id"),
      textContent: t("Services.InlandTransport.textContent"),
      altText: t("Services.InlandTransport.altText"),
      values: {
        1: {
          title: t("Services.InlandTransport.Values.1.title"),
          textContent: t("Services.InlandTransport.Values.1.textContent"),
        },
        2: {
          title: t("Services.InlandTransport.Values.2.title"),
          textContent: t("Services.InlandTransport.Values.2.textContent"),
        },
        3: {
          title: t("Services.InlandTransport.Values.3.title"),
          textContent: t("Services.InlandTransport.Values.3.textContent"),
        },
        4: {
          title: t("Services.InlandTransport.Values.4.title"),
          textContent: t("Services.InlandTransport.Values.4.textContent"),
        },
      },
    },
    {
      title: t("Services.MaritimeTransport.title"),
      id: t("Services.MaritimeTransport.id"),
      textContent: t("Services.MaritimeTransport.textContent"),
      altText: t("Services.MaritimeTransport.altText"),
      values: {
        1: {
          title: t("Services.MaritimeTransport.Values.1.title"),
          textContent: t("Services.MaritimeTransport.Values.1.textContent"),
        },
        2: {
          title: t("Services.MaritimeTransport.Values.2.title"),
          textContent: t("Services.MaritimeTransport.Values.2.textContent"),
        },
        3: {
          title: t("Services.MaritimeTransport.Values.3.title"),
          textContent: t("Services.MaritimeTransport.Values.3.textContent"),
        },
        4: {
          title: t("Services.MaritimeTransport.Values.4.title"),
          textContent: t("Services.MaritimeTransport.Values.4.textContent"),
        },
      },
    },
    {
      title: t("Services.LandTransport.title"),
      id: t("Services.LandTransport.id"),
      textContent: t("Services.LandTransport.textContent"),
      altText: t("Services.LandTransport.altText"),
      values: {
        1: {
          title: t("Services.LandTransport.Values.1.title"),
          textContent: t("Services.LandTransport.Values.1.textContent"),
        },
        2: {
          title: t("Services.LandTransport.Values.2.title"),
          textContent: t("Services.LandTransport.Values.2.textContent"),
        },
        3: {
          title: t("Services.LandTransport.Values.3.title"),
          textContent: t("Services.LandTransport.Values.3.textContent"),
        },
        4: {
          title: t("Services.LandTransport.Values.4.title"),
          textContent: t("Services.LandTransport.Values.4.textContent"),
        },
      },
    },
  ];

  return (
    <>
      <ContentContainer id={t("id")}>
        <Heading variant="h1">{t("title")}</Heading>
      </ContentContainer>
      {services.map((service) => (
        <ServiceSection key={service.title} messages={service} />
      ))}
      <ContactSection />
    </>
  );
}
