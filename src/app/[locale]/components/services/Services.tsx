import ContentContainer from "@/components/ContentContainer";
import SectionContainer from "@/components/SectionContainer";
import { useTranslations } from "next-intl";
import servicesCargoBackground from "@/../public/home/services-cargo-background.avif";
import servicesInlandBackground from "@/../public/home/services-inland-background.avif";
import servicesLandBackground from "@/../public/home/services-land-background.avif";
import servicesMarineBackground from "@/../public/home/services-marine-background.avif";
import ServiceList from "./ServiceList";

function Services() {
  const t = useTranslations("HomePage");

  const services = [
    {
      title: t("ServicesSection.ServicesList.ProjectCargo.title"),
      subtitle: t("ServicesSection.ServicesList.ProjectCargo.subtitle"),
      linkTitleAttribute: t("ServicesSection.ServicesList.ProjectCargo.linkTitleAttribute"),
      image: servicesCargoBackground,
      href: t("ServicesSection.ServicesList.ProjectCargo.link"),
    },
    {
      title: t("ServicesSection.ServicesList.InlandTransport.title"),
      subtitle: t("ServicesSection.ServicesList.InlandTransport.subtitle"),
      linkTitleAttribute: t("ServicesSection.ServicesList.InlandTransport.linkTitleAttribute"),
      image: servicesLandBackground,
      href: t("ServicesSection.ServicesList.InlandTransport.link"),
    },
    {
      title: t("ServicesSection.ServicesList.MaritimeTransport.title"),
      subtitle: t("ServicesSection.ServicesList.MaritimeTransport.subtitle"),
      linkTitleAttribute: t("ServicesSection.ServicesList.MaritimeTransport.linkTitleAttribute"),
      image: servicesInlandBackground,
      href: t("ServicesSection.ServicesList.MaritimeTransport.link"),
    },
    {
      title: t("ServicesSection.ServicesList.LandTransport.title"),
      subtitle: t("ServicesSection.ServicesList.LandTransport.subtitle"),
      linkTitleAttribute: t("ServicesSection.ServicesList.LandTransport.linkTitleAttribute"),
      image: servicesMarineBackground,
      href: t("ServicesSection.ServicesList.LandTransport.link"),
    },
  ];

  return (
    <SectionContainer id={t("ServicesSection.id")}>
      <ContentContainer className="py-18 xl:py-24">
        <div className="flex flex-col lg:flex-row w-full gap-12 lg:gap-16 mb-16">
          <h2 className="basis-1/2 text-3xl xl:text-5xl 2xl:text-6xl font-extrabold leading-none tracking-wide">
            {t("ServicesSection.header")}
          </h2>
          <p className="basis-1/2 text-base xl:text-lg text-slate-600">{t("ServicesSection.textContent")}</p>
        </div>
        <ServiceList services={services} />
      </ContentContainer>
    </SectionContainer>
  );
}

export default Services;
