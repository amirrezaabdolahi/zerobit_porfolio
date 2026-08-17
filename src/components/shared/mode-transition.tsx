"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";

type ModeTransitionProps = {
  mode: string;
  children: ReactNode;
};

export default function ModeTransition({
  mode,
  children,
}: ModeTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={mode}
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, filter: "blur(10px)" }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className="min-h-screen overflow-hidden!"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
