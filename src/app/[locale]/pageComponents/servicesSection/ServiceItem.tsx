import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface ServiceItemProps {
  title: string;
  subtitle: string;
  linkTitleAttribute: string;
  image: string | StaticImport;
  href: string;
}

function ServiceItem({ title, subtitle, linkTitleAttribute, image, href }: ServiceItemProps) {
  return (
    <Link href={href} title={linkTitleAttribute}>
      <article className="group relative flex flex-col justify-between p-9 h-48 sm:h-64 lg:h-[40rem]">
        <div className="w-full flex justify-end">
          <ArrowUpRight className="stroke-primary" />
        </div>
        <div className="lg:w-56">
          <h3 className="text-white text-2xl lg:text-3xl font-semibold mb-4">{title}</h3>
          <p className=" xl:text-base text-white">{subtitle}</p>
        </div>
        <div className="absolute inset-0 w-full h-full -z-1 transition duration-200 bg-white opacity-0 group-hover:opacity-10"></div>
        <Image
          className="absolute inset-0 w-full h-full object-cover -z-2"
          src={image}
          width="1536"
          height="1536"
          alt=""
        />
      </article>
    </Link>
  );
}

export default ServiceItem;
