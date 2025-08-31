import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  Styles?: string;
}

export default function Container({ children, Styles = "" }: ContainerProps) {
  return (
    <div className={`mx-auto h-full w-[90%] max-w-[1400px] md:w-5/6 ${Styles}`}>
      {children}
    </div>
  );
}
