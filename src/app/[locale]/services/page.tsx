import { useTranslations } from "next-intl";
import ServiceSection from "./pageComponents/ServiceSection";
import ContactSection from "../pageComponents/contactSection/ContactSection";
import ImageProjectCargo from "public/services/services-project-cargo.avif";
import ImageMaritimeTransport from "public/services/services-maritime-transport.avif";
import ImageInlandTransport from "public/services/services-inland-transport.avif";
import ImageLandTransport from "public/services/services-land-transport.avif";
import PageTitle from "@/components/PageTitle";

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
      button: {
        link: t("ContactButton.link"),
        linkTitle: t("ContactButton.linkTitle"),
        label: t("ContactButton.label"),
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
      button: {
        link: t("ContactButton.link"),
        linkTitle: t("ContactButton.linkTitle"),
        label: t("ContactButton.label"),
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
      button: {
        link: t("ContactButton.link"),
        linkTitle: t("ContactButton.linkTitle"),
        label: t("ContactButton.label"),
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
      button: {
        link: t("ContactButton.link"),
        linkTitle: t("ContactButton.linkTitle"),
        label: t("ContactButton.label"),
      },
    },
  ];
  const servicesImages = [ImageProjectCargo, ImageInlandTransport, ImageMaritimeTransport, ImageLandTransport];
  return (
    <>
      <PageTitle messages={{ title: t("title"), subtitle: t("subtitle") }} />
      {services.map((service, i) => (
        <ServiceSection key={service.title} messages={service} image={servicesImages[i]} />
      ))}
      <ContactSection />
    </>
  );
}
