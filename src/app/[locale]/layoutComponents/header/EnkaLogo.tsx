import { useTranslations } from "next-intl";
import Image from "next/image";
import enkaLogo from "@/../public/logo-enka.svg";
import { Link } from "@/i18n/routing";

export default function EnkaLogo() {
  const t = useTranslations("Global");
  return (
    <Link title={t("logoTitle")} href="/">
      <Image
        className="aspect-[4] w-full"
        src={enkaLogo}
        width="120"
        height="30"
        alt={t("logoAlt")}
        unoptimized={true}
      />
    </Link>
  );
}
