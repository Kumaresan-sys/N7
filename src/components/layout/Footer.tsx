import { ArrowRight } from "lucide-react";
import { footerGroups, officeAddresses } from "@/data/footer";
import { siteConfig } from "@/data/site-config";

export default function Footer() {
  return (
    <footer id="about" className="site-footer section-dark">
      <div className="shell footer-layout">
        <a className="footer-logo" href="#" aria-label="N7 home">
          N7
        </a>

        <div className="footer-content">
          <div className="footer-addresses">
            {officeAddresses.map((office, index) => (
              <address key={index}>
                <strong>{office.city}</strong>
                <span>{office.address}</span>
              </address>
            ))}
          </div>

          <div className="footer-link-columns">
            {footerGroups.map((group) => (
              <div className="footer-column" key={group.title}>
                <h3>{group.title}</h3>
                {group.links.map((link) => (
                  <a href="#" key={link}>
                    <span>{link}</span>
                    <ArrowRight size={15} strokeWidth={1.8} aria-hidden="true" />
                  </a>
                ))}
              </div>
            ))}
          </div>

          <p className="copyright">
            {siteConfig.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
