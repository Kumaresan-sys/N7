import Image from "next/image";
import { Check } from "lucide-react";
import { coreEfficiencyColumns } from "@/data/solutions";

export default function CoreEfficiencySection() {
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
