import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { solutions } from "@/data/solutions";

export default function SolutionsSection() {
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
