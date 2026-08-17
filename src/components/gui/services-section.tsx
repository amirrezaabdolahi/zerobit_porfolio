"use client";

import { motion } from "framer-motion";

import { services } from "@/data/services";
import ServiceCard from "./service-card";

export default function ServicesSection() {
  return (
    <section id="services" className="border-t py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="mb-4 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
            02 / Services
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            What we do.
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
