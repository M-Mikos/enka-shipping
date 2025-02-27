import { CarouselItem } from "@/components/ui/carousel";
import { Paragraph } from "@/components/ui/paragraph";

interface TestimonialItemProps {
  content: string;
  author: string;
  title: string;
}

function TestimonialItem({ content, author, title }: TestimonialItemProps) {
  return (
    <CarouselItem className="flex items-center h-64 justify-center">
      <blockquote className="w-3xl px-6">
        <Paragraph variant="large" className="text-slate-950 mb-12">
          {content}
        </Paragraph>
        <footer>
          <Paragraph variant="small" className="font-bold text-slate-950">
            {author}
          </Paragraph>
          <Paragraph variant="small">{title}</Paragraph>
        </footer>
      </blockquote>
    </CarouselItem>
  );
}

export default TestimonialItem;
