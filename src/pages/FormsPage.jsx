import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Forms from "../components/Forms";
import { motion } from "framer-motion";

export default function FormsPage() {
  return (
    <>
      <Navbar />

      <section className="bg-cyan-50 py-28 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-600">
            Descarga tus formularios
          </h1>
          <p className="text-gray-700 text-lg mt-4 max-w-3xl mx-auto">
            Aquí encontrarás los documentos necesarios para tu afiliación, declaración de salud y beneficios adicionales.
            Descárgalos fácilmente y preséntalos según el proceso correspondiente.
          </p>
        </motion.div>
      </section>

      <Forms />

      <div className="text-center py-10">
        <a
          href="/"
          className="inline-block bg-cyan-500 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-cyan-600 transition duration-300"
        >
          ← Volver al inicio
        </a>
      </div>

      <Footer />
    </>
  );
}
