export type CommandName =
  | "help"
  | "about"
  | "projects"
  | "services"
  | "team"
  | "stack"
  | "clear"
  | "echo";

export type CommandResult = {
  type: "text" | "clear";
  content?: string;
};

export type CommandHandler = () => CommandResult;
