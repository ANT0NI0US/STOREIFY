interface infoProps {
  text?: string | number;
  value?: string;
}

export default function Information({ text, value }: infoProps) {
  return (
    <div className="bg-accent-light-color dark:bg-secondary-color flex flex-wrap items-center gap-1 rounded-md px-3 py-4 break-all shadow-md">
      {text && <p className="text-lg font-semibold tracking-wide">{text}: </p>}
      {value && <span>{value}</span>}
    </div>
  );
}
