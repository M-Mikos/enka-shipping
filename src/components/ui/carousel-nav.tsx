import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./button";
import { CarouselApi } from "./carousel";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useTranslations } from "next-intl";

interface CarouselNavProps {
  api: CarouselApi;
  current: number;
  count: number;
}

function CarouselNav({ api, current, count }: CarouselNavProps) {
  const t = useTranslations("Global");

  return (
    <div className="flex w-full h-14 justify-between items-center">
      <Button
        className="w-8 h-8 p-0"
        variant={"ghost"}
        disabled={!api?.canScrollPrev()}
        onClick={() => api?.scrollPrev()}
      >
        <ArrowLeft />
        <VisuallyHidden>{t("CarouselControls.prevButtonLabel")}</VisuallyHidden>
      </Button>
      <div className="relative w-20 h-0.25 bg-slate-300 rounded-full">
        <div
          className={`absolute h-full duration-700 ease-in-out bg-slate-600 `}
          style={{ width: (current / count) * 100 + "%" }}
        ></div>
      </div>
      <Button
        className="w-8 h-8 p-0"
        variant={"ghost"}
        disabled={!api?.canScrollNext()}
        onClick={() => api?.scrollNext()}
      >
        <ArrowRight />
        <VisuallyHidden>{t("CarouselControls.nextButtonLabel")}</VisuallyHidden>
      </Button>
    </div>
  );
}

export default CarouselNav;
