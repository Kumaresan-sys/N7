import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Menu,
  Zap,
} from "lucide-react";
import Image from "next/image";

type Solution = {
  title: string;
  copy: string;
  icon: string;
  tag?: string;
};

type Insight = {
  title: string;
  category: string;
  author: string;
  date: string;
  featured?: boolean;
};

const solutions: Solution[] = [
  {
    title: "Core Banking CB7",
    copy: "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
    icon: "/assets/solution-core-banking.svg",
  },
  {
    title: "Digital Banking N7",
    copy: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
    icon: "/assets/solution-digital-banking.svg",
  },
  {
    title: "Open Banking",
    copy: "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
    icon: "/assets/solution-open-banking.svg",
  },
  {
    title: "Loan Origination System",
    copy: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
    icon: "/assets/solution-loan-origination.svg",
    tag: "NBFC",
  },
  {
    title: "Loan Management System",
    copy: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
    icon: "/assets/solution-loan-management.svg",
    tag: "NBFC",
  },
];

const digitalBenefits = [
  "Pre-integrated Security System",
  "Fully Compliant With Regulatory Requirement",
  "Digitally Connected Core",
];

const operations = [
  "Adaptive & Intelligent API monetization",
  "Ambient User Experience",
  "Cloud-native With lower TCO",
];

const coreEfficiencyColumns = [
  [
    "Customer-On Boarding",
    "Managing deposits and withdrawals",
    "Transaction management",
    "Interest Calculation",
    "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
  ],
  [
    "CRM Activities",
    "Configuring New Banking Products",
    "Loan disbursal and Loan management",
    "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
  ],
];

const insights: Insight[] = [
  {
    title: "How to transition from a traditional to a digital bank",
    category: "Getting Started",
    author: "David Grohl",
    date: "17/08/24",
    featured: true,
  },
  {
    title: "How to transition from a traditional to a digital bank",
    category: "Getting Started",
    author: "David Grohl",
    date: "17/08/24",
  },
  {
    title: "How to transition from a traditional to a digital bank",
    category: "Getting Started",
    author: "David Grohl",
    date: "17/08/24",
  },
];

const footerGroups = [
  {
    title: "Solutions",
    links: [
      "Core Banking CB7",
      "Digital Banking N7",
      "Open Banking",
      "Loan Origination System",
      "Loan Management System",
      "Digital Transformation",
    ],
  },
  {
    title: "N7 Banking",
    links: [
      "About Us",
      "Solutions",
      "Contact",
      "Company",
      "Careers",
      "Insights",
      "Core Team",
      "Brand Center",
    ],
  },
  {
    title: "Our Socials",
    links: ["LinkedIn", "X"],
  },
];

export default function Home() {
  return (
    <main className="n7-page">
      <Header />
      <HeroSection />
      <SolutionsSection />
      <CoreBankingSection />
      <CoreEfficiencySection />
      <DarkCta />
      <MarqueeStrip />
      <DigitalBankingSection />
      <DarkCta compact />
      <InsightsSection />
      <CaseStudiesSection />
      <FinalCta />
      <SiteFooter />
    </main>
  );
}

