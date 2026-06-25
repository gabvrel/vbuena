import React from "react";
import { motion } from "framer-motion";

const forms = [
  { title: "Formulario de enrolamiento", description: "Afíliate o actualiza tus datos de forma rápida y segura.", file: "/pdfs/formulario_de_enrolamiento_vida_buena.pdf" },
  { title: "Formulario de Declaración de Salud", description: "Completa este formulario para garantizar tu cobertura médica sin contratiempos.", file: "/pdfs/formulario_de_declaracion_salud_vida_buena.pdf" },
  { title: "Beneficios agregados exequial, vida, dental", description: "Accede a servicios adicionales que complementan tu cobertura y brindan mayor tranquilidad a ti y tu familia.", file: "/pdfs/beneficios_agregados_vida_buena.pdf" },
  { title: "Formulario de Pré-autorización", description: "Formulario de Pré-autorización Hospitalizaciones y Tratamientos Ambulatorios.", file: "/pdfs/Formulario_de_preautorizacion.pdf" },
  { title: "Formulario de Reembolso", description: "Formulario de Solicitud de Reembolso.", file: "/pdfs/Formulario_de_reembolso.pdf" },
  { title: "Formulario de Debito", description: "Actualiza tu forma de debito - pago de forma rapida y segura.", file: "/pdfs/Formulario_de_debito_pago.pdf" },
];

export default function Forms() {
  return (
    <section id="formularios" className="py-16 px-4 min-h-[40vh] bg-white">
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-cyan-500 text-3xl md:text-4xl font-bold">Formularios</h2>
        <p className="text-gray-600 mt-2 text-base md:text-lg">Descarga dando clic en el formulario que necesites.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {forms.map((form, index) => (
          <motion.a
            key={index}
            href={form.file}
            download
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center gap-4 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-gray-50 hover:bg-gray-100"
          >
            <img src="/images/pdf_icon.png" alt="PDF Icon" className="w-12 h-12" />
            <div>
              <h3 className="font-semibold text-lg text-gray-800">{form.title}</h3>
              <p className="text-gray-500 text-sm">{form.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
