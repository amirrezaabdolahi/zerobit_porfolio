"use client";

import { ArrowLeft, ArrowUpRight, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { PortfolioMode } from "@/types/mode";

export default function ModeSelectorPage({
  onSelect,
}: {
  onSelect: (mode: Exclude<PortfolioMode, "selector">) => void;
}) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-full max-w-3xl text-center"
        >
          <div className="mb-12">
            <p className="mb-4 font-mono text-sm text-muted-foreground">
              zerobit@portfolio:~$
            </p>

            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl ">
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
              <ModeCard
                title="Command Mode"
                description="Explore ZeroBit through an interactive terminal."
                icon={
                  <ArrowUpRight
                    size={20}
                    className="text-muted-foreground transition-colors group-hover:text-foreground"
                  />
                }
                terminal={true}
                onClick={() => onSelect("command")}
              />
              <ModeCard
                title="GUI Mode"
                description="Explore our team, projects visually."
                icon={
                  <Terminal
                    size={20}
                    className="text-muted-foreground transition-colors group-hover:text-foreground"
                  />
                }
                terminal={false}
                onClick={() => onSelect("gui")}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

type ModeCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  terminal?: boolean;
  onClick: () => void;
};

function ModeCard({
  title,
  description,
  icon,
  terminal,
  onClick,
}: ModeCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="group relative overflow-hidden rounded-2xl border bg-card p-6 text-left transition-colors hover:bg-accent sm:p-7"
    >
      <div className="mb-10 flex items-center justify-between">
        <div className="flex size-10 items-center justify-center rounded-lg border bg-background text-muted-foreground transition-colors group-hover:text-foreground">
          {icon}
        </div>

        <span className="font-mono text-xs text-muted-foreground">
          {terminal ? ">_" : "01"}
        </span>
      </div>

      <h2
        className={
          terminal ? "font-mono text-lg font-semibold" : "text-lg font-semibold"
        }
      >
        {title}
      </h2>

      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        {description}
      </p>

      <div className="mt-8 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
    </motion.button>
  );
}
