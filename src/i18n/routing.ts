import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["pl", "en", "it"],

  // Used when no locale matches
  defaultLocale: "pl",

  pathnames: {
    "/services": {
      pl: "/uslugi",
      en: "/services",
      it: "/i-nostri-servizi",
    },
    "/realizations": {
      pl: "/realizacje",
      en: "/realizations",
      it: "/realizzazioni",
    },
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
