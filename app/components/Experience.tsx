import { experiences } from "../data/experience";
export default function Experience() {
  return (
    <section id="experience" className="shell section-pad">
      <div className="section-heading">
        <span className="eyebrow">02 / Experience</span>
        <h2>Built over time.</h2>
        <p>From payments and messaging to trading and travel.</p>
      </div>
      <div className="timeline">
        {experiences.map((job, index) => (
          <article className="career-row" key={job.company}>
            <div className="career-date">
              <span>{job.date}</span>
              {index === 0 && <span className="current-label">Current</span>}
            </div>
            <div>
              <h3>
                <a href={job.link} target="_blank" rel="noreferrer">
                  {job.company} <span aria-hidden="true">↗</span>
                </a>
              </h3>
              <p className="job-title">{job.position}</p>
              {job.description.length > 0 && (
                <ul>
                  {job.description.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
