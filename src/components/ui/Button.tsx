import type { ReactNode } from "react";

type ButtonProps = {
  variant?: "primary" | "ghost";
  size?: "default" | "small";
  href: string;
  children: ReactNode;
  className?: string;
};

export default function Button({
  variant = "primary",
  size = "default",
  href,
  children,
  className = "",
}: ButtonProps) {
  const classes = [
    "button",
    variant,
    size === "small" ? "small" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a className={classes} href={href}>
      {children}
    </a>
  );
}
