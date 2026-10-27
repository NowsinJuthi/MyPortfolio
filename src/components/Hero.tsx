
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import TechAnimation from "@/components/TechAnimation";

export default function Hero() {
  return (
    <section
      id="home"
      className="container-main flex min-h-[80vh] flex-col justify-center py-20"
    >
      <div className="grid items-center gap-12 md:grid-cols-[1.4fr_0.8fr]">
        {/* Left Content */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-xs text-emerald-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Junior Developer · {portfolio.location}
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
            Hello, I&apos;m
          </p>

          <h1 className="max-w-3xl text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            {portfolio.name.split(" ").slice(0, 2).join(" ")}
            <br />
            <span className="gradient-text">
              {portfolio.name.split(" ").slice(2).join(" ")}
            </span>
          </h1>

          <h2 className="mt-6 text-xl font-semibold text-zinc-300 sm:text-2xl">
            {portfolio.role}
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">
            I build responsive web experiences and full-stack applications
            using React, Next.js, Node.js, Express, and MongoDB.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="primary-button">
              Explore Projects <ArrowUpRight size={17} />
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me <ArrowDown size={16} />
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex flex-wrap gap-5 text-sm text-zinc-400">
            <a
              href={portfolio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              GitHub ↗
            </a>

            <a
              href={portfolio.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn ↗
            </a>

            <a
              href={`mailto:${portfolio.email}`}
              className="transition hover:text-white"
            >
              Email ↗
            </a>
          </div>
        </div>

        {/* Right Side Animated Technology Card */}
        <div className="mx-auto w-full max-w-[360px]">
          <TechAnimation />
        </div>
      </div>

      {/* Core Strengths */}
      <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-4">
        {[
          "Full-Stack Development",
          "REST API Design",
          "Database Integration",
          "Responsive UI",
        ].map((item) => (
          <div
            key={item}
            className="panel px-4 py-4 text-center text-xs text-zinc-300 sm:text-sm"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
