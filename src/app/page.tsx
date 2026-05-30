import { Header, Footer } from "@/components/layout";
import {
  HeroSection,
  SolutionsSection,
  CoreBankingSection,
  CoreEfficiencySection,
  CtaSection,
  MarqueeStrip,
  DigitalBankingSection,
  InsightsSection,
  CaseStudiesSection,
  FinalCtaSection,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="n7-page">
      <div className="scroll-progress" aria-hidden="true" />
      <Header />
      <HeroSection />
      <SolutionsSection />
      <CoreBankingSection />
      <CoreEfficiencySection />
      <CtaSection />
      <MarqueeStrip />
      <DigitalBankingSection />
      <CtaSection compact />
      <InsightsSection />
      <CaseStudiesSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
