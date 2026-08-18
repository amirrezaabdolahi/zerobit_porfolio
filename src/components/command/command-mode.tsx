"use client";

import { useEffect, useRef, useState } from "react";

import { parseCommand } from "@/lib/command-parser";
import { commands } from "@/data/commands";
import { getSuggestions } from "@/lib/command-intelisen";

type TerminalLine = {
  id: number;
  command?: string;
  output?: string;
};

export default function CommandMode({
  setMode,
}: {
  setMode: (mode: "gui" | "command" | "selector") => void;
}) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>([]);
  const [lineId, setLineId] = useState(0);
  const [ls, setLs] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const intelisen = input.trim().length > 0 ? getSuggestions(input) : [];

  console.log(intelisen);

  const handleSubmit = () => {
    const command = input.trim();

    if (!command) {
      return;
    }

    const result = parseCommand(command);

    if (!result) {
      return;
    }

    if (result.type === "gui") {
      setMode("gui");
      return;
    }

    if (result.type === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    // if (result.type === "mkdir") {
    //   setLs((prev) => [...prev, result.content]);
    //   return;
    // }

    setHistory((current) => [
      ...current,
      {
        id: lineId,
        command,
        output: result.content,
      },
    ]);

    setLineId((current) => current + 1);
    setInput("");
  };

  return (
    <main className="min-h-screen bg-background p-4 text-foreground sm:p-8">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-6xl flex-col overflow-hidden rounded-2xl border bg-card shadow-2xl sm:min-h-[calc(100vh-4rem)]">
        {/* Terminal Header */}

        <header className="flex items-center gap-2 border-b px-4 py-3">
          <span className="size-3 rounded-full bg-red-500/70" />
          <span className="size-3 rounded-full bg-yellow-500/70" />
          <span className="size-3 rounded-full bg-green-500/70" />

          <span className="ml-3 font-mono text-xs text-muted-foreground">
            zerobit — terminal
          </span>
        </header>

        {/* Terminal Body */}

        <div
          className="flex flex-1 flex-col overflow-y-auto p-5 font-mono text-sm sm:p-8 overflow-hidden"
          onClick={() => {
            inputRef.current?.focus();
          }}
        >
          <div className="mb-6">
            <p className="text-muted-foreground">Welcome to ZeroBit.</p>

            <p className="mt-1 text-muted-foreground">
              Type <span className="text-foreground">help</span> to see
              available commands.
            </p>
            <p className="mt-1 text-muted-foreground">
              or type <span className="text-foreground">gui</span> to switch to
              GUI mode.
            </p>
          </div>

          {history.map((line) => (
            <div key={line.id} className="mb-5">
              <div className="flex gap-2">
                <span className="text-muted-foreground">
                  <span className="text-success">zerobit</span>@portfolio:~$
                </span>

                <span>{line.command}</span>
              </div>

              {line.output && (
                <pre className="mt-2 whitespace-pre-wrap leading-7 text-muted-foreground">
                  {line.output}
                </pre>
              )}
            </div>
          ))}

          {/* Input */}

          <div className="flex gap-2">
            <span className="shrink-0 text-muted-foreground">
              <span className="text-success">zerobit</span>@portfolio:~$
            </span>

            <input
              autoFocus
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleSubmit();
                }
                if (event.key === "Tab") {
                  event.preventDefault();
                  if (intelisen.length > 0) {
                    setInput(intelisen[0]);
                  }
                }
              }}
              className="min-w-0 flex-1 bg-transparent outline-none"
              spellCheck={false}
              autoComplete="off"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
