"use client";

import { Mail, ArrowUpRight, GitBranch, Link } from "lucide-react";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/zerobitdev",
    icon: GitBranch,
    color: "purple",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/zerobitdev",
    icon: Link,
    color: "blue",
  },
  {
    label: "Email",
    href: "mailto:hello@zerobit.dev",
    icon: Mail,
    color: "red",
  },
];

export default function GuiFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="font-mono text-sm font-semibold">ZeroBit</div>

            <p className="mt-2 max-w-sm text-xs leading-6 text-muted-foreground">
              Building modern digital products with code, creativity and
              purpose.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {links.map(({ label, href, icon: Icon, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center gap-2 rounded-lg border px-3 py-2 text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <Icon size={14} className={`${color ? `text-${color}` : ""}`} />

                {label}

                <ArrowUpRight
                  size={12}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t pt-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} ZeroBit. All rights reserved.
          </span>

          <span className="font-mono">Built with code.</span>
        </div>
      </div>
    </footer>
  );
}
