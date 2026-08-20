import React from "react";
import Link from "next/link";

export type ButtonVariant = "amber" | "ghost" | "ink";

interface BaseButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

export type ButtonAsButtonProps = BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> & {
    href?: undefined;
  };

export type ButtonAsAnchorProps = BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

export const Button: React.FC<ButtonProps> = ({
  variant = "amber",
  children,
  className = "",
  href,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-display font-semibold text-[13.5px] tracking-button uppercase rounded-none transition-colors duration-150 px-6 py-3 border border-transparent focus:outline-none focus:ring-2 focus:ring-amber focus:ring-offset-2";

  const variantStyles: Record<ButtonVariant, string> = {
    amber:
      "bg-amber text-ink hover:bg-[#d07e15] border-amber active:bg-[#ba6e0f]",
    ghost:
      "bg-transparent text-ink border-rule hover:border-ink hover:bg-linen active:bg-linen",
    ink: "bg-transparent text-ink border border-ink hover:bg-ink hover:text-paper active:bg-ink",
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClasses}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};

export default Button;
