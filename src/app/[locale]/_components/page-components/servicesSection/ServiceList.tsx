"use client";

import { useState } from "react";
import ServiceItem from "./ServiceItem";
import clsx from "clsx";
import { ServiceItemProps } from "./types";

function ServiceList({ services }: { services: ServiceItemProps[] }) {
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
            link={service.link}
            image={service.image}
            icon={service.icon}
          />
        </div>
      ))}
    </div>
  );
}

export default ServiceList;
