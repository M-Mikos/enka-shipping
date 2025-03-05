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
    <SectionContainer>
      <ContentContainer>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16 border-b-2 border-slate-950 py-16 lg:py-24 lg:min-h-72 ">
          <Heading className="lg:basis-1/2 mb-0 3xl:mb-0" variant="h1">
            {messages.title}
          </Heading>
          {messages.subtitle && (
            <Paragraph className="lg:basis-1/2" variant="large">
              {messages.subtitle}
            </Paragraph>
          )}
        </div>
      </ContentContainer>
    </SectionContainer>
  );
}

export default PageTitle;
