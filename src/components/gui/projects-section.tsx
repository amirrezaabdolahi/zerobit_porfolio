"use client";

import { motion } from "framer-motion";

import { projects } from "@/data/projects";
import ProjectCard from "./project-card";

export default function ProjectsSection() {
  return (
    <section id="projects" className="border-t py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <p className="mb-4 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
              01 / Projects
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Selected work.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-muted-foreground">
            A selection of products and digital experiences we've built.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