function Header() {
  return (
    <header className="site-header" aria-label="Primary navigation">
      <a className="brand" href="#" aria-label="N7 home">
        N7
      </a>
      <input type="checkbox" id="nav-toggle" className="sr-only" />
      <nav className="nav-links" aria-label="Main menu">
        <a className="has-dropdown" href="#solutions">
          Solutions
          <ChevronDown size={16} strokeWidth={1.8} aria-hidden="true" />
        </a>
        <a className="has-dropdown" href="#resources">
          Resources
          <ChevronDown size={16} strokeWidth={1.8} aria-hidden="true" />
        </a>
        <a href="#about">About us</a>
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

function HeroSection() {
  return (
    <section className="hero section-dark">
      <div className="shell hero-grid">
        <div className="hero-copy reveal">
          <h1>
            <span>The new foundation</span>
            <span>of modern banking</span>
          </h1>
          <p>
            We drive innovation and growth, provide seamless customer
            experiences and operational excellence.
          </p>
          <div className="button-row">
            <a className="button primary" href="#contact">
              Request demo
            </a>
            <a className="button ghost" href="#solutions">
              Contact us
            </a>
          </div>
        </div>

        <div className="hero-visual reveal" aria-hidden="true">
          <div className="visual-glow" />
          <div className="hero-asset-stage">
            <Image
              src="/assets/hero-photo-figma.svg"
              alt=""
              width={363}
              height={301}
              priority
              className="hero-piece hero-photo"
            />
            <Image
              src="/assets/account-card.svg"
              alt=""
              width={281}
              height={250}
              priority
              className="hero-piece hero-account-card"
            />
            <Image
              src="/assets/activity-card.svg"
              alt=""
              width={254}
              height={117}
              priority
              className="hero-piece hero-activity-card"
            />
          </div>
        </div>
      </div>

      <div className="shell trust-row" aria-label="Trusted by">
        <span>Trusted By:</span>
        <Image
          src="/assets/trusted-logos.svg"
          alt="SHELLS, SmartFinder, Zoomerr, ArtVenue, kontrast, and WAVESMARATHON"
          width={622}
          height={19}
          className="trusted-logos"
        />
      </div>
    </section>
  );
}

function SolutionsSection() {
  return (
    <section id="solutions" className="solutions section-dark">
      <div className="shell solutions-grid">
        <div className="section-heading reveal">
          <h2>All of our solutions are tailor-made to your needs</h2>
          <a className="button ghost small" href="#contact">
            Request demo
          </a>
        </div>

        <div className="solution-cards">
          {solutions.map(({ title, copy, icon, tag }) => (
            <article className="solution-card reveal" key={title}>
              <Image
                src={icon}
                alt=""
                width={47}
                height={49}
                className="solution-icon"
                aria-hidden="true"
              />
              {tag ? <span className="solution-tag">{tag}</span> : null}
              <h3>{title}</h3>
              <p>{copy}</p>
              <a href="#resources" className="text-link">
                Learn more <ArrowRight size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoreBankingSection() {
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

function CoreEfficiencySection() {
  return (
    <section id="core-efficiency" className="core-efficiency">
      <div className="efficiency-dashboard-frame reveal" aria-hidden="true">
        <Image
          src="/assets/core-efficiency-dashboard.svg"
          alt=""
          width={632}
          height={409}
          loading="eager"
          className="efficiency-dashboard-image"
        />
      </div>

      <div className="efficiency-content reveal">
        <h2>
          <span>Run a more efficient, flexible,and digitally</span>
          <span>connected corebanking system</span>
        </h2>
        <h3>What you will get:</h3>
        <div className="efficiency-list">
          {coreEfficiencyColumns.map((column, columnIndex) => (
            <ul className="efficiency-column" key={columnIndex}>
              {column.map((item) => (
                <li key={item}>
                  <span className="efficiency-check" aria-hidden="true">
                    <Check size={15} strokeWidth={2.6} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

function DarkCta({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "cta-section compact" : "cta-section"}>
      <div className="shell">
        <div className="cta-card reveal">
          <div>
            <h2>Take the full advantage of going paper-less now.</h2>
            <p>
              CB7 helps your financial institution improve client experiences,
              automate and optimize procedures, and simplify banking operations.
            </p>
          </div>
          <div className="button-row">
            <a className="button ghost" href="#contact">
              Contact us
            </a>
            <a className="button primary" href="#contact">
              Request demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function MarqueeStrip() {
  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-track">
        {Array.from({ length: 2 }).map((_, index) => (
          <div className="marquee-content" key={index}>
            <Image
              src="/assets/marquee-star.svg"
              alt=""
              width={58}
              height={58}
              className="marquee-star"
            />
            <span>N7</span>
            <Image
              src="/assets/marquee-star.svg"
              alt=""
              width={58}
              height={58}
              className="marquee-star"
            />
            <b>Say</b>
            <Image
              src="/assets/marquee-hand.svg"
              alt=""
              width={94}
              height={66}
              className="marquee-hand"
            />
            <b>to the new way of banking</b>
            <Image
              src="/assets/marquee-star.svg"
              alt=""
              width={58}
              height={58}
              className="marquee-star"
            />
            <span>CB7</span>
            <Image
              src="/assets/marquee-star.svg"
              alt=""
              width={58}
              height={58}
              className="marquee-star"
            />
            <b>Say</b>
            <Image
              src="/assets/marquee-hand.svg"
              alt=""
              width={94}
              height={66}
              className="marquee-hand"
            />
            <b>to the new way of banking</b>
          </div>
        ))}
      </div>
    </div>
  );
}

function DigitalBankingSection() {
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

function InsightsSection() {
  return (
    <section id="resources" className="insights section-dark">
      <div className="shell insights-layout">
        <div className="insights-copy reveal">
          <h2>Get yourself up-to-speed on all the things happening in fintech</h2>
          <a className="button ghost small" href="#resources">
            Insights
          </a>
        </div>

        <div className="insights-panel reveal">
          <div className="insight-cards">
            {insights.map((insight, index) => (
              <article
                className={insight.featured ? "insight-card featured" : "insight-card"}
                key={`${insight.title}-${insight.date}-${index}`}
              >
                {insight.featured ? (
                  <Image
                    src="/assets/insights-pattern.svg"
                    alt=""
                    width={295}
                    height={267}
                    className="insight-card-media"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="insight-card-content">
                  <small>{insight.category}</small>
                  <h3>{insight.title}</h3>
                  <p className="insight-meta">
                    <span>{insight.author}</span>
                    <span>{insight.date}</span>
                  </p>
                  <a href="#resources">Read more</a>
                </div>
              </article>
            ))}
          </div>
          <a className="read-all-insights text-link" href="#resources">
            Read all insights <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

function CaseStudiesSection() {
  return (
    <section className="case-studies section-dark">
      <div className="shell case-shell">
        <h2 className="case-title reveal">Our Case Studies</h2>

        <div className="case-carousel reveal">
          <article className="case-card case-card-shadow case-card-prev" aria-hidden="true">
            <Image
              src="/assets/insights-pattern.svg"
              alt=""
              width={295}
              height={267}
              className="case-card-media"
            />
            <div className="case-card-content">
              <small>Getting Started</small>
              <h3>How we help brand reach out more people</h3>
              <p className="case-brand">
                <span>
                  <Zap size={15} fill="currentColor" aria-hidden="true" />
                </span>
                Zoomerr
              </p>
              <a href="#resources">Read more</a>
            </div>
          </article>

          <article className="case-card case-card-shadow case-card-next" aria-hidden="true">
            <Image
              src="/assets/insights-pattern.svg"
              alt=""
              width={295}
              height={267}
              className="case-card-media"
            />
            <div className="case-card-content">
              <small>Getting Started</small>
              <h3>How we help brand reach out more people</h3>
              <p className="case-brand">
                <span>
                  <Zap size={15} fill="currentColor" aria-hidden="true" />
                </span>
                Zoomerr
              </p>
              <a href="#resources">Read more</a>
            </div>
          </article>

          <article className="case-card case-card-active">
            <Image
              src="/assets/insights-pattern.svg"
              alt=""
              width={421}
              height={381}
              className="case-card-media"
              aria-hidden="true"
            />
            <div className="case-card-content">
              <small>Getting Started</small>
              <h3>How we help brand reach out more people</h3>
              <p className="case-brand">
                <span>
                  <Zap size={15} fill="currentColor" aria-hidden="true" />
                </span>
                Zoomerr
              </p>
              <a href="#resources">Read more</a>
            </div>
          </article>
        </div>

        <div className="case-footer">
          <div className="case-controls" aria-hidden="true">
            <button type="button">
              <ChevronLeft size={24} strokeWidth={1.45} />
            </button>
            <div className="case-dots">
              <span />
              <span className="active" />
              <span />
              <span />
            </div>
            <button type="button">
              <ChevronRight size={24} strokeWidth={1.45} />
            </button>
          </div>

          <a className="case-view-all text-link" href="#resources">
            View all <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contact" className="final-cta section-dark">
      <div className="shell final-grid">
        <div className="reveal">
          <h2>Take the full advantage of going paper-less now.</h2>
          <p>
            CB7 helps your financial institution improve the client experience,
            automate and optimize procedures, and simplify banking operations.
          </p>
        </div>
        <div className="button-row">
          <a className="button ghost" href="mailto:hello@n7.example">
            Contact us
          </a>
          <a className="button primary" href="mailto:hello@n7.example">
            Request demo
          </a>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer id="about" className="site-footer section-dark">
      <div className="shell footer-layout">
        <a className="footer-logo" href="#" aria-label="N7 home">
          N7
        </a>

        <div className="footer-content">
          <div className="footer-addresses">
            <address>
              <strong>London</strong>
              <span>
                Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge,TN14
                6EP, England, United Kingdom.
              </span>
            </address>

            <address>
              <strong>Dubai</strong>
              <span>
                Linktia Infosystems Ltd – CB7,Jumeirah Business, Center 5
                Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates
              </span>
            </address>

            <address>
              <strong>London</strong>
              <span>
                Linktia Infosystems Ltd – CB7,Nirmal, Anand Nagar, Suncity Road,
                Pune, Maharashtra, 411041, India
              </span>
            </address>
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
            Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as
            Commercial Brand] — [Registered under the Companies Act 2006 in
            England and Wales | Number of Incorporation 13100992]
          </p>
        </div>
      </div>
    </footer>
  );
}
