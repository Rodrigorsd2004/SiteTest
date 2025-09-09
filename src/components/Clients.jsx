"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import clientsData from "../data/clients";

export default function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 4; // Logos visíveis
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
    <section id="clients" className="py-20 bg-gray-50 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6 relative flex items-center">
        {/* Botão esquerda */}
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          className={`absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow transition z-10
            ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}
        >
          <FaChevronLeft />
        </button>

        <div className="flex-1 flex justify-center overflow-hidden">
          <div className="flex gap-8">
            {visibleClients.map((logo, idx) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0 h-16 w-48 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`Cliente ${currentIndex + idx + 1}`}
                  className="h-full object-contain  hover:scale-96 transition duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Botão direita */}
        <button
          onClick={next}
          disabled={currentIndex === maxIndex}
          className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow transition z-10
            ${currentIndex === maxIndex ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
