
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="section border-t border-white/5">
      <div className="container-main">
        <p className="section-label">05 / Contact</p>

        <div className="panel mt-6 overflow-hidden">
          <div className="grid gap-10 p-6 sm:p-10 md:grid-cols-[1.2fr_0.8fr] md:p-12">
            <div>
              <p className="text-sm font-semibold text-violet-300">
                Have a project in mind?
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Let&apos;s build
                <br />
                <span className="gradient-text">something great.</span>
              </h2>

              <p className="mt-6 max-w-lg leading-8 text-zinc-400">
                I&apos;m interested in web development opportunities,
                collaborative projects, and opportunities to grow as a
                full-stack developer. Feel free to reach out.
              </p>

              <a
                href={`mailto:${portfolio.email}`}
                className="primary-button mt-8"
              >
                Send Me an Email <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${portfolio.email}`}
                className="flex items-start gap-4 rounded-xl border border-white/10 p-4 transition hover:border-violet-400/40"
              >
                <Mail className="mt-1 shrink-0 text-violet-300" size={21} />
                <div className="min-w-0">
                  <p className="text-xs text-zinc-500">Email</p>
                  <p className="mt-1 break-all text-sm">{portfolio.email}</p>
                </div>
              </a>

              <a
                href={`tel:${portfolio.phone}`}
                className="flex items-start gap-4 rounded-xl border border-white/10 p-4 transition hover:border-violet-400/40"
              >
                <Phone className="mt-1 shrink-0 text-violet-300" size={21} />
                <div>
                  <p className="text-xs text-zinc-500">Phone</p>
                  <p className="mt-1 text-sm">{portfolio.phone}</p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-xl border border-white/10 p-4">
                <MapPin className="mt-1 shrink-0 text-violet-300" size={21} />
                <div>
                  <p className="text-xs text-zinc-500">Location</p>
                  <p className="mt-1 text-sm">{portfolio.location}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={portfolio.github}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button"
                >
                  GitHub ↗
                </a>
                <a
                  href={portfolio.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
