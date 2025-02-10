import { ReactNode } from "react";

interface ContentContainerProps {
  children: ReactNode;
}

export default function ContentContainer({ children }: ContentContainerProps) {
  return <div className="mx-auto px-3 lg:px-6 w-full lg:container">{children}</div>;
}
