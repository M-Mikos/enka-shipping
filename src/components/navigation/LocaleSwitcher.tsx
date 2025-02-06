import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useLocale, useTranslations } from "next-intl";
import { routing, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { useTransition } from "react";

function LocaleSwitcher() {
  const t = useTranslations("Global");
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
    <Select onValueChange={onSelectChange} defaultValue={locale} disabled={isPending}>
      <div className="w-18">
        <SelectTrigger title={t("LocaleSwitcher.label")}>
          <SelectValue className="text-slate-600" placeholder={t("LocaleSwitcher.locale", { locale: locale })} />
        </SelectTrigger>
      </div>
      <SelectContent>
        {routing.locales.map((cur) => (
          <SelectItem key={cur} value={cur}>
            {t("LocaleSwitcher.locale", { locale: cur })}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default LocaleSwitcher;
