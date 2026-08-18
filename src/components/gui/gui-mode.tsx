"use client";

import GuiNavbar from "./gui-navbar";
import GuiHero from "./gui-hero";
import ProjectsSection from "./projects-section";
import ServicesSection from "./services-section";
import AboutSection from "./about-section";
import ContactSection from "./contact-section";
import GuiFooter from "./footer-section";
import TeamSection from "./member-section";

export default function GuiMode() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <GuiNavbar />

      <main>
        <GuiHero />
        <ProjectsSection />
        <TeamSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
        <GuiFooter />
      </main>
    </div>
  );
}
