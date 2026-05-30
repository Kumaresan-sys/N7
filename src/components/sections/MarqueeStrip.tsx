import Image from "next/image";

export default function MarqueeStrip() {
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
