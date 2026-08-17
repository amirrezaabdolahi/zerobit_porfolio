"use client";

import { ArrowUpRight } from "lucide-react";

import type { Service } from "@/types/service";

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-accent sm:p-8">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-muted-foreground">
          {service.id}
        </span>

        <ArrowUpRight
          size={18}
          className="text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground"
        />
      </div>

      <h3 className="mt-10 text-xl font-semibold">{service.title}</h3>

      <p className="mt-3 text-sm leading-7 text-muted-foreground">
        {service.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {service.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md border px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
          >
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
}
