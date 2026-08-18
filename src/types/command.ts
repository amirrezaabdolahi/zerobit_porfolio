export type CommandName =
  | "help"
  | "about"
  | "projects"
  | "services"
  | "team"
  | "stack"
  | "clear"
  | "gui"
  | "echo";

export type CommandResult = {
  type: "text" | "clear" | "gui";
  content?: string;
};

export type CommandHandler = (arg: string) => CommandResult;
