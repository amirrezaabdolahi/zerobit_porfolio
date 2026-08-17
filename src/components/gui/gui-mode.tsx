"use client";

import GuiNavbar from "./gui-navbar";
import GuiHero from "./gui-hero";
import ProjectsSection from "./projects-section";

export default function GuiMode() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <GuiNavbar />

      <main>
        <GuiHero />
        <ProjectsSection />
      </main>
    </div>
  );
}
