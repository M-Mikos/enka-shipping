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
    <SectionContainer className="bg-slate-50 py-36 align-middle">
      <ContentContainer className="flex rounded-lg overflow-hidden">
        <div className="basis-2/5">
          <Image src={photo} width="1024" height="1024" alt={tContact("altText")} />
        </div>
        <div className="basis-3/5 flex flex-col justify-between p-20 bg-white">
          <div>
            <Heading variant="h2">{tContact("header")}</Heading>
            <Paragraph>
              <RichText>{(tags) => tContact.rich("textContent", tags)}</RichText>
            </Paragraph>
          </div>
          <div>
            <Paragraph className="text-slate-950 font-bold">{tContact("name")}</Paragraph>
            <Paragraph variant="small" className="text-secondary font-semibold mb-4">
              {tContact("title")}
            </Paragraph>
            <div className="flex gap-2">
              <Button asChild>
                <a
                  title={tGlobal("ContactData.MainPhoneNumber.linkTitle")}
                  href={tGlobal("ContactData.MainPhoneNumber.link")}
                >
                  <Phone />
                  {tGlobal("ContactData.MainPhoneNumber.label")}
                </a>
              </Button>
              <Button asChild>
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
      </ContentContainer>
    </SectionContainer>
  );
}

export default ContactSection;
