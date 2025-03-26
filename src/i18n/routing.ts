import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["pl", "en", "it", "de", "zh"],

  // Used when no locale matches
  defaultLocale: "pl",

  pathnames: {
    "/": {
      pl: "/",
      en: "/",
      it: "/",
      de: "/",
      zh: "/",
    },
    "/services/project-cargo": {
      pl: "/uslugi/project-cargo",
      en: "/services/project-cargo",
      it: "/servizi/project-cargo",
      de: "/angebot/projektladung",
      zh: "/services/project-cargo",
    },
    "/services/inland-transport": {
      pl: "/uslugi/transport-srodladawy",
      en: "/services/inland-transport",
      it: "/servizi/trasporto-fluviale",
      de: "/angebot/binnentransport",
      zh: "/services/inland-transport",
    },
    "/services/land-transport": {
      pl: "/uslugi/transport-ladawy",
      en: "/services/land-transport",
      it: "/servizi/trasporto-terrestre",
      de: "/angebot/landtransport",
      zh: "/services/land-transport",
    },
    "/services/maritime-transport": {
      pl: "/uslugi/transport-morski",
      en: "/services/maritime-transport",
      it: "/servizi/trasporto-marittimo",
      de: "/angebot/seetransport",
      zh: "/services/maritime-transport",
    },
    "/realizations": {
      pl: "/realizacje",
      en: "/realizations",
      it: "/realizzazioni",
      de: "/realisierungen",
      zh: "/realizations",
    },
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
