export const normalError =
  "!border-error-light-color focus-within:!border-error-light-color dark:!border-error-dark-color dark:focus-within:!border-error-dark-color";

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
      "h-full peer appearance-none bg-primary-light-color dark:bg-primary-dark-color",
    error: `border-[3px] ${normalError}`,
    default:
      "border-[3px] border-accent-light-color dark:border-accent-dark-color focus:border-text-light-color focus-within:border-text-light-color active:border-text-light-color dark:focus:border-text-dark-color  dark:focus-within:border-text-dark-color  dark:active:border-text-dark-color ",
    label:
      "peer-placeholder-shown:bg-transparent peer-focus:bg-secondary-light-color dark:peer-focus:bg-secondary-dark-color peer-placeholder-shown:text-text-light-color/55 dark:peer-placeholder-shown:text-text-dark-color/55 peer-focus:text-text-light-color/70 dark:peer-focus:text-text-dark-color/70 peer-[&:not(:placeholder-shown)]:text-text-light-color dark:peer-[&:not(:placeholder-shown)]:text-text-dark-color text-text-light-color dark:text-text-dark-color absolute top-[12px] -translate-y-7 transform px-[2px] duration-300 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-7 peer-focus:px-[4px] left-[10px] peer-[&:not(:placeholder-shown)]:bg-secondary-light-color dark:peer-[&:not(:placeholder-shown)]:bg-secondary-dark-color",
  },
  standard: {
    input:
      "peer h-full placeholder-transparent bg-primary-light-color dark:bg-primary-dark-color",
    error:
      "border-b-4 !border-b-error-light-color focus:!border-b-error-light-color dark:!border-b-error-dark-color dark:focus:!border-b-error-dark-color",
    default:
      "border-b-4 border-b-accent-light-color dark:border-b-accent-dark-color focus:border-b-secondary-light-color focus-within:border-b-secondary-light-color active:border-b-secondary-light-color dark:focus:border-b-secondary-dark-color dark:focus-within:border-b-secondary-dark-color dark:active:border-b-secondary-dark-color",
    label:
      "peer-focus:text-text-light-color dark:peer-focus:text-text-dark-color absolute -top-1.5 text-sm text-primary-light-color dark:text-primary-dark-color transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm left-[10px]",
  },
  filled: {
    input: "bg-primary-light-color dark:bg-primary-dark-color h-full",
    error: `border-[3px] ${normalError}`,
    default:
      "border-[3px] border-primary-light-color dark:border-primary-dark-color focus:border-secondary-light-color focus-within:border-secondary-light-color active:border-secondary-light-color dark:focus:border-secondary-dark-color dark:focus-within:border-secondary-dark-color dark:active:border-secondary-dark-color",
    label: "",
  },
};
