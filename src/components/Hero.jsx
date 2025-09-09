"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 py-32 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center px-6"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
          Transformando Ideias em Projetos Reais
        </h2>
        <p className="text-gray-700 text-lg md:text-xl mb-8">
          Desenvolvedor Full-Stack, Designer UI/UX e Consultor Técnico.  
          Aqui você encontrará meus projetos, serviços e conquistas.
        </p>
        <a
          href="#projects"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
        >
          Ver Projetos
        </a>
      </motion.div>
    </section>
  );
}
