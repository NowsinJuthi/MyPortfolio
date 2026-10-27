
"use client";

import { useEffect, useState } from "react";
import {
  Code2,
  Braces,
  Database,
  Layers3,
  Cpu,
  Globe,
  Terminal,
  Zap,
} from "lucide-react";

const technologies = [
  { name: "React.js", color: "#61DAFB", Icon: Code2 },
  { name: "Node.js", color: "#86EFAC", Icon: Terminal },
  { name: "MongoDB", color: "#6EE7B7", Icon: Database },
  { name: "Next.js", color: "#FFFFFF", Icon: Layers3 },
  { name: "TypeScript", color: "#60A5FA", Icon: Braces },
  { name: "Express.js", color: "#FDE68A", Icon: Cpu },
  { name: "Tailwind CSS", color: "#67E8F9", Icon: Zap },
  { name: "JavaScript", color: "#FACC15", Icon: Globe },
];

const particles = [
  { x: "14%", y: "24%", delay: "0s" },
  { x: "82%", y: "18%", delay: "1s" },
  { x: "88%", y: "72%", delay: "2s" },
  { x: "20%", y: "84%", delay: "0.5s" },
  { x: "50%", y: "8%", delay: "1.5s" },
  { x: "8%", y: "58%", delay: "2.5s" },
];

export default function TechAnimation() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % technologies.length);
    }, 2200);

    return () => window.clearInterval(timer);
  }, []);

  const active = technologies[activeIndex];
  const ActiveIcon = active.Icon;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[360px] overflow-hidden rounded-[30px] border border-white/[0.10] bg-[#0c0b19] shadow-[0_0_80px_rgba(124,58,237,0.12)]">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.20),transparent_65%)]" />

      <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-violet-600/15 blur-[70px]" />
      <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-cyan-500/10 blur-[70px]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Floating particles */}
      {particles.map((particle, index) => (
        <span
          key={index}
          className="absolute h-1 w-1 animate-pulse rounded-full bg-violet-300 shadow-[0_0_12px_rgba(167,139,250,0.9)]"
          style={{
            left: particle.x,
            top: particle.y,
            animationDelay: particle.delay,
          }}
        />
      ))}

      {/* Orbit rings */}
      <div className="absolute left-1/2 top-1/2 aspect-square w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/25 animate-[spin_24s_linear_infinite]">
        <span className="absolute left-[18%] top-[-4px] h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_14px_3px_rgba(167,139,250,0.65)]" />
      </div>

      <div className="absolute left-1/2 top-1/2 aspect-square w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20 animate-[spin_18s_linear_infinite_reverse]">
        <span className="absolute bottom-[14%] right-[-4px] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_3px_rgba(103,232,249,0.5)]" />
      </div>

      {/* Center icon */}
      <div className="absolute left-1/2 top-1/2 z-10 flex h-[35%] w-[35%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[30px] border border-violet-300/30 bg-gradient-to-br from-violet-500/25 via-[#21163f] to-cyan-500/10 shadow-[0_0_55px_rgba(139,92,246,0.20)]">
        <div
          className="absolute inset-0 rounded-[30px] opacity-40"
          style={{
            background: `radial-gradient(circle, ${active.color}22, transparent 75%)`,
          }}
        />

        <ActiveIcon
          key={active.name}
          size={60}
          strokeWidth={1.5}
          className="relative animate-[pulse_2s_ease-in-out_infinite] transition-colors duration-700"
          style={{
            color: active.color,
            filter: `drop-shadow(0 0 12px ${active.color}66)`,
          }}
        />
      </div>

      {/* Changing technology badge */}
      <div
        key={active.name}
        className="absolute left-1/2 top-[10%] z-20 -translate-x-1/2 animate-[fadeIn_0.7s_ease-out_both]"
      >
        <div
          className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#171629]/90 px-4 py-2.5 shadow-xl backdrop-blur-xl"
          style={{
            boxShadow: `0 0 28px ${active.color}18`,
          }}
        >
          <span
            className="h-2 w-2 rounded-full"
            style={{
              backgroundColor: active.color,
              boxShadow: `0 0 10px ${active.color}`,
            }}
          />
          <span
            className="whitespace-nowrap text-sm font-semibold"
            style={{ color: active.color }}
          >
            {active.name}
          </span>
        </div>
      </div>

      {/* Bottom status */}
      <div className="absolute bottom-[8%] left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/[0.08] bg-black/25 px-3 py-2 backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        <span className="text-[10px] font-medium tracking-[0.18em] text-zinc-300 sm:text-xs">
          FULL-STACK DEVELOPER
        </span>
      </div>

      {/* Small corner label */}
      <span className="absolute bottom-4 right-5 text-[9px] tracking-[0.2em] text-white/25">
        TECH STACK · 2026
      </span>
    </div>
  );
}
