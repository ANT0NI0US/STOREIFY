import { ReactNode } from "react";
import { Link } from "react-router-dom";

const sizeStyles = {
  small: "px-2 py-1 text-xs sm:text-sm",
  medium: "px-3 py-2 text-sm sm:text-base",
  large: "px-6 py-4 text-lg sm:text-xl",
  actions: "px-3 py-1 !text-xs sm:!text-sm !w-fit",
};

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  variation?: "primary" | "secondary" | "delete" | "danger";
  size?: "small" | "medium" | "large" | "actions";
  Font?: string;
  disabled?: boolean;
  loading?: boolean;
  ArialLabel: string;
  replace?: boolean;
  To?: string;
}

export default function Button({
  children,
  type = "button",
  onClick,
  variation = "primary",
  size = "medium",
  Font,
  disabled,
  loading,
  ArialLabel,
  To,
  replace = false,
}: ButtonProps) {
  const base = `focus:outline-hidden w-full rounded-md border flexCenter gap-1
   transition-all min-h-[40px] font-bold
  ${(disabled || loading) && "cursor-not-allowed border-main-color bg-[#0000004d]! text-main-color! dark:border-light-color dark:bg-[#ffffff59]! dark:text-light-color!"}`;

  const styles: Record<typeof variation, string> = {
    primary: `bg-text-light-color text-secondary-light-color border-text-light-color
      dark:bg-secondary-color dark:text-primary-color dark:border-primary-color
      ${!disabled && !loading && "hover:bg-text-light-color/90 dark:hover:bg-secondary-color/75"}`,
    secondary: `bg-secondary-light-color text-text-light-color border-text-light-color
        dark:bg-main-color dark:text-orange-color dark:border-orange-color
    ${!disabled && !loading && "hover:bg-text-light-color hover:text-secondary-light-color hover:border-text-light-color dark:hover:bg-secondary-color dark:hover:text-primary-color dark:hover:border-primary-color"}`,
    delete: `bg-[#2e7d32] text-light-color border-darkB
      ${!disabled && !loading && "hover:bg-[#1b5e20]"}`,
    danger: `bg-secondary-light-color dark:bg-black text-error-light-color border-error-light-color ${!disabled && !loading && "hover:bg-error-light-color hover:text-secondary-light-color dark:hover:bg-red-500 dark:hover:text-white"}`,
  };

  const combinedClassName = `${base} ${sizeStyles[size]} ${styles[variation]} ${Font}`;

  if (To)
    return (
      <Link
        to={To}
        className={combinedClassName}
        aria-label={ArialLabel}
        title={ArialLabel}
        replace={replace}
      >
        {children}
      </Link>
    );

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled || loading}
      className={combinedClassName}
      aria-label={ArialLabel}
      title={ArialLabel}
    >
      {loading ? (
        <div className="flexCenter gap-1">
          <div className="bg-primary-light-color dark:bg-light-color h-3 w-3 animate-bounce rounded-full [animation-delay:-0.3s]"></div>
          <div className="bg-primary-light-color dark:bg-light-color h-3 w-3 animate-bounce rounded-full [animation-delay:-0.15s]"></div>
          <div className="bg-primary-light-color dark:bg-light-color h-3 w-3 animate-bounce rounded-full"></div>
        </div>
      ) : (
        children
      )}
    </button>
  );
}
