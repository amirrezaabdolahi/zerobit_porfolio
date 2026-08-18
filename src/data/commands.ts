import type { CommandHandler, CommandName } from "@/types/command";

export const commands: Record<
  CommandName,
  {
    description: string;
    execute: CommandHandler;
  }
> = {
  help: {
    description: "Show available commands",
    execute: () => ({
      type: "text",
      content: [
        "Available commands:",
        "",
        "help       Show available commands",
        "about      Learn more about ZeroBit",
        "projects   View our projects",
        "services   View our services",
        "team       Meet the team",
        "stack      View our technology stack",
        "clear      Clear terminal",
        "gui        Switch to GUI mode",
        "echo       Echo text",
        "pwd        Print working directory",
        "ls         List files in current directory",
      ].join("\n"),
    }),
  },

  about: {
    description: "Learn more about ZeroBit",
    execute: () => ({
      type: "text",
      content:
        "ZeroBit is a software development team focused on building modern digital products.",
    }),
  },

  projects: {
    description: "View our projects",
    execute: () => ({
      type: "text",
      content: "Projects will be loaded here...",
    }),
  },

  services: {
    description: "View our services",
    execute: () => ({
      type: "text",
      content: "Services will be loaded here...",
    }),
  },

  team: {
    description: "Meet the team",
    execute: () => ({
      type: "text",
      content: "Team members will be loaded here...",
    }),
  },

  stack: {
    description: "View our technology stack",
    execute: () => ({
      type: "text",
      content: "Next.js, React, TypeScript, Django, PostgreSQL, Docker",
    }),
  },

  echo: {
    description: "Echo text",
    execute: (args: string) => ({
      type: "text",
      content: args,
    }),
  },

  gui: {
    description: "Switch to GUI mode",
    execute: () => ({
      type: "gui",
    }),
  },

  pwd: {
    description: "Print working directory",
    execute: () => ({
      type: "text",
      content: "/home/zerobit",
    }),
  },

  ls: {
    description: "List files in current directory",
    execute: () => ({
      type: "text",
      content: "",
    }),
  },

  mkdir: {
    description: "Create a new directory",
    execute: (args: string) => ({
      type: "mkdir",
      content: args,
    }),
  },

  clear: {
    description: "Clear terminal",
    execute: () => ({
      type: "clear",
    }),
  },
};
