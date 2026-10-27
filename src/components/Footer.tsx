
import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-7">
      <div className="container-main flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <a href="#home" className="font-bold">
          <span className="gradient-text">Nowsin</span>
          <span>.dev</span>
        </a>

        <p className="text-xs text-zinc-500">
          © 2026 {portfolio.name}. Built with Next.js.
        </p>

        <div className="flex items-center gap-5 text-sm text-zinc-400">
          <a
            href={portfolio.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-white"
          >
            GitHub <ArrowUpRight size={13} />
          </a>
          <a
            href={portfolio.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-white"
          >
            LinkedIn <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}
