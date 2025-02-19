import { ReactNode } from "react";

// These tags are available
type Tag = "br" | "strong";

type Props = {
  children(tags: Record<Tag, (chunks: ReactNode) => ReactNode>): ReactNode;
};

export default function RichText({ children }: Props) {
  return (
    <>
      {children({
        br: () => <br />,
        strong: (chunks: ReactNode) => <strong className="font-bold">{chunks}</strong>,
      })}
    </>
  );
}
