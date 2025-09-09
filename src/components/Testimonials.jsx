"use client";

import { motion } from "framer-motion";
import testimonialsData from "../data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Depoimentos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
            >
              <p className="text-gray-700 mb-4">&quot;{t.text}&quot;</p>
              <p className="font-semibold text-gray-900">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
