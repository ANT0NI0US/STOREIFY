// import { ReactNode } from "react";
// import { Link } from "react-router-dom";

// interface ButtonProps {
//   children: ReactNode;
//   type?: "button" | "submit" | "reset";
//   onClick?: () => void;
//   variation?: "primary" | "secondary" | "delete" | "danger";
//   Font?: string;
//   disabled?: boolean;
//   loading?: boolean;
//   ArialLabel: string;
//   To?: string;
// }

// export default function Button({
//   children,
//   type = "button",
//   onClick,
//   variation = "primary",
//   Font,
//   disabled,
//   loading,
//   ArialLabel,
//   To,
// }: ButtonProps) {
//   const base = `focus:outline-hidden w-full rounded-md border relative flexCenter gap-1
//    transition-all h-[45px] font-bold
//   ${(disabled || loading) && "cursor-not-allowed border-main-color bg-[#0000004d]! text-main-color! dark:border-light-color dark:bg-[#ffffff59]! dark:text-light-color!"}`;

//   const styles: Record<typeof variation, string> = {
//     primary: `bg-secondary-color-light text-orange-color-light border-orange-color-light
//       dark:bg-secondary-color dark:text-orange-color dark:border-orange-color
//       ${!disabled && !loading && "hover:bg-secondary-color-light/75 dark:hover:bg-secondary-color/75"}`,
//     secondary: `bg-light-color text-primary-color-light border-primary-color-light
//         dark:bg-main-color dark:text-primary-color dark:border-primary-color
//     ${!disabled && !loading && "hover:bg-secondary-color-light hover:text-orange-color-light hover:border-orange-color-light dark:hover:bg-secondary-color dark:hover:text-orange-color dark:hover:border-orange-color"}`,
//     delete: `bg-[#2e7d32] text-light-color border-darkB
//       ${!disabled && !loading && "hover:bg-[#1b5e20]"}`,
//     danger: `bg-white dark:bg-black text-red-400 border-red-400 ${!disabled && !loading && "hover:bg-red-500 hover:text-white dark:hover:bg-red-500 dark:hover:text-white"}`,
//   };

//   if (To)
//     return (
//       <Link
//         to={To}
//         className={`${styles[variation]} ${base} ${Font}`}
//         aria-label={ArialLabel}
//         title={ArialLabel}
//       >
//         {children}
//       </Link>
//     );

//   return (
//     <button
//       onClick={onClick}
//       type={type}
//       disabled={disabled || loading}
//       className={`${styles[variation]} ${base} ${Font}`}
//       aria-label={ArialLabel}
//       title={ArialLabel}
//     >
//       {loading ? (
//         <div className="flexCenter gap-1">
//           <div className="bg-primary-color-light dark:bg-light-color h-3 w-3 animate-bounce rounded-full [animation-delay:-0.3s]"></div>
//           <div className="bg-primary-color-light dark:bg-light-color h-3 w-3 animate-bounce rounded-full [animation-delay:-0.15s]"></div>
//           <div className="bg-primary-color-light dark:bg-light-color h-3 w-3 animate-bounce rounded-full"></div>
//         </div>
//       ) : (
//         children
//       )}
//     </button>
//   );
// }

import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  variation?: "primary" | "secondary" | "delete" | "danger";
  Font?: string;
  disabled?: boolean;
  loading?: boolean;
  ArialLabel: string;
  To?: string;
}

export default function Button({
  children,
  type = "button",
  onClick,
  variation = "primary",
  Font,
  disabled,
  loading,
  ArialLabel,
  To,
}: ButtonProps) {
  const base = `focus:outline-hidden w-full rounded-md border relative flexCenter gap-1
   transition-all h-[45px] font-bold
  ${(disabled || loading) && "cursor-not-allowed border-main-color bg-[#0000004d]! text-main-color! dark:border-light-color dark:bg-[#ffffff59]! dark:text-light-color!"}`;

  const styles: Record<typeof variation, string> = {
    primary: `bg-secondary-color-light text-primary-color-light border-primary-color-light
      dark:bg-secondary-color dark:text-primary-color dark:border-primary-color
      ${!disabled && !loading && "hover:bg-secondary-color-light/75 dark:hover:bg-secondary-color/75"}`,
    secondary: `bg-light-color text-orange-color-light border-orange-color-light
        dark:bg-main-color dark:text-orange-color dark:border-orange-color
    ${!disabled && !loading && "hover:bg-secondary-color-light hover:text-primary-color-light hover:border-primary-color-light dark:hover:bg-secondary-color dark:hover:text-primary-color dark:hover:border-primary-color"}`,
    delete: `bg-[#2e7d32] text-light-color border-darkB
      ${!disabled && !loading && "hover:bg-[#1b5e20]"}`,
    danger: `bg-white dark:bg-black text-red-400 border-red-400 ${!disabled && !loading && "hover:bg-red-500 hover:text-white dark:hover:bg-red-500 dark:hover:text-white"}`,
  };

  if (To)
    return (
      <Link
        to={To}
        className={`${styles[variation]} ${base} ${Font}`}
        aria-label={ArialLabel}
        title={ArialLabel}
      >
        {children}
      </Link>
    );

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled || loading}
      className={`${styles[variation]} ${base} ${Font}`}
      aria-label={ArialLabel}
      title={ArialLabel}
    >
      {loading ? (
        <div className="flexCenter gap-1">
          <div className="bg-primary-color-light dark:bg-light-color h-3 w-3 animate-bounce rounded-full [animation-delay:-0.3s]"></div>
          <div className="bg-primary-color-light dark:bg-light-color h-3 w-3 animate-bounce rounded-full [animation-delay:-0.15s]"></div>
          <div className="bg-primary-color-light dark:bg-light-color h-3 w-3 animate-bounce rounded-full"></div>
        </div>
      ) : (
        children
      )}
    </button>
  );
}
