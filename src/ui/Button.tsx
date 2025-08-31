import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link as RouterLink, type LinkProps } from "react-router-dom";
import { motion, MotionProps } from "framer-motion";

const MotionLink = motion(RouterLink);

type Variation = "primary" | "secondary" | "delete" | "danger";
type Size = "small" | "medium" | "large" | "actions";

type BaseProps = {
  children: ReactNode;
  variation?: Variation;
  size?: Size;
  styles?: string;
  loading?: boolean;
  disabled?: boolean;
};

type ButtonProps = ComponentPropsWithoutRef<"button"> &
  MotionProps &
  BaseProps & { to?: never };
type ButtonLinkProps = LinkProps & MotionProps & BaseProps & { to: string };

type ButtonOrLinkProps = ButtonProps | ButtonLinkProps;

const motionProps = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.95 },
  transition: { duration: 0.125, ease: "easeInOut" },
};

function isRouterLink(
  props: ButtonProps | ButtonLinkProps,
): props is ButtonLinkProps {
  return "to" in props;
}

const sizeStyles: Record<Size, string> = {
  small: "px-2 py-1 text-xs sm:text-sm",
  medium: "px-3 py-2 text-sm sm:text-base",
  large: "px-6 py-4 text-lg sm:text-xl",
  actions: "px-3 py-1 !text-xs sm:!text-sm !w-fit",
};

const buttonVariationStyles: Record<Variation, string> = {
  primary: `bg-text-light-color text-secondary-light-color border-text-light-color
   dark:bg-text-dark-color dark:text-secondary-dark-color dark:border-text-dark-color
   hover:bg-text-light-color/90 dark:hover:bg-text-dark-color/90`,
  secondary: `bg-secondary-light-color text-text-light-color border-text-light-color
   dark:bg-secondary-dark-color dark:text-text-dark-color dark:border-text-dark-color
   hover:bg-text-light-color hover:text-secondary-light-color hover:border-text-light-color
   dark:hover:bg-text-dark-color dark:hover:text-secondary-dark-color dark:hover:border-text-dark-color`,
  delete: `bg-error-light-color text-secondary-light-color border-error-light-color
   dark:bg-error-dark-color dark:text-secondary-dark-color border-error-dark-color
   hover:bg-error-light-color/90 dark:hover:bg-error-dark-color/90`,
  danger: `bg-transparent text-error-light-color border-error-light-color
   dark:text-error-dark-color dark:border-error-dark-color
   hover:bg-error-light-color dark:hover:bg-error-dark-color
   hover:text-secondary-light-color dark:hover:text-text-dark-color`,
};

export default function Button(props: ButtonOrLinkProps) {
  const {
    disabled,
    loading,
    variation = "primary",
    styles,
    size = "medium",
  } = props;

  const base = `focus:outline-hidden w-full rounded-md border flexCenter gap-1
   transition-all min-h-[40px] font-bold ${disabled || loading ? "cursor-not-allowed border-text-light-color bg-[#0000004d]! dark:border-text-dark-color dark:bg-[#ffffff59]!" : ""}`;

  const combinedClassName = `${base} ${sizeStyles[size]} ${buttonVariationStyles[variation]} ${styles}`;

  if (isRouterLink(props)) {
    const { children, ...resetProps } = props;
    return (
      <MotionLink
        className={combinedClassName}
        {...resetProps}
        {...motionProps}
      >
        {children}
      </MotionLink>
    );
  }

  const { children, ...resetProps } = props;

  return (
    <motion.button
      disabled={disabled || loading}
      className={combinedClassName}
      {...resetProps}
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
