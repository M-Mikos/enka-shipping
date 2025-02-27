import ContentContainer from "@/components/ContentContainer";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
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
          <Heading className="mb-3 font-semibold" variant="h1" shade="light" asChild>
            <div>{el.value}</div>
          </Heading>
          <Paragraph variant="large" shade="light">
            {el.label}
          </Paragraph>
        </div>
      ))}
    </ContentContainer>
  );
}

export default Numbers;
