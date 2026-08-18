"use client";

import { ArrowUpRight, Terminal } from "lucide-react";

export default function GuiNavbar({
  setMode,
}: {
  setMode: (mode: "gui" | "command" | "selector") => void;
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <nav className="flex items-center justify-between rounded-2xl border bg-background/80 px-4 py-3 backdrop-blur-xl">
          <button
            type="button"
            className="font-mono text-sm font-semibold tracking-tight"
          >
            ZeroBit
          </button>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#about"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </a>

            <a
              href="#projects"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Projects
            </a>

            <a
              href="#services"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Services
            </a>

            <a
              href="#team"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Team
            </a>
          </div>

          <button
            type="button"
            className="group flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors hover:bg-accent"
          >
            <Terminal size={15} />

            <span
              className="hidden sm:inline"
              onClick={() => setMode("command")}
            >
              Command
            </span>

            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </button>
        </nav>
      </div>
    </header>
  );
}
