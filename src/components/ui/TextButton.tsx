import { forwardRef, type ButtonHTMLAttributes } from "react";

export const TextButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ children, className = "", ...props }, ref) => (
    <button
      ref={ref}
      className={[
        "text-btn",
        "text-charcoal",
        "text-sm",
        "font-sans",
        "font-medium",
        "tracking-tight",
        "select-none",
        "focus-visible-ring",
        "transition-opacity",
        "duration-200",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  )
);

TextButton.displayName = "TextButton";


