import { useTranslations } from "next-intl";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { Link } from "@/i18n/routing";

function Navigation() {
  const t = useTranslations("Header");

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
            <Link title={t("Navigation.ServicesLink.titleAttribute")} href="/services">
              {t("Navigation.ServicesLink.label")}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
            <Link title={t("Navigation.RealizationsLink.titleAttribute")} href="/realizations">
              {t("Navigation.RealizationsLink.label")}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
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
