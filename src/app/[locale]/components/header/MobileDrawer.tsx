import { MenuIcon } from "lucide-react";
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import Navigation from "./Navigation";
import ContactButton from "./ContactButton";
import LocaleSwitcher from "./LocaleSwitcher";
import { useTranslations } from "next-intl";
import { useState } from "react";

function MobileDrawer() {
  const t = useTranslations("Header");
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>
        <MenuIcon />
      </DrawerTrigger>
      <DrawerContent className="min-h-[80vh] items-end px-3 py-2">
        <VisuallyHidden.Root>
          <DrawerTitle>{t("MobileDrawer.hiddenTitle")}</DrawerTitle>
        </VisuallyHidden.Root>
        <Navigation orientation="vertical" handleClose={handleClose} />
        <div className="pt-3 border-t self-stretch flex justify-between items-center">
          <LocaleSwitcher />
          <ContactButton />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default MobileDrawer;
