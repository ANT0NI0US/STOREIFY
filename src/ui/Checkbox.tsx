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
        className="peer border-primary-color-light dark:border-primary-color checked:bg-secondary-color-light dark:checked:bg-secondary-color relative size-5 shrink-0 cursor-pointer appearance-none rounded border-2"
        {...(register ? register : {})}
      />
      <svg
        className="text-primary-color-light dark:text-primary-color pointer-events-none invisible absolute top-1 left-0.5 size-4 peer-checked:visible"
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
