import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface ContactButtonProps {
  className?: string;
}

function ContactButton({ className }: ContactButtonProps) {
  const t = useTranslations("Global");

  return (
    <Button variant="outline" className={className} asChild>
      <a title={t("ContactData.MainPhoneNumber.linkTitle")} href={t("ContactData.MainPhoneNumber.link")}>
        <Phone />
        {t("ContactData.MainPhoneNumber.label")}
      </a>
    </Button>
  );
}

export default ContactButton;
