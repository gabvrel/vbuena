import React from 'react';
import { motion } from 'framer-motion';

export default function Values() {
  return (
    <section className="relative bg-cover bg-center py-14 px-4 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h3 className="text-cyan-600 text-3xl font-semibold mb-4">Nuestra misión</h3>
          <p className="text-gray-700 text-2xl leading-relaxed">
            Cuidamos la salud de las personas ofreciendo servicios confiables, accesibles y centrados en su bienestar real. Lo hacemos rompiendo esquemas tradicionales, con procesos ágiles, tecnología útil y una atención empática que acompaña cada momento de la vida de nuestros afiliados.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-cyan-600 text-3xl font-semibold mb-4">Nuestra visión</h3>
          <p className="text-gray-700 text-2xl leading-relaxed">
            Convertirnos en una de las 10 principales compañías de medicina prepagada del país, liderando con innovación y siendo reconocidos por transformar la experiencia del afiliado a través de soluciones simples, cercanas y diferentes, impulsadas por tecnología, creatividad y un propósito humano.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
