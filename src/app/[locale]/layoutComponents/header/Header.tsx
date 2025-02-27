"use client";

import ContentContainer from "@/components/ContentContainer";
import EnkaLogo from "./EnkaLogo";
import Navigation from "./Navigation";
import LocaleSwitcher from "./LocaleSwitcher";
import ContactButton from "./ContactButton";
import MobileDrawer from "./MobileDrawer";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function Header() {
  const isDesktop = useMediaQuery("(min-width:64em)");

  return (
    <header>
      <ContentContainer>
        <div className="flex justify-between items-center h-20 py-4">
          <div className="w-20 lg:w-28 2xl:w-32">
            <EnkaLogo />
          </div>
          {isDesktop ? (
            <div className="flex items-center gap-12">
              <Navigation orientation="horizontal" />
              <ContactButton />
              <LocaleSwitcher />
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <ContactButton className="border-0" />
              <MobileDrawer />
            </div>
          )}
        </div>
      </ContentContainer>
    </header>
  );
}
