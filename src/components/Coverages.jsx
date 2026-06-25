import React from "react";
import { motion } from "framer-motion";

export default function Coverages() {
  const included = [
    "Consultas médicas con especialistas",
    "Emergencias médicas 24/7",
    "Hospitalización y cirugías",
    "Exámenes de laboratorio y diagnóstico",
    "Medicamentos recetados",
    "Telemedicina y consultas virtuales",
  ];

  const excluded = [
    "Tratamientos experimentales no aprobados",
    "Cirugías estéticas con fines no terapéuticos",
    "Enfermedades preexistentes no declaradas",
    "Tratamientos de fertilidad avanzados",
    "Lesiones causadas en deportes extremos",
    "Suplementos nutricionales no prescritos",
  ];

  return (
    <section className="bg-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-cyan-600 text-center mb-16"
        >
          Cobertura completa para tu tranquilidad
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="bg-green-50 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-green-700 mb-4">✅ Lo que sí cubrimos</h3>
            <ul className="space-y-3 list-disc list-inside text-gray-800">
              {included.map((item, index) => (
                <motion.li key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="pl-1">
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="bg-red-50 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-red-700 mb-4">❌ Lo que no cubrimos</h3>
            <ul className="space-y-3 list-disc list-inside text-gray-800">
              {excluded.map((item, index) => (
                <motion.li key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="pl-1">
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
