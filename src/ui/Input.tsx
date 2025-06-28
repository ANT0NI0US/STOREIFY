import React, { useState, ReactElement } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa6";
import { SlCloudUpload } from "react-icons/sl";
import { normalError, VARIATION_STYLES } from "@/utils/variationStyles";
import { Label } from "./Label";
import { Error } from "./Error";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  error?: string;
  Icon?: ReactElement;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  fileName?: string;
  disabled?: boolean;
  label?: string;
  variation?: keyof typeof VARIATION_STYLES;
}

export default function Input({
  type = "text",
  name,
  fileName,
  label,
  error,
  placeholder,
  Icon,
  register,
  disabled,
  variation = "outline",
  ...rest
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  const styles = VARIATION_STYLES[variation];
  const errorStyles = error ? styles.error : styles.default;

  return (
    <div className="w-full">
      {label && type !== "file" && variation === "filled" && (
        <Label htmlFor={fileName || name} text={label} />
      )}

      <div
        className={`relative ${
          type !== "file"
            ? `z-10 flex h-[60px] items-center rounded-md transition-all duration-300 ${errorStyles}`
            : ""
        }`}
      >
        <input
          id={fileName || name}
          type={showPassword ? "text" : type}
          placeholder={!label || variation === "filled" ? placeholder : " "}
          className={`input ${disabled ? "!bg-primary-light-color dark:!bg-primary-dark-color cursor-not-allowed" : ""} ${
            styles.input
          } ${type === "file" ? "hidden" : ""} ${
            !Icon && type !== "password"
              ? "rounded-[1px]"
              : "rounded-tl-[1px] rounded-bl-[1px]"
          }`}
          disabled={disabled}
          {...(register ? register : {})}
          {...rest}
        />

        {Icon && type !== "file" && type !== "password" && (
          <div
            className={`flexCenter bg-primary-light-color text-text-light-color dark:bg-primary-dark-color dark:text-text-dark-color h-full w-[40px] rounded-tr-[1px] rounded-br-[1px] text-2xl ${disabled ? "bg-disabled cursor-not-allowed" : ""}`}
          >
            {Icon}
          </div>
        )}

        {type === "password" && (
          <button
            type="button"
            className="text-text-light-color dark:text-text-dark-color flexCenter bg-primary-light-color dark:bg-primary-dark-color h-full w-[40px] rounded-tr-[1px] rounded-br-[1px] text-2xl"
            onClick={toggleShowPassword}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <FaRegEyeSlash /> : <MdOutlineRemoveRedEye />}
          </button>
        )}

        {label && type !== "file" && variation !== "filled" && (
          <label
            htmlFor={fileName || name}
            className={`${
              disabled ? "cursor-not-allowed" : ""
            } ${styles.label}`}
          >
            {label}
            {error && (
              <span className="text-error-light-color dark:text-error-dark-color">
                *
              </span>
            )}
          </label>
        )}
      </div>

      {type === "file" && (
        <label
          className={`bg-secondary-light-color text-text-light-color border-text-light-color dark:bg-secondary-dark-color dark:text-text-dark-color dark:border-text-dark-color flex h-40 w-full flex-col items-center justify-center rounded-md border-4 border-dashed p-5 text-center transition-all duration-300 ${
            disabled
              ? "!bg-primary-light-color dark:!bg-primary-dark-color cursor-not-allowed"
              : "hover:bg-text-light-color hover:text-secondary-light-color hover:border-secondary-light-color dark:hover:bg-text-dark-color dark:hover:text-secondary-dark-color dark:hover:border-secondary-dark-color cursor-pointer"
          } ${error ? `${normalError}` : ""}`}
          onClick={() => {
            if (fileName) {
              document.getElementById(fileName)?.click();
            }
          }}
        >
          <SlCloudUpload size={100} />
          <span className="font-bold uppercase">{fileName}</span>
        </label>
      )}

      <Error message={error} />
    </div>
  );
}
