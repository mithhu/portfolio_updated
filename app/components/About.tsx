import { skillCategories, socialLinks } from "../data/skills";
export default function About() {
  return (
    <section id="about" className="about-section section-pad">
      <div className="shell about-grid">
        <div>
          <span className="eyebrow">03 / A little context</span>
          <h2>
            Curious about
            <br />
            <em>the whole system.</em>
          </h2>
          <p>
            I’m a software engineer working across frontend architecture and
            full-stack development. Since 2019, I’ve built user-facing
            applications, partner platforms, real-time messaging and onboarding
            experiences.
          </p>
          <p>
            Today I’m a Software Engineer 2 at Skyscanner. Outside work, I
            explore how local models can become useful products — and publish
            what the experiments actually show.
          </p>
          <div className="education">
            <span className="eyebrow">Education</span>
            <h3>East West University</h3>
            <p>
              B.Sc. in Electrical and Electronics Engineering
              <br />
              January 2015 — December 2018
            </p>
          </div>
          <div className="social-links">
            {socialLinks.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer">
                {s.name} ↗
              </a>
            ))}
          </div>
        </div>
        <div className="toolkit">
          <span className="eyebrow">The working toolkit</span>
          {skillCategories.map((c) => (
            <div className="skill-group" key={c.name}>
              <h3>{c.name}</h3>
              <p>{c.skills.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
