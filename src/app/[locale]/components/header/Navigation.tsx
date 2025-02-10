import { useTranslations } from "next-intl";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link, usePathname } from "@/i18n/routing";

interface NavigationProps {
  orientation: "horizontal" | "vertical";
  handleClose?: () => void;
}

function Navigation({ orientation, handleClose }: NavigationProps) {
  const t = useTranslations("Header");
  const navigationMenuOrientationClasses = orientation === "vertical" ? "items-start py-4" : "";
  const navigationMenuListOrientationClasses =
    orientation === "vertical" ? "flex-col space-y-3 items-end" : "flex-row space-x-3";
  const pathname = usePathname();

  return (
    <NavigationMenu className={navigationMenuOrientationClasses} orientation={orientation}>
      <NavigationMenuList className={navigationMenuListOrientationClasses}>
        <NavigationMenuItem>
          <Link title={t("Navigation.ServicesLink.titleAttribute")} href="/services" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              onClick={handleClose}
              active={pathname === "/services"}
            >
              {t("Navigation.ServicesLink.label")}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link title={t("Navigation.RealizationsLink.titleAttribute")} href="/realizations" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              onClick={handleClose}
              active={pathname === "/realizations"}
            >
              {t("Navigation.RealizationsLink.label")}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link title={t("Navigation.ContactLink.titleAttribute")} href="/#contact-section" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={handleClose}>
              {t("Navigation.ContactLink.label")}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Navigation;
