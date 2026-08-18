import { commands } from "@/data/commands";

export function parseCommand(input: string) {
  const command = input.trim().toLowerCase().split(" ")[0];
  const args = input.trim().toLowerCase().slice(command.length + 1);

  if (!command) {
    return null;
  }

  if (!(command in commands)) {
    return {
      type: "text" as const,
      content: `Command not found: ${command}\nType "help" to see available commands.`,
    };
  }

  return commands[command as keyof typeof commands].execute(args);
}
