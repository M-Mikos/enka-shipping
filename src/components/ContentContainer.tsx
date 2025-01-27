import { ReactNode } from "react";

interface ContentContainerProps {
  children: ReactNode;
}

export default function ContentContainer({ children }: ContentContainerProps) {
  return <div className="w-full">{children}</div>;
}
