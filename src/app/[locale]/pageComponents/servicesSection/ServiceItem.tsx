import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface ServiceItemProps {
  title: string;
  subtitle: string;
  linkTitleAttribute: string;
  image: string | StaticImport;
  hash: string;
}

function ServiceItem({ title, subtitle, linkTitleAttribute, image, hash }: ServiceItemProps) {
  return (
    <Link
      href={{
        pathname: "/services",
        hash: hash,
      }}
      title={linkTitleAttribute}
    >
      <article className="group relative flex flex-col justify-between p-6 2xl:p-8 h-48 sm:h-64 xl:h-[30rem] 3xl:h-[36rem]">
        <div className="w-full flex justify-end">
          <ArrowUpRight className="stroke-primary" />
        </div>
        <div className="lg:w-56">
          <Heading variant="h3" shade="light">
            {title}
          </Heading>
          <Paragraph variant="small" shade="light">
            {subtitle}
          </Paragraph>
        </div>
        <div className="absolute inset-0 w-full h-full -z-1 transition duration-200 bg-white opacity-0 group-hover:opacity-10"></div>
        <Image
          className="absolute inset-0 w-full h-full object-cover -z-2"
          src={image}
          width="1536"
          height="1536"
          alt=""
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
        />
      </article>
    </Link>
  );
}

export default ServiceItem;
