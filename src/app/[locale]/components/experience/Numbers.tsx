import ContentContainer from "@/components/ContentContainer";
import { useTranslations } from "next-intl";

function Numbers() {
  const t = useTranslations("HomePage.ExperienceSection.ExperienceStats");
  const nubersData = [
    { value: t("Transports.value"), label: t("Transports.label") },
    { value: t("Years.value"), label: t("Years.label") },
    { value: t("Value.value"), label: t("Value.label") },
  ];
  return (
    <ContentContainer className="flex flex-col lg:flex-row  lg:gap-12">
      {nubersData.map((el) => (
        <div key={el.label} className="basis-1/3 text-center py-12 border-y border-slate-600">
          <div className="text-white text-7xl mb-3 font-semibold">{el.value}</div>
          <p className="text-xl font-medium">{el.label}</p>
        </div>
      ))}
    </ContentContainer>
  );
}

export default Numbers;
