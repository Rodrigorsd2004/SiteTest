"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          src="/img/meuavatar.png"
          alt="Sobre mim"
          className="w-64 h-64 rounded-full object-cover shadow-lg"
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Sobre Mim</h2>
          <p className="text-gray-700 mb-4">
            Desenvolvedor e designer apaixonado por criar experiências digitais de alta qualidade.
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
            <li>Desenvolvimento Frontend e Backend</li>
            <li>UI/UX Design moderno</li>
            <li>Consultoria técnica personalizada</li>
          </ul>
          <div className="border-l-4 border-blue-500 pl-4 space-y-2">
            <p><strong>2019:</strong> Início da carreira</p>
            <p><strong>2021:</strong> Primeiro grande projeto</p>
            <p><strong>2023:</strong> Projetos internacionais</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
