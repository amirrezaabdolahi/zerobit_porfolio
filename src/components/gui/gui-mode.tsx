"use client";

import GuiNavbar from "./gui-navbar";
import GuiHero from "./gui-hero";

export default function GuiMode() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <GuiNavbar />

      <main>
        <GuiHero />
      </main>
    </div>
  );
}