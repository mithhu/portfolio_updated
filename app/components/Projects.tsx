import Image from "next/image";
import { projects } from "../data/projects";

const summaries = [
  "Local-first memory capture, from natural notes to a reviewed personal library.",
  "An AI-powered photo editor for background removal, image transformations and generative edits. In active development.",
  "A 3D browser cricket game with multiple batting shots, quick-match modes and player high-score tracking.",
  "A Chip-8 emulator built from scratch, with a complete instruction set and pixel-accurate Canvas rendering.",
];

export default function Projects() {
  return (
    <section id="projects" className="work-section section-pad">
      <div className="shell">
        <div className="section-heading">
          <span className="eyebrow">02 / Selected work</span>
          <h2>Ideas, made tangible.</h2>
          <p>
            Independent products and experiments, across AI, interaction and
            systems.
          </p>
        </div>
        <div className="more-work balanced-work">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <a
                href={index === 0 ? "/work/openmemory" : project.link}
                target={index === 0 ? undefined : "_blank"}
                rel={index === 0 ? undefined : "noreferrer"}
                className="card-image"
              >
                <Image
                  src={project.image}
                  alt={`${project.title} application preview${index === 0 ? "; fictional book and movie memories" : ""}`}
                  width={800}
                  height={500}
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </a>
              <div className="card-topline">
                <span className="eyebrow">
                  0{index + 1} /{" "}
                  {index === 0
                    ? "Product + research"
                    : index === 1
                      ? "AI tools"
                      : index === 2
                        ? "Interactive play"
                        : "Systems exploration"}
                </span>
                <span aria-hidden="true">↗</span>
              </div>
              <h3>
                <a
                  href={index === 0 ? "/work/openmemory" : project.link}
                  target={index === 0 ? undefined : "_blank"}
                  rel={index === 0 ? undefined : "noreferrer"}
                >
                  {project.title}
                </a>
              </h3>
              {index === 0 ? (
                <dl className="project-summary">
                  <div>
                    <dt>Problem</dt>
                    <dd>Everyday notes lose their context.</dd>
                  </div>
                  <div>
                    <dt>Built</dt>
                    <dd>
                      A reviewed memory app and a locally fine-tuned classifier,
                      with AI assistance.
                    </dd>
                  </div>
                  <div>
                    <dt>Result</dt>
                    <dd>
                      A working capture-to-library flow, plus published
                      evaluation and limitations.
                    </dd>
                  </div>
                </dl>
              ) : (
                <p>{summaries[index]}</p>
              )}
              <div className="tags">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <a
                className="project-cta"
                href={index === 0 ? "/work/openmemory" : project.link}
                target={index === 0 ? undefined : "_blank"}
                rel={index === 0 ? undefined : "noreferrer"}
              >
                {index === 0 ? "Read the case study" : "Explore the project"}{" "}
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
