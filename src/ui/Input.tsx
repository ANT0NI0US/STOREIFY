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
          className={`input ${disabled ? "!bg-primary-color-light dark:!bg-light-color cursor-not-allowed" : ""} ${
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
            className={`flexCenter text-orange-color-light dark:text-orange-color h-full w-[40px] rounded-tr-[1px] rounded-br-[1px] ${disabled ? "bg-disabled cursor-not-allowed" : ""}`}
          >
            {Icon}
          </div>
        )}

        {type === "password" && (
          <button
            type="button"
            className="text-orange-color-light dark:text-orange-color flexCenter bg-light-color dark:bg-main-color h-full w-[40px] rounded-tr-[1px] rounded-br-[1px]"
            onClick={toggleShowPassword}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <FaRegEyeSlash size={25} />
            ) : (
              <MdOutlineRemoveRedEye size={25} />
            )}
          </button>
        )}

        {label && type !== "file" && variation !== "filled" && (
          <label
            htmlFor={fileName || name}
            className={`${
              disabled ? "cursor-not-allowed" : ""
              // : "peer-placeholder-shown:text-primary-color-light/40 dark:peer-placeholder-shown:text-primary-color/40"
            } ${styles.label}`}
          >
            {label}
            {error && (
              <span className="text-error-light dark:text-error"> *</span>
            )}
          </label>
        )}
      </div>

      {type === "file" && (
        <label
          className={`bg-light-color text-orange-color-light border-orange-color-light dark:bg-main-color dark:text-orange-color dark:border-orange-color hover:bg-secondary-color-light flex h-40 w-full flex-col items-center justify-center rounded-md border-4 border-dashed p-5 text-center transition-all duration-300 ${
            disabled
              ? "!bg-primary-color-light dark:!bg-light-color cursor-not-allowed"
              : "hover:text-primary-color-light hover:border-primary-color-light dark:hover:bg-secondary-color dark:hover:text-primary-color dark:hover:border-primary-color cursor-pointer"
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

// import React, { useState, ReactElement } from "react";
// import { UseFormRegisterReturn } from "react-hook-form";
// import { MdOutlineRemoveRedEye } from "react-icons/md";
// import { FaRegEyeSlash } from "react-icons/fa6";
// import { SlCloudUpload } from "react-icons/sl";
// import { Label } from "./Label";
// import { Error } from "./Error";

// interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
//   label?: string;
//   type?: string;
//   error?: string;
//   Icon?: ReactElement;
//   register?: UseFormRegisterReturn;
//   fileName?: string;
//   disabled?: boolean;
// }

// export default function Input({
//   label,
//   name,
//   type = "text",
//   error,
//   Icon,
//   register,
//   fileName,
//   disabled,
//   ...rest
// }: InputProps) {
//   const [showPassword, setShowPassword] = useState(false);

//   const toggleShowPassword = () => setShowPassword((prev) => !prev);

//   return (
//     <div className="relative w-full">
//       <Label htmlFor={fileName || name} text={label} />

//       <div
//         className={`${type !== "file" ? `${error ? "border-[3px] border-[#EE4B2B] dark:border-red-600" : "border-orange-color-light dark:border-orange-color border"} bg-light-color/60 dark:bg-main-color/55 z-10 flex w-full items-center rounded-md transition-all` : ""} ${type === "password" || Icon ? "relative" : ""}`}
//       >
//         <input
//           id={fileName || name}
//           type={showPassword ? "text" : type}
//           className={`input ${type === "file" && "hidden"} ${type === "password" || Icon ? "pr-10" : ""}`}
//           disabled={disabled}
//           {...(register ? register : {})}
//           {...rest}
//         />

//         {Icon && (
//           <div className="flexCenter text-orange-color-light dark:text-orange-color h-[44px] w-[40px]">
//             {Icon}
//           </div>
//         )}

//         {type === "file" && (
//           <label
//             className={`bg-light-color text-orange-color-light border-orange-color-light dark:bg-main-color dark:text-orange-color dark:border-orange-color hover:bg-secondary-color-light flex h-40 w-full flex-col items-center justify-center rounded-md border-4 border-dashed p-5 text-center transition-all duration-300 ${
//               disabled
//                 ? "!bg-primary-color-light dark:!bg-light-color cursor-not-allowed"
//                 : "hover:text-primary-color-light hover:border-primary-color-light dark:hover:bg-secondary-color dark:hover:text-primary-color dark:hover:border-primary-color cursor-pointer"
//             } ${error ? "!border-[#EE4B2B] focus-within:!border-[#EE4B2B] dark:!border-red-600 dark:focus-within:!border-red-600" : ""}`}
//             onClick={() => {
//               if (fileName) {
//                 document.getElementById(fileName)?.click();
//               }
//             }}
//           >
//             <SlCloudUpload size={100} />
//             <span className="font-bold uppercase">{fileName}</span>
//           </label>
//         )}

//         {type === "password" && (
//           <button
//             type="button"
//             className="text-orange-color-light dark:text-orange-color absolute top-[50%] right-[10px] translate-y-[-50%]"
//             onClick={toggleShowPassword}
//             aria-label={showPassword ? "Hide password" : "Show password"}
//           >
//             {showPassword ? (
//               <FaRegEyeSlash size={25} />
//             ) : (
//               <MdOutlineRemoveRedEye size={25} />
//             )}
//           </button>
//         )}
//       </div>

//       <Error message={error} />
//     </div>
//   );
// }
