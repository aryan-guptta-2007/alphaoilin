import React from "react";
import { Eyebrow } from "./Eyebrow";

export interface SectionHeadProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  onDark?: boolean;
  align?: "left" | "center" | "right";
  className?: string;
}

export const SectionHead: React.FC<SectionHeadProps> = ({
  eyebrow,
  title,
  description,
  onDark = false,
  align = "left",
  className = "",
  ...props
}) => {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  const titleColor = onDark ? "text-paper" : "text-ink";
  const descColor = onDark ? "text-mist" : "text-slate";

  return (
    <div
      className={`flex flex-col gap-3 ${alignClasses[align]} ${className}`.trim()}
      {...props}
    >
      {eyebrow && <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>}
      <h2
        className={`font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight ${titleColor}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`font-body text-lg sm:text-xl font-light leading-relaxed max-w-2xl ${descColor}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHead;
