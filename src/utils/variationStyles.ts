export const normalError =
  "!border-error-light focus-within:!border-error-light dark:!border-error dark:focus-within:!border-error";

interface VariationStyle {
  input: string;
  error: string;
  default: string;
  label: string;
}

interface VariationStyles {
  outline: VariationStyle;
  standard: VariationStyle;
  filled: VariationStyle;
}

export const VARIATION_STYLES: VariationStyles = {
  outline: {
    input: "h-full peer appearance-none bg-light-color dark:bg-main-color",
    error: `border-[3px] ${normalError}`,
    default:
      "border-[3px] border-primary-color-light dark:border-primary-color focus:border-secondary-color-light focus-within:border-secondary-color-light active:border-secondary-color-light dark:focus:border-secondary-color dark:focus-within:border-secondary-color dark:active:border-secondary-color",
    label:
      "peer-placeholder-shown:bg-transparent peer-focus:bg-light-color dark:peer-focus:bg-main-color peer-placeholder-shown:text-primary-color-light/40 dark:peer-placeholder-shown:text-primary-color/40 peer-focus:text-orange-color-light/70 dark:peer-focus:text-orange-color/70 peer-[&:not(:placeholder-shown)]:text-orange-color-light dark:peer-[&:not(:placeholder-shown)]:text-orange-color text-primary-color-light dark:text-primary-color absolute top-[12px] -translate-y-7 transform px-[2px] duration-300 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-7 peer-focus:px-[4px] left-[10px] peer-[&:not(:placeholder-shown)]:bg-light-color dark:peer-[&:not(:placeholder-shown)]:bg-main-color",
  },
  standard: {
    input:
      "peer h-full placeholder-transparent bg-light-color dark:bg-main-color",
    error:
      "border-b-4 !border-b-error-light focus:!border-b-error-light !border-b-error focus:!border-b-error",
    default:
      "border-b-4 border-b-primary-color-light dark:border-b-primary-color focus:border-b-secondary-color-light focus-within:border-b-secondary-color-light active:border-b-secondary-color-light dark:focus:border-b-secondary-color dark:focus-within:border-b-secondary-color dark:active:border-b-secondary-color",
    label:
      "peer-focus:text-textColor absolute -top-1.5 text-sm text-text-primary-color-light transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm left-[10px]",
  },
  filled: {
    input: "bg-light-color dark:bg-main-color h-full",
    error: `border-[3px] ${normalError}`,
    default:
      "border-[3px] border-primary-color-light dark:border-primary-color focus:border-secondary-color-light focus-within:border-secondary-color-light active:border-secondary-color-light dark:focus:border-secondary-color dark:focus-within:border-secondary-color dark:active:border-secondary-color",
    label: "",
  },
};
