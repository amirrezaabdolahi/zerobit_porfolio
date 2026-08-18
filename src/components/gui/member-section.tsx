"use client";

import { motion } from "framer-motion";

import { team } from "@/data/team";
import MemberCard from "./member-card";

export default function TeamSection() {
  return (
    <section id="team" className="border-t py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <p className="mb-4 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
            05 / Team
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            People behind ZeroBit.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
              }}
            >
              <MemberCard member={member} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
