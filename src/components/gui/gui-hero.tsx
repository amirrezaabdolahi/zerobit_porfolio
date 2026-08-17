"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function GuiHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6 pb-20 pt-32">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-8 bg-foreground" />

              <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
                Digital Product Team
              </span>
            </div>

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
              We build
              <br />
              <span className="text-muted-foreground">digital products.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              ZeroBit is a software development team focused on building modern,
              scalable and meaningful digital experiences.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <button
                type="button"
                className="group flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                Explore Projects
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>

              <button
                type="button"
                className="rounded-xl border px-5 py-3 text-sm font-medium transition-colors hover:bg-accent"
              >
                Start a Project
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-24 flex items-center justify-between border-t pt-5"
        >
          <span className="font-mono text-xs text-muted-foreground">
            Based in the digital world
          </span>

          <div className="flex items-center gap-2 text-muted-foreground">
            <ArrowDown size={14} />

            <span className="font-mono text-xs">Scroll to explore</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
