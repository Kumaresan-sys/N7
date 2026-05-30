import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CoreBankingSection() {
  return (
    <section className="core section-dark">
      <div className="shell core-shell">
        <div className="core-title reveal">
          <h2>
            <span>A complete cloud-based</span>
            <span>core banking</span>
          </h2>
          <p>
            Faster time to market with our cloud-based core banking services
          </p>
          <a className="button primary small" href="#contact">
            Request demo
          </a>
          <a className="text-link" href="#resources">
            Learn more <ArrowRight size={14} />
          </a>
        </div>

        <div className="core-dashboard-frame reveal" aria-hidden="true">
          <Image
            src="/assets/core-dashboard-mask-wide.svg"
            alt=""
            width={632}
            height={409}
            className="core-dashboard-image"
          />
        </div>
      </div>
    </section>
  );
}
