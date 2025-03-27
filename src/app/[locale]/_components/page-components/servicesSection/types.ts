import { routing } from "@/i18n/routing";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface ServiceItemProps {
  title: string;
  subtitle: string;
  linkTitleAttribute: string;
  image: string | StaticImport;
  icon: string | StaticImport;
  link: keyof typeof routing.pathnames;
}
