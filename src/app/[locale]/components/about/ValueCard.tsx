import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface ValueCardProps {
  Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  header: string;
  content: string;
}

function ValueCard({ Icon, header, content }: ValueCardProps) {
  return (
    <div className="flex lg:flex-col gap-4 justify-start">
      <div className="min-w-8 lg:w-8 lg:h-8">
        <Icon className="stroke-secondary w-full h-full" />
      </div>
      <div>
        <h3 className="mb-2 text-lg font-semibold">{header}</h3>
        <p className="text-slate-600">{content}</p>
      </div>
    </div>
  );
}

export default ValueCard;
