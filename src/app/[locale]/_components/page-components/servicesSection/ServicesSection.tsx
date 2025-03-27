import ContentContainer from "@/components/ContentContainer";
import SectionContainer from "@/components/SectionContainer";
import { useTranslations } from "next-intl";
import servicesCargoBackground from "@/../public/home/services-cargo-background.avif";
import servicesInlandBackground from "@/../public/home/services-inland-background.avif";
import servicesLandBackground from "@/../public/home/services-land-background.avif";
import servicesMarineBackground from "@/../public/home/services-marine-background.avif";
import servicesCargoIcon from "@/../public/home/services-cargo-icon.avif";
import servicesInlandIcon from "@/../public/home/services-inland-icon.avif";
import servicesLandIcon from "@/../public/home/services-land-icon.avif";
import servicesMaritimeIcon from "@/../public/home/services-maritime-icon.avif";
import ServiceList from "./ServiceList";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { ServiceItemProps } from "./types";

function ServicesSection() {
  const t = useTranslations("HomePage");

  const services: ServiceItemProps[] = [
    {
      title: t("ServicesSection.ServicesList.ProjectCargo.title"),
      subtitle: t("ServicesSection.ServicesList.ProjectCargo.subtitle"),
      linkTitleAttribute: t("ServicesSection.ServicesList.ProjectCargo.linkTitle"),
      image: servicesCargoBackground,
      icon: servicesCargoIcon,
      link: "/services/project-cargo",
    },
    {
      title: t("ServicesSection.ServicesList.InlandTransport.title"),
      subtitle: t("ServicesSection.ServicesList.InlandTransport.subtitle"),
      linkTitleAttribute: t("ServicesSection.ServicesList.InlandTransport.linkTitle"),
      image: servicesInlandBackground,
      icon: servicesInlandIcon,
      link: "/services/inland-transport",
    },
    {
      title: t("ServicesSection.ServicesList.MaritimeTransport.title"),
      subtitle: t("ServicesSection.ServicesList.MaritimeTransport.subtitle"),
      linkTitleAttribute: t("ServicesSection.ServicesList.MaritimeTransport.linkTitle"),
      image: servicesMarineBackground,
      icon: servicesMaritimeIcon,
      link: "/services/maritime-transport",
    },
    {
      title: t("ServicesSection.ServicesList.LandTransport.title"),
      subtitle: t("ServicesSection.ServicesList.LandTransport.subtitle"),
      linkTitleAttribute: t("ServicesSection.ServicesList.LandTransport.linkTitle"),
      image: servicesLandBackground,
      icon: servicesLandIcon,
      link: "/services/land-transport",
    },
  ];

  return (
    <SectionContainer id={t("ServicesSection.id")}>
      <ContentContainer className="py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row w-full lg:gap-12 mb-16">
          <Heading variant="h2" className="basis-1/2">
            {t("ServicesSection.header")}
          </Heading>
          <Paragraph className="basis-1/2">{t("ServicesSection.textContent")}</Paragraph>
        </div>
        <ServiceList services={services} />
      </ContentContainer>
    </SectionContainer>
  );
}

export default ServicesSection;
