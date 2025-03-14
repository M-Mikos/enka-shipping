"use client";

import ContentContainer from "@/components/ContentContainer";
import EnkaLogo from "./EnkaLogo";
import Navigation from "./Navigation";
import LocaleSwitcher from "./LocaleSwitcher";
import ContactButton from "./ContactButton";
import dynamic from "next/dynamic"; // Import dynamic for lazy loading
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { MenuIcon } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useTranslations } from "next-intl";

const MobileDrawer = dynamic(() => import("./MobileDrawer"), {
  ssr: false,
});

export default function Header() {
  const t = useTranslations("Header");
  const isDesktop = useMediaQuery("(min-width:64em)");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed z-50 bg-white border-b border-slate-100">
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
              <ContactButton className="border-0 px-2" />
              <Button onClick={() => setIsOpen(true)} variant="subtle" className="px-2">
                <MenuIcon />
                <VisuallyHidden>{t("MobileDrawer.triggerLabel")}</VisuallyHidden>
              </Button>
              <MobileDrawer isOpen={isOpen} setIsOpen={setIsOpen} /> {/* Lazy-loaded */}
            </div>
          )}
        </div>
      </ContentContainer>
    </header>
  );
}
