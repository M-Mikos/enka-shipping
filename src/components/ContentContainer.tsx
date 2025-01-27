import { ReactNode } from "react";

interface ContentContainerProps {
  children: ReactNode;
}

export default function ContentContainer({ children }: ContentContainerProps) {
  return <div className="mx-auto px-6 w-full md:container">{children}</div>;
}
