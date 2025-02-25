import ContentContainer from "@/components/ContentContainer";
import SectionContainer from "@/components/SectionContainer";
import { Button } from "@/components/ui/button";
import photo from "@/../public/home/krzysztof-pietrusiak.avif";
import Image from "next/image";

function ContactSection() {
  return (
    <SectionContainer className="bg-slate-50 py-36 align-middle">
      <ContentContainer className="flex rounded-lg overflow-hidden">
        <div className="basis-1/3">
          <Image src={photo} width="1024" height="1024" alt="alt" />
        </div>
        <div className="basis-2/3 flex flex-col justify-between p-20 bg-white">
          <div>
            <h2>test</h2>
            <p>test </p>
          </div>
          <div>
            <p className="flex gap-1">test</p>
            <p className="mb-6">test</p>
            <div className="flex gap-1">
              <Button asChild>
                <a>tel</a>
              </Button>
              <Button asChild>
                <a>mail</a>
              </Button>
            </div>
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
}

export default ContactSection;
