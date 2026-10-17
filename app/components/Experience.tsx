import {
  experiences,
  type Experience as CareerExperience,
} from "../data/experience";

function CareerRow({
  job,
  current = false,
}: {
  job: CareerExperience;
  current?: boolean;
}) {
  return (
    <article className="career-row">
      <div className="career-date">
        <span>{job.date}</span>
        {current && <span className="current-label">Current</span>}
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
            {job.description.map((description) => (
              <li key={description}>{description}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="shell section-pad">
      <div className="section-heading">
        <span className="eyebrow">01 / Experience</span>
        <h2>Built over time.</h2>
        <p>From payments and messaging to trading and travel.</p>
      </div>
      <div className="timeline">
        {experiences.slice(0, 3).map((job, index) => (
          <CareerRow key={job.company} job={job} current={index === 0} />
        ))}
        <details className="earlier-career">
          <summary>
            Earlier experience · 2019–2024 <span aria-hidden="true">＋</span>
          </summary>
          <div>
            {experiences.slice(3).map((job) => (
              <CareerRow key={job.company} job={job} />
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
