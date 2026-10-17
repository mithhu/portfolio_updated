import { achievements, certifications } from "../data/achievements";
export default function Achievements() {
  return (
    <section
      className="shell section-pad learning-section"
      aria-labelledby="learning-title"
    >
      <div className="section-heading">
        <span className="eyebrow">04 / Always learning</span>
        <h2 id="learning-title">A practice, not a finish line.</h2>
      </div>
      <div className="learning-grid">
        {achievements.map((a) => (
          <article key={a.title}>
            <span className="eyebrow">{a.date}</span>
            <h3>{a.title}</h3>
            <p className="accent">{a.organization}</p>
            <p>{a.description[0]}</p>
          </article>
        ))}
      </div>
      <details className="certifications">
        <summary>
          Certificates &amp; coursework <span aria-hidden="true">＋</span>
        </summary>
        <div className="certificate-list">
          {certifications.map((c) => (
            <a key={c.title} href={c.link} target="_blank" rel="noreferrer">
              <span>{c.title}</span>
              <span>{c.issuer} ↗</span>
            </a>
          ))}
        </div>
      </details>
    </section>
  );
}
