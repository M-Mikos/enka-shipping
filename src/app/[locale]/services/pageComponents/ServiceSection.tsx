import ContentContainer from "@/components/ContentContainer";
import SectionContainer from "@/components/SectionContainer";
import { Paragraph } from "@/components/ui/paragraph";
import { Heading } from "lucide-react";
import ServiceValue from "./ServiceValue";

interface ServiceSectionProps {
  messages: {
    title: string;
    id: string;
    textContent: string;
    altText: string;
    values: {
      1: {
        title: string;
        textContent: string;
      };
      2: {
        title: string;
        textContent: string;
      };
      3: {
        title: string;
        textContent: string;
      };
      4: {
        title: string;
        textContent: string;
      };
    };
  };
}

function ServiceSection({ messages }: ServiceSectionProps) {
  return (
    <SectionContainer id={messages.id}>
      <ContentContainer>
        <Heading>{messages.title}</Heading>
        <Paragraph>{messages.textContent}</Paragraph>
        {Object.values(messages.values).map((value) => (
          <ServiceValue key={value.title} messages={{ title: value.title, textContent: value.textContent }} />
        ))}
      </ContentContainer>
    </SectionContainer>
  );
}

export default ServiceSection;
