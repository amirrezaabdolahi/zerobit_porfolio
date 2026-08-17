"use client";

import GuiNavbar from "./gui-navbar";
import GuiHero from "./gui-hero";
import ProjectsSection from "./projects-section";
import ServicesSection from "./services-section";

export default function GuiMode() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <GuiNavbar />

      <main>
        <GuiHero />
        <ProjectsSection />
        <ServicesSection />
      </main>
    </div>
  );
}
