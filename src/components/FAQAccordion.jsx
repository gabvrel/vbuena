import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQAccordion() {
  const faqs = [
    { question: "¿Qué es VidaSana y qué servicios ofrece?", answer: "VidaSana es una plataforma de medicina prepagada que ofrece planes de salud con acceso a consultas médicas, servicios hospitalarios y beneficios para el cuidado integral de la salud." },
    { question: "¿Cómo puedo contratar un plan de salud?", answer: "Puedes contratar un plan comunicandote con nuestro equipo de asesoría, o enviando tu información a través de nuestro formulario de contacto en la página web." },
    { question: "¿Puedo afiliar a mi familia en un mismo plan?", answer: "Sí, VidaSana ofrece planes familiares que permiten incluir a varios miembros bajo una misma cobertura." },
    { question: "¿Cómo puedo agendar una cita médica?", answer: "Puedes comunicarte con atención al cliente." },
    { question: "¿Qué clínicas o centros médicos están disponibles?", answer: "VidaSana cuenta con una red de clínicas y hospitales afiliados que puedes consultar dentro de la plataforma." },
    { question: "¿Qué hago si olvidé mi contraseña?", answer: "En la página de inicio de sesión selecciona 'Olvidé mi contraseña' y sigue las instrucciones." },
    { question: "¿Cómo puedo contactar soporte?", answer: "Puedes escribirnos mediante el formulario de contacto o a través de nuestros canales de atención." },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 6);
  const toggleFAQ = (index) => setActiveIndex(activeIndex === index ? null : index);

  return (
    <div className="space-y-4">
      {visibleFaqs.map((faq, index) => (
        <div key={index} className="bg-white border rounded-xl shadow-sm overflow-hidden">
          <button onClick={() => toggleFAQ(index)} className="w-full flex justify-between items-center p-5 text-left font-semibold text-lg hover:bg-gray-50 transition">
            {faq.question}
            <span className="text-cyan-500 text-2xl font-bold">{activeIndex === index ? "−" : "+"}</span>
          </button>

          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="px-5 pb-5 text-gray-600"
              >
                {faq.answer}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}

      {faqs.length > 4 && (
        <div className="text-center pt-4">
          <button onClick={() => setShowAll(!showAll)} className="text-cyan-600 font-semibold hover:underline">
            {showAll ? "Ver menos preguntas" : "Ver más preguntas"}
          </button>
        </div>
      )}
    </div>
  );
}
