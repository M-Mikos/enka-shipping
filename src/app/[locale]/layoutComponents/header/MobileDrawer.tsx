"use client";

import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { useTranslations } from "next-intl";
import { Dispatch, SetStateAction } from "react";
import Navigation from "./Navigation";
import LocaleSwitcher from "./LocaleSwitcher";

function MobileDrawer({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: Dispatch<SetStateAction<boolean>> }) {
  const t = useTranslations("Header");

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerContent className="min-h-[60vh] items-end px-3 py-2">
        <VisuallyHidden.Root>
          <DrawerTitle>{t("MobileDrawer.hiddenTitle")}</DrawerTitle>
        </VisuallyHidden.Root>
        <Navigation orientation="vertical" handleClose={() => setIsOpen(false)} />
        <div className="pt-3 border-t justify-end self-stretch flex items-center">
          <LocaleSwitcher />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default MobileDrawer;
