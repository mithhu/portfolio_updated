export default function Hero() {
  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="eyebrow">
        <span className="status-dot" /> Software Engineer 2 · Skyscanner
      </div>
      <h1 id="hero-title">
        Thoughtful software.
        <br />
        <em>From the inside out.</em>
      </h1>
      <div className="hero-bottom">
        <p>
          I’m Mahamudul Hasan Mithhu. I build the interfaces people use and the
          systems that make them work — with a growing curiosity for local AI.
        </p>
        <a className="round-link" href="#projects">
          Explore my work <span aria-hidden="true">↘</span>
        </a>
      </div>
      <div className="hero-index">
        <span>Engineering &amp; selected experiments</span>
        <span>2019 — 2026</span>
      </div>
    </section>
  );
}
