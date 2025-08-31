interface InfoTitleProps {
  title: string;
  subTitle: string;
}

export default function InformationTitle({ title, subTitle }: InfoTitleProps) {
  return (
    <div className="mb-2.5 flex w-full flex-wrap items-center gap-1">
      <h2 className="text-lg font-semibold tracking-[0.05em] uppercase">
        {title}
      </h2>
      <span className="text-sm font-black">{subTitle}</span>
    </div>
  );
}
