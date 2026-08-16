"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Terminal } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-3xl text-center"
        >
          <div className="mb-12">
            <p className="mb-4 font-mono text-sm text-muted-foreground">
              zerobit@portfolio:~$
            </p>

            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
              ZeroBit
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              We build modern digital products with code, creativity and
              purpose.
            </p>
          </div>

          <div>
            <p className="mb-6 text-sm text-muted-foreground">
              How do you want to explore?
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <button className="group rounded-xl border bg-card p-8 text-right transition-colors hover:bg-accent">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-2xl">◈</span>

                  <ArrowLeft
                    size={18}
                    className="text-muted-foreground transition-transform group-hover:-translate-x-1"
                  />
                </div>

                <h2 className="text-xl font-semibold">GUI Mode</h2>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Explore our team, projects and services visually.
                </p>
              </button>

              <button className="group rounded-xl border bg-card p-8 text-right transition-colors hover:bg-accent">
                <div className="mb-6 flex items-center justify-between">
                  <Terminal
                    size={24}
                    className="text-muted-foreground transition-colors group-hover:text-foreground"
                  />

                  <ArrowLeft
                    size={18}
                    className="text-muted-foreground transition-transform group-hover:-translate-x-1"
                  />
                </div>

                <h2 className="font-mono text-xl font-semibold">
                  Command Mode
                </h2>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Explore ZeroBit through an interactive terminal.
                </p>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
