"use client";

import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6"
      >
        Quer trabalhar comigo?
      </motion.h2>
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05 }}
        className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg transition"
      >
        Entre em Contato
      </motion.a>
    </section>
  );
}
