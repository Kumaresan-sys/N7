import { ChevronDown, Menu } from "lucide-react";
import { navLinks } from "@/data/navigation";

export default function Header() {
  return (
    <header className="site-header" aria-label="Primary navigation">
      <a className="brand" href="#" aria-label="N7 home">
        N7
      </a>
      <input type="checkbox" id="nav-toggle" className="sr-only" />
      <nav className="nav-links" aria-label="Main menu">
        {navLinks.map((link) => (
          <a
            key={link.label}
            className={link.hasDropdown ? "has-dropdown" : undefined}
            href={link.href}
          >
            {link.label}
            {link.hasDropdown && (
              <ChevronDown size={16} strokeWidth={1.8} aria-hidden="true" />
            )}
          </a>
        ))}
      </nav>
      <a className="header-demo" href="#contact">
        Request demo
      </a>
      <label htmlFor="nav-toggle" className="menu-button" aria-label="Open menu">
        <Menu size={18} />
      </label>
    </header>
  );
}
