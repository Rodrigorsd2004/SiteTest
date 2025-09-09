"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../data/projects";

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrentIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );

  return (
    <div className="relative w-full flex justify-center items-center my-12">
      <div className="w-full max-w-4xl h-[400px] relative flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          🚀 Meus Projetos
        </h2>

        {/* Carrossel */}
        <div className="relative w-full h-[300px] overflow-hidden rounded-xl shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full h-full relative"
            >
              {/* Imagem */}
              <img
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                className="w-full h-full object-cover rounded-xl"
              />

              {/* Gradiente + texto */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 rounded-b-xl">
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {projects[currentIndex].title}
                </h3>
                <p className="text-gray-200 text-sm mt-1">
                  {projects[currentIndex].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Botão esquerda */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 left-3 bg-white/70 hover:bg-white backdrop-blur-md hover:scale-110 transition p-3 rounded-full shadow-lg"
          >
            <FaChevronLeft className="text-gray-700 text-lg" />
          </button>

          {/* Botão direita */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-3 bg-white/70 hover:bg-white backdrop-blur-md hover:scale-110 transition p-3 rounded-full shadow-lg"
          >
            <FaChevronRight className="text-gray-700 text-lg" />
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-4 space-x-2">
          {projects.map((_, index) => (
            <motion.span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`cursor-pointer w-3 h-3 rounded-full ${
                index === currentIndex
                  ? "bg-gradient-to-r from-blue-500 to-purple-500"
                  : "bg-gray-300"
              }`}
              animate={{ scale: index === currentIndex ? 1.2 : 1 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
