"use client";

import { stack } from "@/data/stack";

export default function StackSection() {
  return (
    <section className="border-t py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-4 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
          06 / Stack
        </p>

        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Technologies we use.
        </h2>

        <div className="mt-12 grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {stack.map((tech) => (
            <div
              key={tech.name}
              className="rounded-xl border p-4 text-center transition hover:bg-accent"
            >
              <div className="font-medium">{tech.name}</div>

              <div className="mt-1 text-xs text-muted-foreground">
                {tech.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
