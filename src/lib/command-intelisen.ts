import { commands } from "@/data/commands";

export const getSuggestions = (input: string) => {
  const trimmed = input.trimStart();
  const words = trimmed.split(/\s+/);
  const current = words[words.length - 1]?.toLowerCase() ?? "";

  if (words.length <= 1) {
    return Object.entries(commands)
      .filter(([name]) => name.startsWith(current))
      .map(([name]) => name);
  }

  if (words[0] === "echo" && words.length > 1) {
    return [];
  }

  return [];
};
