import MapPinIcon from "@/../public/home/map-pin.svg";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
interface MapPinProps {
  region: string;
  coords: string[];
}

// The styles responsible for bi-directional hover effect connection between MapPin and Region list item has been hardcoded in global.css file due to Tailwind v4 limitations (no Safelist configuration available).

function MapPin({ region, coords }: MapPinProps) {
  const t = useTranslations("Header");
  const pathname = "/";

  const [left, top] = coords;
  return (
    <Link
      title={t("Navigation.ContactLink.linkTitle")}
      href={{ pathname: pathname, hash: t("Navigation.ContactLink.link") }}
    >
      <div
        data-region={region}
        style={{ left, top }}
        className={`absolute w-4 h-4 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-6 lg:h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 transition-transform hover:-translate-y-2`}
      >
        <Image className="w-full h-full" src={MapPinIcon} width="50" height="50" alt="" unoptimized />
      </div>
    </Link>
  );
}

export default MapPin;
