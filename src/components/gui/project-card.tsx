"use client";

import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-accent sm:p-8">
      <div className="flex items-start justify-between gap-6">
        <div>
          <span className="font-mono text-xs text-muted-foreground">
            {project.id}
          </span>

          <h3 className="mt-4 text-2xl font-semibold tracking-tight">
            {project.title}
          </h3>
        </div>

        <div className="flex size-10 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
          <ArrowUpRight size={17} />
        </div>
      </div>

      <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
        {project.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md border px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between border-t pt-4">
        <span className="text-xs text-muted-foreground">
          {project.category}
        </span>

        <span className="font-mono text-xs text-muted-foreground">
          {project.year}
        </span>
      </div>
    </article>
  );
}
