import ContentContainer from "@/components/ContentContainer";
import { Paragraph } from "@/components/ui/paragraph";
import { useTranslations } from "next-intl";
import enkaTransparentLogo from "@/../public/logo-enka-dark-transparent.svg";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("Footer");
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-950">
      <ContentContainer>
        <div className="flex justify-between items-center py-12 border-b border-slate-800 gap-4">
          <div className="basis-1/2">
            <Image src={enkaTransparentLogo} width={500} height={116} alt={t("logoAlt")} unoptimized />
          </div>
          <div>
            <Paragraph variant="small" shade="light">
              {t("companyName")}
            </Paragraph>
            <Paragraph className="text-right" variant="small" shade="light">
              {t("companyAdress")}
            </Paragraph>
          </div>
        </div>
        <div className="flex justify-between items-center gap-2 py-6 text-sm text-slate-600">
          <span>{t("copyright", { year: year })}</span>
          <span className="text-right">
            {t("Credits.prefix")}
            <a className="transition hover:text-slate-300" href={t("Credits.link")} title={t("Credits.linkTitle")}>
              {t("Credits.author")}
            </a>
          </span>
        </div>
      </ContentContainer>
    </footer>
  );
}
