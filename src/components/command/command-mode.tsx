"use client";

import { useState } from "react";

import { parseCommand } from "@/lib/command-parser";

type TerminalLine = {
  id: number;
  command?: string;
  output?: string;
};

export default function CommandMode() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>([]);
  const [lineId, setLineId] = useState(0);

  const handleSubmit = () => {
    const command = input.trim();

    if (!command) {
      return;
    }

    const result = parseCommand(command);

    if (!result) {
      return;
    }

    if (result.type === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

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

        <div className="flex flex-1 flex-col overflow-y-auto p-5 font-mono text-sm sm:p-8">
          <div className="mb-6">
            <p className="text-muted-foreground">Welcome to ZeroBit.</p>

            <p className="mt-1 text-muted-foreground">
              Type <span className="text-foreground">help</span> to see
              available commands.
            </p>
          </div>

          {history.map((line) => (
            <div key={line.id} className="mb-5">
              <div className="flex gap-2">
                <span className="text-muted-foreground">
                  zerobit@portfolio:~$
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

          <div className="mt-auto flex gap-2">
            <span className="shrink-0 text-muted-foreground">
              zerobit@portfolio:~$
            </span>

            <input
              autoFocus
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleSubmit();
                }
              }}
              className="min-w-0 flex-1 bg-transparent outline-none"
              spellCheck={false}
              autoComplete="off"
            />

            <span className="animate-pulse">▋</span>
          </div>
        </div>
      </div>
    </main>
  );
}
