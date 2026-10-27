
import { portfolio } from "@/data/portfolio";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080b14]/90 backdrop-blur-xl">
      <nav className="container-main flex min-h-[72px] items-center justify-between gap-4">
        <a href="#home" className="text-lg font-extrabold tracking-tight">
          <span className="gradient-text">Nowsin</span>
          <span className="text-white">.dev</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={`mailto:${portfolio.email}`}
          className="rounded-full border border-violet-400/40 px-4 py-2 text-sm font-semibold text-violet-200 transition hover:bg-violet-500/10"
        >
          Hire Me ↗
        </a>
      </nav>

      <div className="container-main flex gap-5 overflow-x-auto pb-3 md:hidden">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="shrink-0 text-xs text-zinc-400 hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
