import React, { useState } from "react";
import { motion } from "framer-motion";
import "../css/Hero.css";
import QuoteForm from "../components/QuoteForm";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e) => { e.preventDefault(); setIsModalOpen(true); };
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="hero-section" id="inicio">
      <div className="hero-content text-center">
        <div className="hero-grid">
          <div className="hero-text">
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Tu salud, con respaldo real.
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              Una experiencia diseñada para cuidarte siempre
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <a href="#cotizacion" className="btn-primary" onClick={openModal}>
                Solicita tu cotización
              </a>
              <a href="/planes" className="btn-secondary">
                Explora tu plan ideal
              </a>
              <a
                href="https://vidabuena.doctorone.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Asistencia Médica Virtual
              </a>
            </motion.div>

            <QuoteForm isOpen={isModalOpen} onClose={closeModal} />
          </div>

          <motion.div
            className="hero-carousel"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="carousel-container">
              <img src="/images/carousel1.jpeg" alt="Familia feliz" />
              <img src="/images/carousel2.jpeg" alt="Protección" />
              <img src="/images/carousel3.jpeg" alt="Futuro" />
              <img src="/images/carousel4.jpeg" alt="Salud" />
              <img src="/images/carousel1.jpeg" alt="Familia feliz repeat" />
              <img src="/images/carousel2.jpeg" alt="Protección repeat" />
              <img src="/images/carousel3.jpeg" alt="Futuro repeat" />
              <img src="/images/carousel4.jpeg" alt="Salud repeat" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
