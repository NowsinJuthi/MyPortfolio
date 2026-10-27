
"use client";

import { portfolio } from "@/data/portfolio";

import {
  ArrowDownRight,
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  Code2,
} from "lucide-react";


export default function Projects() {
  const projects = portfolio.projects;

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-24 sm:px-10 sm:py-28 lg:px-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-150px] top-40 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-150px] top-[45%] h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 flex flex-col justify-between gap-6 sm:mb-16 md:flex-row md:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.07] px-4 py-2 text-xs font-medium tracking-wider text-violet-300">
              <Sparkles size={14} />
              PORTFOLIO SHOWCASE
            </div>

            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Featured{" "}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
              A collection of applications I have built using modern
              technologies, focusing on performance, usability, and
              clean code.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-4 md:self-auto">
            <Code2 className="text-violet-300" size={24} />
            <div>
              <p className="text-xl font-bold text-white">
                {String(projects.length).padStart(2, "0")}
              </p>
              <p className="text-xs text-zinc-500">Projects</p>
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.09] bg-[#10101b]/90 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/40 hover:shadow-[0_20px_70px_rgba(124,58,237,0.12)] sm:p-8"
            >
              {/* Hover gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/[0.08] via-transparent to-cyan-500/[0.04] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Top decorative line */}
              <div className="absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex flex-1 flex-col">
                {/* Card Header */}
                <div className="mb-7 flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-gradient-to-br from-violet-500/20 to-cyan-500/10 text-violet-200 transition duration-500 group-hover:rotate-[-6deg] group-hover:scale-110">
                    <Code2 size={27} strokeWidth={1.6} />
                  </div>

                  <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-zinc-500">
                    PROJECT_{String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-violet-200 sm:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-3 inline-flex w-fit items-center gap-2 rounded-lg bg-violet-400/[0.08] px-3 py-1.5 text-xs font-semibold text-violet-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                  {project.category}
                </p>

                {/* Description */}
                <p className="mt-5 flex-1 text-sm leading-7 text-zinc-400 sm:text-base">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-7">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-500">
                    Built With
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-white/[0.08] bg-white/[0.035] px-3 py-2 text-xs font-medium text-zinc-300 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.06] hover:text-cyan-200"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="my-7 h-px bg-gradient-to-r from-white/10 via-white/[0.04] to-transparent" />

                {/* Links */}
                <div className="flex flex-wrap items-center gap-3">
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-950/30 transition duration-300 hover:-translate-y-0.5 hover:from-violet-500 hover:to-indigo-500"
                    >
                      Live Demo
                      <ArrowUpRight size={16} />
                    </a>
                  ) : (
                    <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-zinc-500">
                      Live Demo unavailable
                    </span>
                  )}

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-zinc-200 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                    >
                      <span className="text-sm font-bold" aria-hidden="true">
                        GH
                      </span>
                      GitHub
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-xl border border-white/[0.06] px-4 py-3 text-sm text-zinc-500">
                      <Github size={16} />
                      GitHub pending
                    </span>
                  )}

                  <ArrowDownRight
                    size={20}
                    className="ml-auto text-zinc-700 transition duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-violet-300"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 text-center text-xs text-zinc-500 sm:text-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Always learning, building, and exploring new technologies.
        </div>
      </div>
    </section>
  );
}
