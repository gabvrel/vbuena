import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bgLanding from '../assets/images/bg_landing.png';

export default function Faq() {
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  const videos = [
    {
      title: "Cómo generar emisiones dentro del departamento de operaciones",
      url: "https://2dm6u.upcloudobjects.com/vidabuena-files/Tutoriales/Tutorial%20Emisiones%20VidaSana.mp4"
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = {
      nombre: formData.get("nombre"),
      email: formData.get("email"),
      numero: "N/A",
      mensaje: formData.get("mensaje")
    };

    try {
      const response = await fetch("http://localhost:5001/api/send-internal-help", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setEnviado(true);
        e.target.reset();
      } else {
        alert("Error enviando el mensaje");
      }
    } catch (error) {
      console.error(error);
      alert("Error de conexión con el servidor");
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <section
        className="py-16 px-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgLanding})` }}
      >
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-10 mb-12 flex justify-end"
        >
          <h2 className="inline-block bg-cyan-500 text-white text-4xl font-bold py-4 px-20 rounded-l-full ml-auto">
            Centro de Ayuda Interno
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto px-6 space-y-20">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-semibold mb-2">Videos Tutoriales</h3>
            <p className="text-gray-600 mb-6">Aprende a usar la plataforma con estos tutoriales rápidos.</p>

            <div className="flex gap-6 overflow-x-auto pb-4">
              {videos.map((video, index) => (
                <div key={index} className="min-w-[320px] bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition">
                  <iframe
                    className="w-full h-52 rounded-md"
                    src={video.url}
                    title={video.title}
                    allowFullScreen
                  />
                  <h4 className="mt-3 font-semibold text-gray-700">{video.title}</h4>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">¿Tienes otra duda?</h3>
            <p className="text-gray-600 mb-6">Escríbenos y el equipo de soporte te responderá lo antes posible.</p>

            {enviado && (
              <div className="bg-green-100 text-green-700 p-4 rounded-md mb-4">
                ✅ Tu mensaje fue enviado correctamente.
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
              <input name="nombre" type="text" placeholder="Tu nombre" required className="border p-3 rounded-md" />
              <input name="email" type="email" placeholder="Tu correo" required className="border p-3 rounded-md" />
              <textarea name="mensaje" placeholder="Escribe tu duda..." rows="4" required className="border p-3 rounded-md md:col-span-2" />
              <button type="submit" disabled={loading} className="bg-cyan-500 text-white py-3 px-6 rounded-md hover:bg-cyan-600 transition md:col-span-2">
                {loading ? "Enviando..." : "Enviar"}
              </button>
            </form>
          </motion.div>

        </div>
      </section>

      <Footer />
    </>
  );
}
