import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

interface ServiceValueProps {
  messages: {
    title: string;
    textContent: string;
  };
}

function ServiceValue({ messages }: ServiceValueProps) {
  return (
    <div>
      <Heading variant="h3">{messages.title}</Heading>
      <Paragraph variant="small">{messages.textContent}</Paragraph>
    </div>
  );
}

export default ServiceValue;
