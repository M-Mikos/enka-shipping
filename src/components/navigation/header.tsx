"use client";

import { useLocale, useTranslations } from "next-intl";
import ContentContainer from "../ContentContainer";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import EnkaLogo from "./EnkaLogo";
import { Button } from "../ui/button";
import { Link, routing, usePathname, useRouter } from "@/i18n/routing";
import { useTransition } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useParams } from "next/navigation";

export default function Header() {
  const tGlobal = useTranslations("Global");
  const tHeader = useTranslations("Header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  function onSelectChange(value: string) {
    const nextLocale = value;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <header>
      <ContentContainer>
        <div className="flex justify-between items-center h-20 py-4">
          <div className="w-32">
            <EnkaLogo />
          </div>
          <div className="flex items-center gap-12">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                    <Link title={tHeader("Navigation.ServicesLink.titleAttribute")} href="/services">
                      {tHeader("Navigation.ServicesLink.label")}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                    <Link title={tHeader("Navigation.RealizationsLink.titleAttribute")} href="/realizations">
                      {tHeader("Navigation.RealizationsLink.label")}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                    <Link title={tHeader("Navigation.ContactLink.titleAttribute")} href="/#contact-section">
                      {tHeader("Navigation.ContactLink.label")}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Button asChild>
              <a
                title={tGlobal("ContactData.mainPhoneNumberLinkTitleAttribute")}
                href={tGlobal("ContactData.mainPhoneNumberLink")}
              >
                {tGlobal("ContactData.mainPhoneNumberLabel")}
              </a>
            </Button>
            <Select onValueChange={onSelectChange} defaultValue={locale} disabled={isPending}>
              <SelectTrigger title={tGlobal("LocaleSwitcher.label")} className="flex gap-2">
                <SelectValue
                  className="text-slate-600"
                  placeholder={tGlobal("LocaleSwitcher.locale", { locale: locale })}
                />
              </SelectTrigger>
              <SelectContent>
                {routing.locales.map((cur) => (
                  <SelectItem key={cur} value={cur}>
                    {tGlobal("LocaleSwitcher.locale", { locale: cur })}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </ContentContainer>
      <nav></nav>
    </header>
  );
}
