
import { BookOpen, GraduationCap } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function Experience() {
  const { education, training } = portfolio;

  return (
    <section id="experience" className="section border-t border-white/5">
      <div className="container-main">
        <p className="section-label">04 / Education & Training</p>
        <h2 className="section-title">
          My learning <span className="gradient-text">journey.</span>
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <article className="panel p-6 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-200">
              <GraduationCap size={25} />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-violet-300">
              Education
            </p>

            <h3 className="mt-3 text-xl font-bold">{education.degree}</h3>
            <p className="mt-4 leading-7 text-zinc-300">
              {education.institution}
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              {education.location}
            </p>
            <p className="mt-4 text-sm text-zinc-400">
              {education.startDate} — {education.endDate}
            </p>
          </article>

          <article className="panel p-6 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/10 text-cyan-200">
              <BookOpen size={25} />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-cyan-300">
              Professional Development
            </p>

            <h3 className="mt-3 text-xl font-bold">{training.title}</h3>
            <p className="mt-3 font-medium text-zinc-300">
              {training.provider}
            </p>
            <p className="mt-4 leading-7 text-zinc-400">
              {training.description}
            </p>

            {training.certificateUrl && (
              <a
                href={training.certificateUrl}
                target="_blank"
                rel="noreferrer"
                className="secondary-button mt-6"
              >
                View Certificate ↗
              </a>
            )}
          </article>
        </div>
      </div>
    </section>
  );
}
