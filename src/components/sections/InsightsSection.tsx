import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { insights } from "@/data/insights";

export default function InsightsSection() {
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
