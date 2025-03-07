import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";

interface RegionProps {
  region: string;
  children: ReactNode;
}

// The styles responsible for bi-directional hover effect connection between MapPin and Region list item has been hardcoded in global.css file due to Tailwind v4 limitations (no Safelist configuration available).

function Region({ region, children }: RegionProps) {
  const t = useTranslations("Header");
  const pathname = "/";
  return (
    <li data-region={region} className={`basis-1/2 `}>
      <Link
        title={t("Navigation.ContactLink.linkTitle")}
        href={{ pathname: pathname, hash: t("Navigation.ContactLink.link") }}
        className="flex gap-4 hover:text-primary hover:underline"
      >
        {children}
      </Link>
    </li>
  );
}

export default Region;
