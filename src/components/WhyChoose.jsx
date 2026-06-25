import React from 'react';
import { motion } from 'framer-motion';

export default function WhyChoose() {
  const benefits = [
    '• Atención personalizada desde el primer contacto',
    '• Planes flexibles que se adaptan a ti',
    '• Red médica seleccionada a nivel nacional',
    '• Cubrimos todas tus necesidades de salud bajo un mismo plan.',
    '• Telemedicina 24/7 desde cualquier lugar.',
  ];

  return (
    <section className="relative text-white py-16 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('/images/panecillo.png')" }} />
      <div className="absolute inset-0 bg-cyan-500 bg-opacity-50 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-10 drop-shadow-md text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          ¿Por qué elegir Vida Sana?
        </motion.h2>

        <motion.ul
          className="flex flex-wrap justify-center gap-x-10 gap-y-6 text-lg font-semibold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } }, hidden: {} }}
        >
          {benefits.map((item, index) => (
            <motion.li
              key={index}
              className="opacity-0"
              variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 20 } }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
