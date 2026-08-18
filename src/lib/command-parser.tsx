import { commands } from "@/data/commands";

export function parseCommand(input: string) {
  const command = input.trim().toLowerCase();

  if (!command) {
    return null;
  }

  if (!(command in commands)) {
    return {
      type: "text" as const,
      content: `Command not found: ${command}\nType "help" to see available commands.`,
    };
  }

  return commands[command as keyof typeof commands].execute();
}
