import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import clsx from "clsx";

interface ContactButtonProps {
  className?: string;
}

function ContactButton({ className }: ContactButtonProps) {
  const t = useTranslations("Global");

  return (
    <Button variant="outline" className={clsx(className, "text-xs sm:text-sm")} asChild>
      <a title={t("ContactData.MainEmailAdress.linkTitle")} href={t("ContactData.MainEmailAdress.link")}>
        <Mail />
        {t("ContactData.MainEmailAdress.label")}
      </a>
    </Button>
  );
}

export default ContactButton;
