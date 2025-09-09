"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import clientsData from "../data/clients";

export default function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 4; // Quantos logos aparecem de cada vez
  const maxIndex = clientsData.length - visibleCount;

  const next = () => {
    if (currentIndex < maxIndex) setCurrentIndex(currentIndex + 1);
  };

  const prev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const visibleClients = clientsData.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 relative">
        <h2 className="text-3xl font-bold text-center mb-12">Clientes & Parceiros</h2>

        {/* Botão esquerda */}
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          className={`absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow transition z-10
            ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}
        >
          <FaChevronLeft />
        </button>

        {/* Botão direita */}
        <button
          onClick={next}
          disabled={currentIndex === maxIndex}
          className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow transition z-10
            ${currentIndex === maxIndex ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}
        >
          <FaChevronRight />
        </button>

        {/* Container dos logos sem scrollbar */}
        <div className="flex gap-8 overflow-hidden">
          {visibleClients.map((logo, idx) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0 h-16 w-48 flex items-center justify-center"
            >
              <img
                src={logo}
                alt={`Cliente ${currentIndex + idx + 1}`}
                className="h-full object-contain grayscale hover:grayscale-0 transition duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
