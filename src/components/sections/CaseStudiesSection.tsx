import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight, Zap } from "lucide-react";

export default function CaseStudiesSection() {
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
