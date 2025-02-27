import { ReactNode } from "react";

interface RegionProps {
  region: string;
  children: ReactNode;
}

// The styles responsible for bi-directional hover effect connection between MapPin and Region list item has been hardcoded in global.css file due to Tailwind v4 limitations (no Safelist configuration available).

function Region({ region, children }: RegionProps) {
  return (
    <li data-region={region} className={`basis-1/2 flex gap-4 hover:text-primary hover:underline`}>
      {children}
    </li>
  );
}

export default Region;
