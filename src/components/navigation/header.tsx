"use client";

import ContentContainer from "../ContentContainer";
import EnkaLogo from "./EnkaLogo";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "../ui/drawer";
import { MenuIcon } from "lucide-react";
import Navigation from "./Navigation";
import LocaleSwitcher from "./LocaleSwitcher";
import ContactButton from "./ContactButton";

export default function Header() {
  const isDesktop = useMediaQuery("(min-width:48em)");

  return (
    <header>
      <ContentContainer>
        <div className="flex justify-between items-center h-20 py-4">
          <div className="w-32">
            <EnkaLogo />
          </div>
          {isDesktop ? (
            <div className="flex items-center gap-12">
              <Navigation />
              <LocaleSwitcher />
              <ContactButton />
            </div>
          ) : (
            <Drawer>
              <DrawerTrigger>
                <MenuIcon />
              </DrawerTrigger>
              <DrawerContent>
                <DrawerTitle>test title</DrawerTitle> test content
              </DrawerContent>
            </Drawer>
          )}
        </div>
      </ContentContainer>
      <nav></nav>
    </header>
  );
}
