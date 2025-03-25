import ContentContainer from "@/components/ContentContainer";
import RichText from "@/components/RichText";
import SectionContainer from "@/components/SectionContainer";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import ValueCard from "@/components/ValueCard";
import { ArrowRight, CheckCircle2Icon } from "lucide-react";
import { useMessages, useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Messages {
  [key: string]: {
    [key: string]: {
      List: Record<string, { header: string; content: string }>;
    };
  };
}

function OfferItem({
  translationsKey,
  pageKey,
  image,
}: {
  translationsKey: string;
  pageKey: string;
  image: string | StaticImageData;
}) {
  const t = useTranslations(`${pageKey}Page.Offer${translationsKey}`);
  const pageT = useTranslations(`${pageKey}Page`);
  const messages = useMessages() as Messages;
  const listMessages = messages[`${pageKey}Page`][`Offer${translationsKey}`].List;

  const listItems = Object.values(listMessages);

  return (
    <SectionContainer className="py-16 lg:py-24">
      <ContentContainer className="lg:grid lg:grid-cols-[1fr_1fr] lg:grid-rows-[auto_1fr_auto_auto] lg:gap-x-16 3xl:gap-x-24">
        <div className="lg:row-[1/4] lg:col-[2/3] mb-8 lg:mb-0">
          <Image
            className="w-full h-auto rounded-lg"
            src={image}
            width={1200}
            height={600}
            alt={t("altText")}
            sizes="(max-width: 1080px) 100vw, (max-width: 1920px) 640px, 848px"
          />
        </div>
        <Heading className="lg:row-[1/2] lg:col-[1/2]">{t("title")}</Heading>
        <Paragraph className="lg:row-[2/3] lg:col-[1/2] mb-6 lg:mb-8 3xl:mb-12" asChild>
          <div>
            <RichText>{(tags) => t.rich("subtitle", tags)}</RichText>
          </div>
        </Paragraph>
        <div className="lg:row-[4/5] lg:col-[1/3] lg:flex lg:flex-row gap-12 lg:gap-16 mt-16 lg:py-16 lg:border-t">
          {listItems.map((listItem) => (
            <div key={listItem.header} className={`basis-full`}>
              <ValueCard Icon={CheckCircle2Icon} header={listItem.header} content={listItem.content} />
            </div>
          ))}
        </div>
        <div className="text-center lg:text-left lg:col-[1/2] lg:row-[3/4] mt-12">
          <Button variant={"outline"} asChild>
            <Link title={pageT("ContactButton.linkTitle")} href={{ hash: pageT("ContactButton.link") }}>
              {pageT("ContactButton.label")}
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
}

export default OfferItem;
