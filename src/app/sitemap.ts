import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          pl: `${process.env.NEXT_PUBLIC_SITE_URL}/pl`,
          en: `${process.env.NEXT_PUBLIC_SITE_URL}/en`,
          it: `${process.env.NEXT_PUBLIC_SITE_URL}/it`,
          de: `${process.env.NEXT_PUBLIC_SITE_URL}/de`,
          zh: `${process.env.NEXT_PUBLIC_SITE_URL}/zh`,
        },
      },
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/services/project-cargo`,
      lastModified: new Date(),
      alternates: {
        languages: {
          pl: `${process.env.NEXT_PUBLIC_SITE_URL}/pl/uslugi/project-cargo`,
          en: `${process.env.NEXT_PUBLIC_SITE_URL}/en/servizi/project-cargo`,
          it: `${process.env.NEXT_PUBLIC_SITE_URL}/it/services/project-cargo`,
          de: `${process.env.NEXT_PUBLIC_SITE_URL}/de/angebot/projektladung`,
          zh: `${process.env.NEXT_PUBLIC_SITE_URL}/zh/services/project-cargo`,
        },
      },
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/services/inland-transport`,
      lastModified: new Date(),
      alternates: {
        languages: {
          pl: `${process.env.NEXT_PUBLIC_SITE_URL}/pl/uslugi/transport-srodladawy`,
          en: `${process.env.NEXT_PUBLIC_SITE_URL}/en/services/inland-transport`,
          it: `${process.env.NEXT_PUBLIC_SITE_URL}/it/servizi/trasporto-fluviale`,
          de: `${process.env.NEXT_PUBLIC_SITE_URL}/de/angebot/binnentransport`,
          zh: `${process.env.NEXT_PUBLIC_SITE_URL}/zh/services/inland-transport`,
        },
      },
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/services/land-transport`,
      lastModified: new Date(),
      alternates: {
        languages: {
          pl: `${process.env.NEXT_PUBLIC_SITE_URL}/pl/uslugi/transport-ladawy`,
          en: `${process.env.NEXT_PUBLIC_SITE_URL}/en/services/land-transport`,
          it: `${process.env.NEXT_PUBLIC_SITE_URL}/it/servizi/trasporto-terrestre`,
          de: `${process.env.NEXT_PUBLIC_SITE_URL}/de/angebot/landtransport`,
          zh: `${process.env.NEXT_PUBLIC_SITE_URL}/zh/services/land-transport`,
        },
      },
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/services/maritime-transport`,
      lastModified: new Date(),
      alternates: {
        languages: {
          pl: `${process.env.NEXT_PUBLIC_SITE_URL}/pl/uslugi/transport-morski`,
          en: `${process.env.NEXT_PUBLIC_SITE_URL}/en/services/maritime-transport`,
          it: `${process.env.NEXT_PUBLIC_SITE_URL}/it/servizi/trasporto-marittimo`,
          de: `${process.env.NEXT_PUBLIC_SITE_URL}/de/angebot/seetransport`,
          zh: `${process.env.NEXT_PUBLIC_SITE_URL}/zh/services/maritime-transport`,
        },
      },
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/realizations`,
      lastModified: new Date(),
      alternates: {
        languages: {
          pl: `${process.env.NEXT_PUBLIC_SITE_URL}/pl/realizacje`,
          en: `${process.env.NEXT_PUBLIC_SITE_URL}/en/realizations`,
          it: `${process.env.NEXT_PUBLIC_SITE_URL}/it/realizzazioni`,
          de: `${process.env.NEXT_PUBLIC_SITE_URL}/de/realisierungen`,
          zh: `${process.env.NEXT_PUBLIC_SITE_URL}/zh/realizations`,
        },
      },
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
