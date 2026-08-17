"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "01",
    label: "Team",
  },
  {
    value: "∞",
    label: "Ideas",
  },
  {
    value: "100%",
    label: "Commitment",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="border-t py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-4 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
              03 / About
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Small team.
              <br />
              <span className="text-muted-foreground">
                Big ambition.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="space-y-6 text-base leading-8 text-muted-foreground">
              <p>
                ZeroBit is a software development team focused on creating
                useful, reliable and thoughtfully designed digital products.
              </p>

              <p>
                We believe great software starts with understanding the
                problem, not choosing the technology. We combine product
                thinking, design and engineering to build solutions that
                actually solve problems.
              </p>

              <p>
                From early ideas to production-ready systems, we care about
                every layer of the product.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 border-y">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-r px-4 py-6 first:border-r-0 last:border-r-0"
                >
                  <div className="font-mono text-2xl font-semibold">
                    {stat.value}
                  </div>

                  <div className="mt-1 text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}