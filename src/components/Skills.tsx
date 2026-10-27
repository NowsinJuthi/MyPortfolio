
import { Code2 } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section border-t border-white/5">
      <div className="container-main">
        <p className="section-label">02 / Technical Skills</p>
        <h2 className="section-title">
          Technologies I <span className="gradient-text">work with.</span>
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
          My technical toolkit covers frontend development, backend APIs,
          databases, authentication, and everyday development tools.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.skills.map((group) => (
            <article
              key={group.category}
              className="panel p-6 transition duration-200 hover:-translate-y-1 hover:border-violet-400/30"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-200">
                <Code2 size={22} />
              </div>

              <h3 className="font-bold">{group.category}</h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
