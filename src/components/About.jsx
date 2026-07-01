import React from 'react';
import { motion } from 'framer-motion';
import bgLanding from '../assets/images/bg_landing.png';
import nosotrosImg from '../assets/images/nosotros.png';

export default function About() {
  return (
    <section className="relative bg-cover bg-center py-32" style={{ backgroundImage: `url(${bgLanding})` }}>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-6"
      >
        <h2 className="inline-block bg-cyan-500 text-white text-3xl font-bold py-4 px-8 rounded-r-full shadow-md">
          Sobre nosotros
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col justify-center px-4 md:px-0"
        >
          <h3 className="text-cyan-600 text-3xl font-semibold mb-4">¿Sobre Vida Sana?</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            En Vida Sana llevamos más de 29 años cuidando la salud de las personas en Ecuador,
            ofreciendo servicios de medicina prepagada que combinan confianza, cercanía y simplicidad.
            <br /><br />
            Más de 12.000 familias confían en nosotros porque saben que estamos ahí cuando más nos
            necesitan, con un equipo de profesionales de alto nivel, comprometido con brindar atención
            médica oportuna, humana y de calidad.
            <br /><br />
            Transformamos lo tradicional con procesos ágiles, tecnología útil y una atención empática que
            se adapta a la vida real. Porque tu salud merece ser simple, confiable y siempre acompañada.
            <br /><br />
            <strong>Vida Sana:</strong> el plan que te cuida sin complicarte.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="flex justify-center px-4 md:px-0"
        >
          <img src={nosotrosImg} alt="Equipo VidaSana" className="rounded-lg shadow-md max-w-full h-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          className="md:col-span-2 mt-16 flex justify-center px-4"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl text-center text-cyan-600 font-semibold max-w-3xl leading-snug">
            Confianza, dedicación y humanidad: lo que encontrarás detrás de cada atención que brindamos.
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
