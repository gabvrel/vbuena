import React from "react";
import { motion } from "framer-motion";

export default function OurPlans() {
  const plans = [
    {
      title: "🛡 Protección 10.000",
      image: "/images/proteccion10000.png",
      description: "Cobertura anual de hasta $10.000 en atención médica. Accede a una red abierta y cerrada de nivel 4, ideal para quienes buscan seguridad básica sin complicaciones. Tu salud protegida, siempre a tu alcance.",
    },
    {
      title: "🔒 Único 10.000",
      image: "/images/Unico10000.png",
      description: "El plan más eficiente y accesible. Cobertura de hasta $10.000 por evento (enfermedad, diagnóstico o incapacidad) en una red cerrada de nivel 2. Simple, claro y confiable.",
    },
    {
      title: "💙 Predilecto 20.000",
      image: "/images/Predilecto20000.png",
      description: "Un plan pensado para quienes quieren más tranquilidad. Cobertura de hasta $20.000 anuales, con acceso a red cerrada de nivel 3 y servicios médicos de calidad. Más respaldo, más bienestar.",
    },
    {
      title: "👑 Magno 30.000",
      image: "/images/Magno30000.png",
      description: "Nuestro plan más alto, exclusivo y completo. Cobertura de hasta $30.000 por enfermedad, diagnóstico o incapacidad, con acceso a nuestra Red Nivel 1, que incluye los hospitales más prestigiosos del país. Atención premium, sin límites innecesarios y con respaldo total.",
      highlight: "🟣 Porque cuando lo bueno no es suficiente, eliges MAGNO",
    },
    {
      title: "👥 Planes PYMES",
      image: "/images/PlanesPYMES.png",
      description: "Diseñados para cuidar a tu equipo sin descuidar tus finanzas. Coberturas de $5.000, $10.000 y $20.000, adaptadas al tamaño de tu empresa. Fáciles de contratar, potentes para proteger.",
    },
    {
      title: "🏢 Planes Corporativos a la Medida",
      image: "/images/PlanesCorporativosalaMedida.png",
      description: "Diseñamos planes exclusivos con coberturas integrales, beneficios ampliados y atención personalizada, adaptados a las necesidades de cada empresa. Incluyen servicios médicos, soluciones complementarias y soporte permanente. Protegemos lo más valioso de tu organización: tu talento humano.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/bg_landing.png')" }}>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-[28px] md:text-[42px] font-bold text-center text-cyan-600 mb-16 mt-4"
      >
        Cobertura completa que te acompaña en cada paso
        <p className="text-gray-600 text-base sm:text-md mt-2 font-medium">
          Planes diseñados para acompañarte según tu estilo de vida y tus necesidades reales.
        </p>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col text-left"
          >
            <img src={plan.image} alt={plan.title} className="rounded-md mb-4 w-full h-[180px] object-cover" />
            <h3 className="font-bold text-lg mb-3">{plan.title}</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">{plan.description}</p>
            {plan.highlight && <p className="text-sm text-cyan-600 font-semibold italic">{plan.highlight}</p>}
            <a
              href="https://wa.me/593987601828?text=Hola%2C%20estoy%20interesado%20en%20un%20plan%20y%20me%20gustaría%20recibir%20más%20información."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto bg-cyan-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-cyan-600 transition mt-6 self-start"
            >
              Solicitar
            </a>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full flex flex-col items-center justify-center text-center py-14 px-4"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-600">
          Usa tu plan desde el primer día, sin deducible anual
        </h2>
        <p className="text-base md:text-lg text-gray-700 mt-2">Con Vida Sana estás protegido para todo esto, y más:</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 text-left"
      >
        <div className="bg-white rounded-lg p-6 shadow">
          <h3 className="font-semibold text-cyan-600 text-lg mb-2">Emergencias y hospitalización</h3>
          <ul className="text-sm text-gray-700 list-disc pl-4 space-y-1">
            <li>Cirugías</li>
            <li>Ambulancias terrestres, aéreas o fluviales</li>
            <li>Internación médica</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg p-6 shadow">
          <h3 className="font-semibold text-cyan-600 text-lg mb-2">Atención preventiva</h3>
          <ul className="text-sm text-gray-700 list-disc pl-4 space-y-1">
            <li>Controles médicos periódicos</li>
            <li>Exámenes anuales completos</li>
            <li>Medicina general y familiar</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg p-6 shadow">
          <h3 className="font-semibold text-cyan-600 text-lg mb-2">Consultas especializadas</h3>
          <ul className="text-sm text-gray-700 list-disc pl-4 space-y-1">
            <li>Acceso directo a especialistas sin trámites engorrosos</li>
            <li>Citas ágiles y seguimiento personalizado</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg p-6 shadow">
          <h3 className="font-semibold text-cyan-600 text-lg mb-2">Cobertura médica completa</h3>
          <ul className="text-sm text-gray-700 list-disc pl-4 space-y-1">
            <li>Acceso a medicamentos</li>
            <li>Laboratorios y exámenes de imagen</li>
            <li>Atención domiciliaria</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
