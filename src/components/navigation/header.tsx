"use Client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import ContentContainer from "../ContentContainer";
import logo from "../../../public/logo-enka.svg";

export default function Header() {
  const t = useTranslations("Global");

  return (
    <header>
      <ContentContainer>
        <div className="flex justify-between items-center h-20 py-4">
          <div className="">
            <Image src={logo} width="120" height="30" alt={t("logoAlt")} />
          </div>
          <div className="flex items-center gap-12">
            <nav>
              <ul className="flex items-center gap-3">
                <li>Oferta</li>
                <li>Realizacje</li>
                <li>Kontakt</li>
              </ul>
            </nav>
            <div>Telefon</div>
            <div>
              Języki
              <ul>
                <li>PL</li>
                <li>EN</li>
              </ul>
            </div>
          </div>
        </div>
      </ContentContainer>
      <nav></nav>
    </header>
  );
}
