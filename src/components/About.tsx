
import { CheckCircle2 } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="section border-t border-white/5">
      <div className="container-main">
        <p className="section-label">01 / About Me</p>
        <h2 className="section-title">
          A little about <span className="gradient-text">myself.</span>
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-[1.3fr_0.7fr]">
          <div className="panel p-6 sm:p-8">
            <h3 className="text-xl font-bold">Professional Summary</h3>
            <p className="mt-5 leading-8 text-zinc-400">
              {portfolio.summary}
            </p>
            <p className="mt-4 leading-8 text-zinc-400">
              I enjoy learning modern technologies, solving practical
              development problems, and creating accessible, user-friendly
              digital experiences.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={portfolio.github}
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                View GitHub ↗
              </a>
              <a href="#contact" className="primary-button">
                Let&apos;s Connect
              </a>
            </div>
          </div>

          <div className="panel p-6 sm:p-8">
            <h3 className="text-xl font-bold">Core Strengths</h3>
            <ul className="mt-6 space-y-4">
              {portfolio.strengths.map((strength) => (
                <li key={strength} className="flex gap-3 text-sm text-zinc-300">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-violet-300"
                  />
                  {strength}
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-sm text-zinc-500">Based in</p>
              <p className="mt-2 font-semibold">{portfolio.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
