export type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  year: string;
  technologies: string[];
  featured?: boolean;
  href?: string;
};
