import { ReactNode } from "react";

interface GridContainerProps {
  children: ReactNode;
  Styles?: string;
}

export default function GridContainer({
  children,
  Styles = "",
}: GridContainerProps) {
  return (
    <div
      className={`xs:grid xs:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] flex flex-col gap-4 md:gap-6 ${Styles}`}
    >
      {children}
    </div>
  );
}
