
import { portfolio } from "@/data/portfolio";
import { Award, ExternalLink, Sparkles } from "lucide-react";

export default function Certifications() {
  const certifications = [
    ...portfolio.certifications,
    {
      title: "Spoken English & Phonetics",
      provider: "Mentor's Spoken English & Phonetics",
      description:
        "Successfully completed Spoken English & Phonetics training, developing English speaking, pronunciation, communication, and phonetic skills.",
      certificate:
        "https://drive.google.com/file/d/1HC4unHDUZ6FFwMMdnLOZFCvCTGwhFNJP/view",
    },
    {
      title: "Full Stack Web Development (MERN)",
      provider: "Ostad",
      description:
        "Successfully completed Full Stack Web Development (MERN), gaining practical skills in MongoDB, Express.js, React.js, and Node.js.",
      certificate:
        "https://drive.google.com/file/d/1AXpzHyCHpF6zLkwCuXnIbaoxXwi85-YM/view",
    },
  ];

  return (
    <section
      id="certifications"
      className="relative scroll-mt-24 overflow-hidden px-6 py-24 sm:px-10 sm:py-28 lg:px-20"
    >
      <div className="pointer-events-none absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-violet-600/10 blur-[110px]" />
      <div className="pointer-events-none absolute right-[-120px] bottom-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.07] px-4 py-2 text-xs font-medium tracking-wider text-violet-300">
            <Sparkles size={14} />
            LEARNING & ACHIEVEMENTS
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            My{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            Certificates and courses that reflect my commitment to
            continuous learning and professional development.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.09] bg-[#10101b]/90 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/40 hover:shadow-[0_20px_70px_rgba(124,58,237,0.12)] sm:p-8"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/[0.08] via-transparent to-cyan-500/[0.04] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-7 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-gradient-to-br from-violet-500/20 to-cyan-500/10 text-violet-200 transition duration-500 group-hover:rotate-[-6deg] group-hover:scale-110">
                    <Award size={28} strokeWidth={1.6} />
                  </div>

                  <span className="font-mono text-xs text-zinc-500">
                    CERTIFICATE_{String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-violet-200">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm font-semibold text-violet-300">
                  {item.provider}
                </p>

                <p className="mt-5 min-h-14 text-sm leading-7 text-zinc-400">
                  {item.description}
                </p>

                <div className="my-7 h-px bg-gradient-to-r from-white/10 via-white/[0.04] to-transparent" />

                <a
                  href={item.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-950/30 transition duration-300 hover:-translate-y-0.5 hover:from-violet-500 hover:to-indigo-500"
                >
                  View Certificate
                  <ExternalLink size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
