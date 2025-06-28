import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { Label } from "./Label";
import { Error } from "./Error";
import { VARIATION_STYLES } from "@/utils/variationStyles";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  Rows?: number;
  disabled?: boolean;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  variation?: keyof typeof VARIATION_STYLES;
}

export default function TextArea({
  name,
  label,
  error,
  Rows = 4,
  register,
  disabled,
  placeholder,
  variation = "outline",
  ...rest
}: TextAreaProps) {
  const styles = VARIATION_STYLES[variation];
  const errorStyles = error ? styles.error : styles.default;
  return (
    <div className="relative w-full">
      {label && variation === "filled" && <Label htmlFor={name} text={label} />}
      <textarea
        id={name}
        rows={Rows}
        className={`input ${disabled ? "!bg-primary-light-color dark:!bg-light-color cursor-not-allowed" : ""} ${styles.input} ${errorStyles} resize-none rounded-md`}
        placeholder={!label || variation === "filled" ? placeholder : " "}
        disabled={disabled}
        {...(register ? register : {})}
        {...rest}
      />

      {label && variation !== "filled" && (
        <label
          htmlFor={name}
          className={`${disabled ? "cursor-not-allowed" : ""} ${styles.label}`}
        >
          {label}
          {error && (
            <span className="text-error-light-color dark:text-error"> *</span>
          )}
        </label>
      )}
      <Error message={error} />
    </div>
  );
}
