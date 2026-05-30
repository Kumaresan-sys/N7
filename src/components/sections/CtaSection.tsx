export default function CtaSection({ compact = false }: { compact?: boolean }) {
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
