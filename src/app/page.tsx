"use client";

import GuiMode from "@/components/gui/gui-mode";
import ModeSelectorPage from "@/components/shared/mode-selector";
import ModeTransition from "@/components/shared/mode-transition";
import { PortfolioMode } from "@/types/mode";
import { useState } from "react";

export default function Home() {
  const [mode, setMode] = useState<PortfolioMode>("selector");

  return (
    <ModeTransition mode={mode}>
      {mode === "gui" && <GuiMode />}
      {mode === "command" && (
        <main className="min-h-screen bg-background text-foreground">
          <p>command</p>
        </main>
      )}
      {mode === "selector" && (
        <main className="min-h-screen bg-background text-foreground">
          <ModeSelectorPage onSelect={setMode} />
        </main>
      )}
    </ModeTransition>
  );
}
