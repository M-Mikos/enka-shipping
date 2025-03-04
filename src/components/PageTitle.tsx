import ContentContainer from "./ContentContainer";
import SectionContainer from "./SectionContainer";
import { Heading } from "./ui/heading";
import { Paragraph } from "./ui/paragraph";

interface PageTitleProps {
  messages: {
    title: string;
    subtitle?: string;
  };
}

function PageTitle({ messages }: PageTitleProps) {
  return (
    <SectionContainer className="bg-slate-50">
      <ContentContainer className="py-16 lg:py-24 lg:min-h-64">
        <Heading variant="h1">{messages.title}</Heading>
        {messages.subtitle && <Paragraph variant="large">{messages.subtitle}</Paragraph>}
      </ContentContainer>
    </SectionContainer>
  );
}

export default PageTitle;
