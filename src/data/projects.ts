import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "01",
    title: "Nasiya",
    description:
      "A modern credit management platform designed for businesses to manage customers, debts, sales and payments.",
    category: "Web Application",
    year: "2026",
    technologies: ["Next.js", "Django", "PostgreSQL"],
    featured: true,
  },
  {
    id: "02",
    title: "Project Alpha",
    description:
      "A scalable digital platform focused on delivering a fast and intuitive user experience.",
    category: "Web Platform",
    year: "2026",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    featured: true,
  },
  {
    id: "03",
    title: "Project Beta",
    description:
      "A custom software solution built around a simple and efficient workflow.",
    category: "Software",
    year: "2025",
    technologies: ["React", "Django", "PostgreSQL"],
  },
];
