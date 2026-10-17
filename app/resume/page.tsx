import type { Metadata } from "next";
import { experiences } from "../data/experience";
export const metadata: Metadata = {
  title: "Career overview — Mahamudul Hasan Mithhu",
};
export default function Resume() {
  return (
    <main className="shell resume-page">
      <a href="/" className="eyebrow">
        ← Back to portfolio
      </a>
      <h1>Mahamudul Hasan Mithhu</h1>
      <p>Software Engineer 2 · Skyscanner</p>
      <p>
        <a href="mailto:mithhu121212@gmail.com">mithhu121212@gmail.com</a> ·{" "}
        <a href="https://github.com/mithhu">github.com/mithhu</a> ·{" "}
        <a href="https://www.linkedin.com/in/mithhu">LinkedIn</a>
      </p>
      <h2>Experience</h2>
      {experiences.map((job) => (
        <article key={job.company}>
          <h3>
            {job.company} — {job.position}
          </h3>
          <p className="eyebrow">{job.date}</p>
          <ul>
            {job.description.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </article>
      ))}
      <h2>Selected independent work</h2>
      <h3>OpenMemory</h3>
      <p>
        Local-first memory capture with explicit human review. AI-assisted
        product development, local MLX LoRA training on Qwen3.5-9B, and
        published evaluation with documented limitations.
      </p>
      <p>
        <a href="https://open-memory-ai.vercel.app/">Application</a> ·{" "}
        <a href="https://github.com/mithhu/openmemory-local-classifier-research">
          Research
        </a>
      </p>
      <h2>Education</h2>
      <p>
        East West University · B.Sc. in Electrical and Electronics Engineering
        <br />
        January 2015 — December 2018
      </p>
    </main>
  );
}
