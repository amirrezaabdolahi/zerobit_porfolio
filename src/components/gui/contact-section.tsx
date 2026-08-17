"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="border-t py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border bg-card p-8 sm:p-12 lg:p-16"
        >
          <div className="relative z-10 max-w-3xl">
            <div className="mb-6 flex size-11 items-center justify-center rounded-xl border bg-background">
              <Mail size={19} />
            </div>

            <p className="mb-4 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
              04 / Contact
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              Have an idea?
              <br />
              <span className="text-muted-foreground">
                Let's build it.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              Tell us what you're building, what problem you're trying to
              solve, or even just the idea that's been on your mind.
            </p>

            <a
              href="mailto:hello@zerobit.dev"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              Get in touch

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full border opacity-20" />

          <div className="pointer-events-none absolute -bottom-32 -right-10 size-96 rounded-full border opacity-10" />
        </motion.div>
      </div>
    </section>
  );
}