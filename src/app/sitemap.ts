import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          pl: `${process.env.NEXT_PUBLIC_SITE_URL}/pl`,
          it: `${process.env.NEXT_PUBLIC_SITE_URL}/en`,
          en: `${process.env.NEXT_PUBLIC_SITE_URL}/it`,
          de: `${process.env.NEXT_PUBLIC_SITE_URL}/de`,
          zh: `${process.env.NEXT_PUBLIC_SITE_URL}/zh`,
        },
      },
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/services`,
      lastModified: new Date(),
      alternates: {
        languages: {
          pl: `${process.env.NEXT_PUBLIC_SITE_URL}/pl/uslugi`,
          it: `${process.env.NEXT_PUBLIC_SITE_URL}/en/services`,
          en: `${process.env.NEXT_PUBLIC_SITE_URL}/it/i-nostri-servizi`,
          de: `${process.env.NEXT_PUBLIC_SITE_URL}/de/angebot`,
          zh: `${process.env.NEXT_PUBLIC_SITE_URL}/zh/services`,
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
          it: `${process.env.NEXT_PUBLIC_SITE_URL}/en/realizations`,
          en: `${process.env.NEXT_PUBLIC_SITE_URL}/it/realizzazioni`,
          de: `${process.env.NEXT_PUBLIC_SITE_URL}/de/realisierungen`,
          zh: `${process.env.NEXT_PUBLIC_SITE_URL}/zh/realizations`,
        },
      },
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
