import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { digitalBenefits, operations } from "@/data/solutions";

function FeatureBlock({
  title,
  copy,
  items,
  className,
}: {
  title: string;
  copy: string;
  items: string[];
  className?: string;
}) {
  return (
    <div className={`feature-block reveal ${className ?? ""}`}>
      <h3>{title}</h3>
      <p>{copy}</p>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <span className="feature-check" aria-hidden="true">
              <Check size={13} strokeWidth={3} />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DigitalPhone({
  src,
  className,
}: {
  src: string;
  className: string;
}) {
  return (
    <Image
      src={src}
      alt=""
      width={269}
      height={543}
      className={`digital-phone ${className} reveal`}
      aria-hidden="true"
    />
  );
}

export default function DigitalBankingSection() {
  return (
    <section className="digital">
      <div className="shell digital-grid">
        <div className="digital-intro reveal">
          <h2>
            <span>Digital banking</span>
            <span>out-of-the-box</span>
          </h2>
          <p>
            N7 helps your financial institution improve the client experience,
            automate and optimize procedures.
          </p>
          <a className="button primary small" href="#contact">
            Request demo
          </a>
          <a className="text-link dark" href="#resources">
            Learn more <ArrowRight size={14} />
          </a>
        </div>

        <DigitalPhone
          src="/assets/iphone-digital-main.svg"
          className="phone-one"
        />

        <FeatureBlock
          title="Fully compliant with regulatory requirement"
          copy="The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational-risk protocols and procedures."
          items={digitalBenefits}
        />

        <FeatureBlock
          title="No legacy IT systems"
          copy="Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance."
          items={operations}
          className="legacy-block"
        />

        <DigitalPhone
          src="/assets/iphone-digital-front.svg"
          className="phone-two"
        />
        <DigitalPhone
          src="/assets/iphone-digital-front-2.svg"
          className="phone-three"
        />

        <FeatureBlock
          title="No traditional branches"
          copy="Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience."
          items={[
            "Branchless & Paperless Banking",
            "Digital Transformation Capability",
            "Optimized, Adoptable and Scalable",
          ]}
          className="branches-block"
        />
      </div>
    </section>
  );
}
