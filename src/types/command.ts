export type CommandName =
  | "help"
  | "about"
  | "projects"
  | "services"
  | "team"
  | "stack"
  | "clear"
  | "gui"
  | "pwd"
  | "ls"
  | "mkdir"
  | "echo";

export type CommandResult = {
  type: "text" | "clear" | "gui" | "ls" | "mkdir";
  content?: string;
};

export type CommandHandler = (arg: string) => CommandResult;
