export const normalError =
  "!border-error-light-color focus-within:!border-error-light-color dark:!border-error dark:focus-within:!border-error";

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
    input:
      "h-full peer appearance-none bg-primary-light-color dark:bg-main-color",
    error: `border-[3px] ${normalError}`,
    default:
      "border-[3px] border-accent-light-color dark:border-primary-color focus:border-text-light-color focus-within:border-text-light-color active:border-text-light-color dark:focus:border-secondary-color dark:focus-within:border-secondary-color dark:active:border-secondary-color",
    label:
      "peer-placeholder-shown:bg-transparent peer-focus:bg-primary-light-color dark:peer-focus:bg-main-color peer-placeholder-shown:text-text-light-color/55 dark:peer-placeholder-shown:text-primary-color/40 peer-focus:text-text-light-color/70 dark:peer-focus:text-orange-color/70 peer-[&:not(:placeholder-shown)]:text-text-light-color dark:peer-[&:not(:placeholder-shown)]:text-orange-color text-text-light-color dark:text-primary-color absolute top-[12px] -translate-y-7 transform px-[2px] duration-300 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-7 peer-focus:px-[4px] left-[10px] peer-[&:not(:placeholder-shown)]:bg-primary-light-color dark:peer-[&:not(:placeholder-shown)]:bg-main-color",
  },
  standard: {
    input:
      "peer h-full placeholder-transparent bg-light-color dark:bg-main-color",
    error:
      "border-b-4 !border-b-error-light-color focus:!border-b-error-light-color !border-b-error focus:!border-b-error",
    default:
      "border-b-4 border-b-primary-light-color dark:border-b-primary-color focus:border-b-secondary-light-color focus-within:border-b-secondary-light-color active:border-b-secondary-light-color dark:focus:border-b-secondary-color dark:focus-within:border-b-secondary-color dark:active:border-b-secondary-color",
    label:
      "peer-focus:text-textColor absolute -top-1.5 text-sm text-text-primary-light-color transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm left-[10px]",
  },
  filled: {
    input: "bg-light-color dark:bg-main-color h-full",
    error: `border-[3px] ${normalError}`,
    default:
      "border-[3px] border-primary-light-color dark:border-primary-color focus:border-secondary-light-color focus-within:border-secondary-light-color active:border-secondary-light-color dark:focus:border-secondary-color dark:focus-within:border-secondary-color dark:active:border-secondary-color",
    label: "",
  },
};
