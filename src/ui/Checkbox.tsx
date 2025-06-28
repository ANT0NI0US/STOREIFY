import { UseFormRegisterReturn } from "react-hook-form";

export interface CheckboxProps {
  disabled?: boolean;
  defaultChecked?: boolean;
  id: string;
  label: string;
  register?: UseFormRegisterReturn;
}

export default function Checkbox({
  disabled,
  defaultChecked,
  id,
  label,
  register,
}: CheckboxProps) {
  return (
    <div className="relative flex items-center gap-1.5">
      <input
        id={id}
        type="checkbox"
        disabled={disabled}
        defaultChecked={defaultChecked}
        className="peer border-accent-light-color dark:border-accent-dark-color checked:bg-primary-light-color dark:checked:bg-primary-dark-color relative size-4 shrink-0 cursor-pointer appearance-none rounded border-2 sm:size-5"
        {...(register ? register : {})}
      />
      <svg
        className="text-text-light-color dark:text-text-dark-color pointer-events-none invisible absolute top-1 left-0.5 size-3 peer-checked:visible sm:size-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 13l4 4L19 7" />
      </svg>
      <label htmlFor={id} className="cursor-pointer select-none">
        {label}
      </label>
    </div>
  );
}
