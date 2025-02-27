import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface ValueCardProps {
  Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  header: string;
  content: string;
}

function ValueCard({ Icon, header, content }: ValueCardProps) {
  return (
    <div className="flex md:flex-col gap-4 justify-start">
      <div className="min-w-6 w-6 h-6 mt-0.5 lg:mt-0">
        <Icon className="stroke-secondary w-full h-full" />
      </div>
      <div>
        <Heading variant="h3" className="mb-2 text-lg xl:text-xl">
          {header}
        </Heading>
        <Paragraph variant="small">{content}</Paragraph>
      </div>
    </div>
  );
}

export default ValueCard;
