import React from "react";

export interface EyebrowProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  onDark?: boolean;
  className?: string;
  as?: React.ElementType;
}

export const Eyebrow: React.FC<EyebrowProps> = ({
  children,
  className = "",
  as: Component = "span",
  ...props
}) => {
  const colorClass = "text-amber";
  const baseClasses = "font-display text-xs uppercase tracking-[0.15em] font-bold block";

  return (
    <Component
      className={`${baseClasses} ${colorClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Eyebrow;
