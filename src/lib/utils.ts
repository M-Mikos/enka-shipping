import { clsx, type ClassValue } from "clsx";
import { useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Generate locale specific metadata title template
export function generateDefaultMetadata(t: typeof useTranslations) {
  if (!t) {
    throw new Error(`Default metadata messages not found.`);
  }

  return {
    title: {
      template: `%s | ${t("titleSuffix")}`,
      default: t("titleDefault"),
    },
  };
}

// Generate locale specific metadata
export function generatePageMetadata(route: string, t: typeof useTranslations) {
  if (!t) {
    throw new Error(`Metadata messages not found for route: ${route}`);
  }

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${t("locale")}/${route}`,
    },
    openGraph: {
      title: t("ogTitle") || t("title"),
      description: t("ogDescription") || t("description"),
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${t("locale")}/${route}`,
      images: [t("ogImage") || `${process.env.NEXT_PUBLIC_SITE_URL}/default-og-image.jpg`],
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle") || t("title"),
      description: t("twitterDescription") || t("description"),
      images: [t("twitterImage") || t("ogImage") || `${process.env.NEXT_PUBLIC_SITE_URL}/default-twitter-image.jpg`],
    },
  };
}
