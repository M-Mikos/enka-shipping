import ContentContainer from "@/components/ContentContainer";
import SectionContainer from "@/components/SectionContainer";
import { Paragraph } from "@/components/ui/paragraph";
import { ArrowRight, CheckCircle2Icon } from "lucide-react";
import ValueCard from "@/components/ValueCard";
import { Heading } from "@/components/ui/heading";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
    button: {
      link: string;
      linkTitle: string;
      label: string;
    };
  };
  image: string | StaticImageData;
  priority: boolean;
}

function ServiceSection({ messages, image, priority }: ServiceSectionProps) {
  return (
    <SectionContainer id={messages.id} className="py-16 lg:py-24">
      <ContentContainer className="lg:grid lg:grid-cols-[1fr_1fr] lg:grid-rows-[auto_1fr_auto_auto] lg:gap-x-16 3xl:gap-x-24">
        <div className="lg:row-[1/4] lg:col-[2/3] mb-8 lg:mb-0">
          <Image
            className="w-full h-auto rounded-lg"
            src={image}
            width={1500}
            height={1000}
            alt={messages.altText}
            placeholder="blur"
            priority={priority}
          />
        </div>
        <Heading className="lg:row-[1/2] lg:col-[1/2]">{messages.title}</Heading>
        <Paragraph className="lg:row-[2/3] lg:col-[1/2]">{messages.textContent}</Paragraph>
        <div className="lg:row-[4/5] lg:col-[1/3] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 lg:gap-16 mt-16 lg:py-16 lg:border-t">
          {Object.values(messages.values).map((value) => (
            <ValueCard key={value.title} Icon={CheckCircle2Icon} header={value.title} content={value.textContent} />
          ))}
        </div>
        <div className="text-center lg:text-left lg:col-[1/2] lg:row-[3/4] mt-12">
          <Button variant={"outline"} asChild>
            <Link title={messages.button.linkTitle} href={{ hash: messages.button.link }}>
              {messages.button.label}
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
}

export default ServiceSection;
