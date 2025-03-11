import ContentContainer from "@/components/ContentContainer";
import SectionContainer from "@/components/SectionContainer";
import { Button } from "@/components/ui/button";
import photo from "@/../public/home/krzysztof-pietrusiak.avif";
import Image from "next/image";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { useTranslations } from "next-intl";
import RichText from "@/components/RichText";
import { Mail, Phone } from "lucide-react";

function ContactSection() {
  const tContact = useTranslations("HomePage.ContactSection");
  const tGlobal = useTranslations("Global");

  return (
    <SectionContainer id={tContact("id")} className="bg-slate-50 py-16 lg:py-24 align-middle">
      <ContentContainer>
        <div className="flex flex-col md:flex-row md:px-8 lg:px-0 rounded-lg overflow-hidden bg-white">
          <div className="flex justify-center lg:justify-start items-center py-8 lg:py-0 lg:pl-12 2xl:pl-0 md:basis-2/5">
            <Image
              className="min-w-48 w-48 h-48 rounded-full lg:w-full lg:h-auto 2xl:rounded-none object-fit"
              src={photo}
              width="1024"
              height="1024"
              alt={tContact("altText")}
              sizes="(max-width: 768px) 200px, (max-width: 1280px) 400px, 750px"
              placeholder="blur"
            />
          </div>
          <div className="md:basis-3/5 flex flex-col justify-between px-6 pb-16 md:px-8 md:py-8 lg:px-20 lg:py-20 text-center md:text-left">
            <div>
              <Heading variant="h2">{tContact("header")}</Heading>
              <Paragraph className="mb-8 md:mb-16">
                <RichText>{(tags) => tContact.rich("textContent", tags)}</RichText>
              </Paragraph>
            </div>
            <div>
              <Paragraph className="text-slate-950 font-bold">{tContact("name")}</Paragraph>
              <Paragraph variant="small" className="text-secondary font-semibold mb-8 3xl:mb-12">
                {tContact("title")}
              </Paragraph>
              <div className="flex flex-col items-center sm:justify-center sm:flex-row md:justify-start gap-2 ">
                <Button className="w-full sm:w-auto" asChild>
                  <a
                    title={tGlobal("ContactData.MainPhoneNumber.linkTitle")}
                    href={tGlobal("ContactData.MainPhoneNumber.link")}
                  >
                    <Phone />
                    {tGlobal("ContactData.MainPhoneNumber.label")}
                  </a>
                </Button>
                <Button className="w-full sm:w-auto" asChild>
                  <a
                    title={tGlobal("ContactData.MainEmailAdress.linkTitle")}
                    href={tGlobal("ContactData.MainEmailAdress.link")}
                  >
                    <Mail />
                    {tGlobal("ContactData.MainEmailAdress.label")}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
}

export default ContactSection;
