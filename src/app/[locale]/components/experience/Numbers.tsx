import ContentContainer from "@/components/ContentContainer";
import { useTranslations } from "next-intl";

function Numbers() {
  const t = useTranslations("HomePage.ExperienceSection.ExperienceStats");
  return (
    <ContentContainer className="flex flex-col lg:flex-row gap-6 lg:gap-12">
      <div className="basis-1/3">
        <div>{t("Transports.value")}</div>
        <p>{t("Transports.label")}</p>
      </div>
      <div className="basis-1/3">
        {" "}
        <div>{t("Years.value")}</div>
        <p>{t("Years.label")}</p>
      </div>
      <div className="basis-1/3">
        {" "}
        <div>{t("Value.value")}</div>
        <p>{t("Value.label")}</p>
      </div>
    </ContentContainer>
  );
}

export default Numbers;
