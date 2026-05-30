import type { ReactNode } from "react";

type SectionShellProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionShell({ children, className = "" }: SectionShellProps) {
  return <div className={`shell ${className}`}>{children}</div>;
}
