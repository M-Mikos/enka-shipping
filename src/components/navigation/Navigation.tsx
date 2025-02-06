import { useTranslations } from "next-intl";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { Link } from "@/i18n/routing";

interface NavigationProps {
  orientation: "horizontal" | "vertical";
  handleClose: () => void;
}

function Navigation({ orientation, handleClose }: NavigationProps) {
  const t = useTranslations("Header");
  const orientationClass = orientation === "vertical" ? "flex-col space-y-3 items-end" : "flex-row space-x-3";

  return (
    <NavigationMenu orientation={orientation}>
      <NavigationMenuList className={orientationClass}>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={handleClose} asChild>
            <Link title={t("Navigation.ServicesLink.titleAttribute")} href="/services">
              {t("Navigation.ServicesLink.label")}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={handleClose} asChild>
            <Link title={t("Navigation.RealizationsLink.titleAttribute")} href="/realizations">
              {t("Navigation.RealizationsLink.label")}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={handleClose} asChild>
            <Link title={t("Navigation.ContactLink.titleAttribute")} href="/#contact-section">
              {t("Navigation.ContactLink.label")}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Navigation;
