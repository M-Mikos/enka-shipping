import { ReactNode } from "react";

interface ContentContainerProps {
  children: ReactNode;
}

export default function ContentContainer({ children }: ContentContainerProps) {
  return <div className="w-full md:w-3xl lg:w-5xl xl:w-7xl 2xl: ">{children}</div>;
}
