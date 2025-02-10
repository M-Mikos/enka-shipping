import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { Phone } from "lucide-react";

function ContactButton() {
  const t = useTranslations("Global");

  return (
    <Button variant="outline" asChild>
      <a title={t("ContactData.mainPhoneNumberLinkTitleAttribute")} href={t("ContactData.mainPhoneNumberLink")}>
        <Phone />
        {t("ContactData.mainPhoneNumberLabel")}
      </a>
    </Button>
  );
}

export default ContactButton;
