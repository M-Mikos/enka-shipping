import { ReactNode } from "react";

// These tags are available
type Tag = "br" | "strong" | "ul" | "li";

type Props = {
  children(tags: Record<Tag, (chunks: ReactNode) => ReactNode>): ReactNode;
};

export default function RichText({ children }: Props) {
  return (
    <>
      {children({
        br: () => <br />,
        strong: (chunks: ReactNode) => <strong className="font-bold">{chunks}</strong>,
        ul: (chunks: ReactNode) => <ul className="list-disc ml-4 mt-2">{chunks}</ul>,
        li: (chunks: ReactNode) => <li>{chunks}</li>,
      })}
    </>
  );
}
