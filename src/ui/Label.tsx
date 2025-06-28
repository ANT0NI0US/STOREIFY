interface LabelProps {
  htmlFor?: string;
  text?: string;
}

export function Label({ htmlFor, text }: LabelProps) {
  if (!text) return null;
  return (
    <label
      htmlFor={htmlFor}
      className="block ps-1 text-sm font-bold tracking-wider uppercase"
    >
      {text}
    </label>
  );
}
