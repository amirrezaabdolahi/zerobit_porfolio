"use client";

import ModeSelectorPage from "@/components/shared/mode-selector";
import { motion } from "framer-motion";
import { ArrowLeft, Terminal } from "lucide-react";

export default function Home() {
  const handleModeSelect = (mode: "gui" | "command") => {
    console.log(`Selected mode: ${mode}`);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <ModeSelectorPage onSelect={handleModeSelect} />
    </main>
  );
}
