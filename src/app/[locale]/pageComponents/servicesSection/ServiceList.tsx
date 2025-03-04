"use client";

import { useState } from "react";
import ServiceItem from "./ServiceItem";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import clsx from "clsx";

interface servicesProps {
  services: {
    title: string;
    subtitle: string;
    linkTitleAttribute: string;
    image: string | StaticImport;
    hash: string;
  }[];
}

function ServiceList({ services }: servicesProps) {
  const [highlightedItem, setHighlightedItem] = useState<number>(0);

  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap xl:flex-nowrap w-full gap-2">
      {services.map((service, i) => (
        <div
          className={clsx(
            "bg-slate-600 transform duration-200 ease-in-out rounded-lg overflow-hidden sm:basis-[calc(50%-0.25rem)]",
            {
              "xl:basis-4/13": highlightedItem === i,
              "xl:basis-3/13": highlightedItem !== i,
            }
          )}
          key={service.title}
          onMouseEnter={() => setHighlightedItem(i)}
          role="button"
        >
          <ServiceItem
            title={service.title}
            subtitle={service.subtitle}
            linkTitleAttribute={service.linkTitleAttribute}
            hash={service.hash}
            image={service.image}
          />
        </div>
      ))}
    </div>
  );
}

export default ServiceList;
