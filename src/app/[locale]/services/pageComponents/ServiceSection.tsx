import ContentContainer from "@/components/ContentContainer";
import SectionContainer from "@/components/SectionContainer";
import { Paragraph } from "@/components/ui/paragraph";
import { CheckCircle2Icon } from "lucide-react";
import ValueCard from "@/components/ValueCard";
import { Heading } from "@/components/ui/heading";
import Image, { StaticImageData } from "next/image";

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
  image: string | StaticImageData;
}

function ServiceSection({ messages, image }: ServiceSectionProps) {
  return (
    <SectionContainer id={messages.id} className="py-16 lg:py-24">
      <ContentContainer className="lg:grid lg:grid-cols-[1fr_1fr] lg:grid-rows-[auto_1fr_auto] lg:gap-x-16 3xl:gap-x-24">
        <Heading className="lg:row-[1/2] lg:col-[1/2]">{messages.title}</Heading>
        <div className="lg:row-[1/3] lg:col-[2/3]">
          <Image
            className="w-full h-auto rounded-lg"
            src={image}
            width={1500}
            height={1000}
            alt={messages.altText}
            placeholder="blur"
          />
        </div>
        <Paragraph className="lg:row-[2/3] lg:col-[1/2]">{messages.textContent}</Paragraph>
        <div className="lg:row-[3/4] lg:col-[1/3] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 lg:gap-16 mt-16">
          {Object.values(messages.values).map((value) => (
            <ValueCard key={value.title} Icon={CheckCircle2Icon} header={value.title} content={value.textContent} />
          ))}
        </div>
      </ContentContainer>
    </SectionContainer>
  );
}

export default ServiceSection;
