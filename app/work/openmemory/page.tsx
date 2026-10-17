import type { Metadata } from "next";
import Image from "next/image";
import DemoVideo from "../../components/DemoVideo";
import { projects } from "../../data/projects";

export const metadata: Metadata = {
  title: "OpenMemory — Product and local AI case study | Mithhu",
  description:
    "From natural notes to reviewed memories: a local-first product, AI-assisted MLX LoRA fine-tuning, and openly reported evaluation with its limitations.",
};

export default function OpenMemoryCaseStudy() {
  return (
    <main className="shell case-study-page" id="main">
      <a className="case-back eyebrow" href="/#projects">
        ← Back to selected work
      </a>
      <article className="featured-project">
        <div className="project-intro">
          <div>
            <span className="eyebrow accent">
              Featured / Product + research
            </span>
            <h1>OpenMemory</h1>
          </div>
          <p>
            A place for the things you don’t want to forget. Natural notes
            become structured memories, with you making the final call.
          </p>
        </div>
        <a
          className="project-image"
          href="https://open-memory-ai.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/images/openmemory.png"
            alt="OpenMemory library showing fictional book and movie memories, with progress and review controls"
            width={1280}
            height={720}
            sizes="(max-width: 720px) 100vw, 1100px"
          />
          <span className="image-label">
            Inside the app · fictional demonstration memories
          </span>
        </a>
        <div className="case-grid">
          <div>
            <h2 className="case-subheading">
              A complete path from note to memory.
            </h2>
            <p>
              Text or optional ElevenLabs cloud transcription → classification →
              separate extraction → human review → an explicit save to a browser
              vault, with optional encryption.
            </p>
            <p>
              The hosted app starts with manual capture and explicit OpenAI
              opt-in. Local inference uses Ollama or a paired, running Mac
              companion for native MLX.
            </p>
            <div className="tags">
              {projects[0].tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="case-subheading">
              Fine-tuning, with the evidence attached.
            </h2>
            <p>
              I directed an AI-assisted build and ran MLX LoRA training on a
              frozen, 4-bit Qwen3.5-9B base: 730 examples and 638,976 trainable
              adapter values.
            </p>
            <table className="results">
              <caption>
                Frozen 200-example test · category + intent correct
              </caption>
              <thead>
                <tr>
                  <th scope="col">Comparison</th>
                  <th scope="col">Joint accuracy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Unadapted base</th>
                  <td>67.0%</td>
                </tr>
                <tr className="adapter-row">
                  <th scope="row">Fine-tuned adapter</th>
                  <td>76.5%</td>
                </tr>
                <tr>
                  <th scope="row">Constant majority baseline</th>
                  <td>81.0%</td>
                </tr>
              </tbody>
            </table>
            <p className="small-note">
              A 9.5-point gain over its base; below the majority baseline.
              AI-assigned labels, class imbalance and regressions limit the
              result. Experimental, not production-qualified; the released
              adapter does not classify TV series.
            </p>
          </div>
        </div>
        <div className="project-links">
          <a
            className="button"
            href="https://open-memory-ai.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Try OpenMemory <span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://github.com/mithhu/OpenMemory"
            target="_blank"
            rel="noreferrer"
          >
            App source ↗
          </a>
          <a
            href="https://github.com/mithhu/openmemory-local-classifier-research"
            target="_blank"
            rel="noreferrer"
          >
            Research &amp; evaluation ↗
          </a>
          <a
            href="https://huggingface.co/mithhu333/openmemory-qwen3.5-9b-mlx-classifier-v1"
            target="_blank"
            rel="noreferrer"
          >
            Model adapter ↗
          </a>
        </div>
        <DemoVideo />
      </article>
      <div className="case-end">
        <a href="/#experience">Explore my engineering experience →</a>
        <a href="/#projects">More selected work →</a>
      </div>
    </main>
  );
}
