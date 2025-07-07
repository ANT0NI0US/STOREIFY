import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

const MotionLink = motion(RouterLink);

const sizeStyles = {
  small: "px-2 py-1 text-xs sm:text-sm",
  medium: "px-3 py-2 text-sm sm:text-base",
  large: "px-6 py-4 text-lg sm:text-xl",
  actions: "px-3 py-1 !text-xs sm:!text-sm !w-fit",
};

const motionProps = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.95 },
  transition: { duration: 0.125, ease: "easeInOut" },
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
  AriaLabel: string;
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
  AriaLabel,
  To,
  replace = false,
}: ButtonProps) {
  const base = `focus:outline-hidden w-full rounded-md border flexCenter gap-1
   transition-all min-h-[40px] font-bold
  ${(disabled || loading) && "cursor-not-allowed border-text-light-color bg-[#0000004d]! dark:border-text-dark-color dark:bg-[#ffffff59]!"}`;

  const styles: Record<typeof variation, string> = {
    primary: `bg-text-light-color text-secondary-light-color border-text-light-color
     dark:bg-text-dark-color dark:text-secondary-dark-color dark:border-text-dark-color
      ${!disabled && !loading && "hover:bg-text-light-color/90 dark:hover:bg-text-dark-color/90"}`,
    secondary: `bg-secondary-light-color text-text-light-color border-text-light-color
        dark:bg-secondary-dark-color dark:text-text-dark-color dark:border-text-dark-color
    ${!disabled && !loading && "hover:bg-text-light-color hover:text-secondary-light-color hover:border-text-light-color dark:hover:bg-text-dark-color dark:hover:text-secondary-dark-color dark:hover:border-text-dark-color"}`,
    delete: `bg-error-light-color text-secondary-light-color border-error-light-color dark:bg-error-dark-color dark:text-secondary-dark-color border-error-dark-color
      ${!disabled && !loading && "hover:bg-error-light-color/90 dark:hover:bg-error-dark-color/90"}`,
    danger: `bg-transparent text-error-light-color border-error-light-color dark:text-error-dark-color dark:border-error-dark-color ${!disabled && !loading && "hover:bg-error-light-color dark:hover:bg-error-dark-color hover:text-secondary-light-color dark:hover:text-text-dark-color"}`,
  };

  const combinedClassName = `${base} ${sizeStyles[size]} ${styles[variation]} ${Font}`;

  if (To)
    return (
      <MotionLink
        to={To}
        className={combinedClassName}
        aria-label={AriaLabel}
        title={AriaLabel}
        replace={replace}
        {...motionProps}
      >
        {children}
      </MotionLink>
    );

  return (
    <motion.button
      onClick={onClick}
      type={type}
      disabled={disabled || loading}
      className={combinedClassName}
      aria-label={AriaLabel}
      title={AriaLabel}
      {...motionProps}
    >
      {loading ? (
        <div className="flexCenter gap-1">
          <div className="bg-secondary-light-color dark:bg-secondary-dark-color h-3 w-3 animate-bounce rounded-full [animation-delay:-0.3s]" />
          <div className="bg-secondary-light-color dark:bg-secondary-dark-color h-3 w-3 animate-bounce rounded-full [animation-delay:-0.15s]" />
          <div className="bg-secondary-light-color dark:bg-secondary-dark-color h-3 w-3 animate-bounce rounded-full" />
        </div>
      ) : (
        children
      )}
    </motion.button>
  );
}
