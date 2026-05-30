import Image from "next/image";

export default function HeroSection() {
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
