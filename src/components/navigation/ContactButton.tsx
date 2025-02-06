import { useTranslations } from "next-intl";
import { Button } from "../ui/button";

function ContactButton() {
  const t = useTranslations("Global");

  return (
    <Button asChild>
      <a title={t("ContactData.mainPhoneNumberLinkTitleAttribute")} href={t("ContactData.mainPhoneNumberLink")}>
        {t("ContactData.mainPhoneNumberLabel")}
      </a>
    </Button>
  );
}

export default ContactButton;
