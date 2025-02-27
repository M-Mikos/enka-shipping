import { CarouselItem } from "@/components/ui/carousel";
import { Paragraph } from "@/components/ui/paragraph";

function TestimonialItem() {
  return (
    <CarouselItem className="flex items-center h-64 justify-center">
      <blockquote className="w-4xl">
        <Paragraph variant="large" className="text-slate-950 mb-12">
          Lorem ipsum
        </Paragraph>
        <footer>
          <Paragraph variant="small" className="font-bold text-slate-950">
            Piotr Pogorzelski
          </Paragraph>
          <Paragraph variant="small">CEO of The Company</Paragraph>
        </footer>
      </blockquote>
    </CarouselItem>
  );
}

export default TestimonialItem;
