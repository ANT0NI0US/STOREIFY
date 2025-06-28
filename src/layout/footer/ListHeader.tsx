interface headerProps {
  title: string;
}

export default function ListHeader({ title }: headerProps) {
  return (
    <h4 className="mb-2 text-base font-extrabold tracking-wider uppercase sm:mb-0 sm:text-xl">
      {title}
    </h4>
  );
}
