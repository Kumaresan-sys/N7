import { ArrowRight } from "lucide-react";

type TextLinkProps = {
  href: string;
  children: string;
  dark?: boolean;
  className?: string;
};

export default function TextLink({ href, children, dark = false, className = "" }: TextLinkProps) {
  return (
    <a className={`text-link ${dark ? "dark" : ""} ${className}`} href={href}>
      {children} <ArrowRight size={14} />
    </a>
  );
}
