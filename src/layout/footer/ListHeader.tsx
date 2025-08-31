interface HeaderProps {
  title: string;
}

export default function ListHeader({ title }: HeaderProps) {
  return (
    <h4 className="mb-2 text-base font-extrabold tracking-wider uppercase sm:mb-0 sm:text-xl">
      {title}
    </h4>
  );
}
