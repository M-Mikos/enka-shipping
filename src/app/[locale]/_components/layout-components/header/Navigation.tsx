import { useTranslations } from "next-intl";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link, usePathname } from "@/i18n/routing";
import clsx from "clsx";

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
        {orientation === "vertical" ? (
          <>
            <NavigationMenuItem>
              <Link
                href="/services/project-cargo"
                title={t("Navigation.Services.ServicesContent.ProjectCargoLink.linkTitle")}
                legacyBehavior
                passHref
              >
                <NavigationMenuLink
                  className={clsx(navigationMenuTriggerStyle(), "m-1")}
                  onClick={handleClose}
                  active={pathname === "/services/project-cargo"}
                >
                  {t("Navigation.Services.ServicesContent.ProjectCargoLink.label")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/services/inland-transport"
                title={t("Navigation.Services.ServicesContent.InlandTransportLink.linkTitle")}
                legacyBehavior
                passHref
              >
                <NavigationMenuLink
                  className={clsx(navigationMenuTriggerStyle(), "m-1")}
                  onClick={handleClose}
                  active={pathname === "/services/inland-transport"}
                >
                  {t("Navigation.Services.ServicesContent.InlandTransportLink.label")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/services/land-transport"
                title={t("Navigation.Services.ServicesContent.LandTransportLink.linkTitle")}
                legacyBehavior
                passHref
              >
                <NavigationMenuLink
                  className={clsx(navigationMenuTriggerStyle(), "m-1")}
                  onClick={handleClose}
                  active={pathname === "/services/land-transport"}
                >
                  {t("Navigation.Services.ServicesContent.LandTransportLink.label")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/services/maritime-transport"
                title={t("Navigation.Services.ServicesContent.MaritimeTransportLink.linkTitle")}
                legacyBehavior
                passHref
              >
                <NavigationMenuLink
                  className={clsx(navigationMenuTriggerStyle(), "m-1")}
                  onClick={handleClose}
                  active={pathname === "/services/maritime-transport"}
                >
                  {t("Navigation.Services.ServicesContent.MaritimeTransportLink.label")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </>
        ) : (
          <NavigationMenuItem>
            <NavigationMenuTrigger>{t("Navigation.Services.label")}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul>
                <li>
                  <Link
                    href="/services/project-cargo"
                    title={t("Navigation.Services.ServicesContent.ProjectCargoLink.linkTitle")}
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink
                      className={clsx(navigationMenuTriggerStyle(), "m-1")}
                      onClick={handleClose}
                      active={pathname === "/services/project-cargo"}
                    >
                      {t("Navigation.Services.ServicesContent.ProjectCargoLink.label")}
                    </NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/inland-transport"
                    title={t("Navigation.Services.ServicesContent.InlandTransportLink.linkTitle")}
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink
                      className={clsx(navigationMenuTriggerStyle(), "m-1")}
                      onClick={handleClose}
                      active={pathname === "/services/inland-transport"}
                    >
                      {t("Navigation.Services.ServicesContent.InlandTransportLink.label")}
                    </NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/land-transport"
                    title={t("Navigation.Services.ServicesContent.LandTransportLink.linkTitle")}
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink
                      className={clsx(navigationMenuTriggerStyle(), "m-1")}
                      onClick={handleClose}
                      active={pathname === "/services/land-transport"}
                    >
                      {t("Navigation.Services.ServicesContent.LandTransportLink.label")}
                    </NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/maritime-transport"
                    title={t("Navigation.Services.ServicesContent.MaritimeTransportLink.linkTitle")}
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink
                      className={clsx(navigationMenuTriggerStyle(), "m-1")}
                      onClick={handleClose}
                      active={pathname === "/services/maritime-transport"}
                    >
                      {t("Navigation.Services.ServicesContent.MaritimeTransportLink.label")}
                    </NavigationMenuLink>
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        )}

        <NavigationMenuItem>
          <Link title={t("Navigation.RealizationsLink.linkTitle")} href="/realizations" legacyBehavior passHref>
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
          <Link
            title={t("Navigation.ContactLink.linkTitle")}
            href={{ pathname: pathname, hash: t("Navigation.ContactLink.link") }}
            legacyBehavior
            passHref
          >
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
