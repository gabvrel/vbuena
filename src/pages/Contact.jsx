import React from "react";
import { motion } from "framer-motion";
import SocialLinks from "../components/SocialLinks";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bgLanding from '../assets/images/bg_landing.png';
import mailIcon from '../assets/images/mail_icon.png';
import phoneIcon from '../assets/images/phone_icon.png';
import locationIcon from '../assets/images/location_icon.png';

export default function Contact() {
  return (
    <>
      <Navbar />
      <section
        id="contacto"
        className="py-16 px-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgLanding})` }}
      >
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-10 mb-10 flex justify-end"
        >
          <h2 className="inline-block bg-cyan-500 text-white text-4xl font-bold py-4 px-20 rounded-l-full ml-auto">
            Estamos cerca de ti
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-sm mx-auto rounded-md overflow-hidden shadow-md"
          >
            <iframe
              src="https://maps.google.com/maps?q=Edificio%20Siglo%2021,%20Irlanda%201016%20y,%20Quito%20170518&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="350"
              allowFullScreen
              loading="lazy"
              className="border-0"
            ></iframe>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-700 leading-relaxed">¿Tienes dudas? ¿Necesitas asistencia con tu plan? <br/>
            Conéctate con nosotros por el canal que prefieras.</p>

            <motion.div className="flex items-start gap-3" whileHover={{ scale: 1.02 }}>
              <img src={mailIcon} alt="Correo" className="w-7 h-7 filter grayscale opacity-70" />
              <div>
                <h3 className="text-lg font-semibold">Correo:</h3>
                <a href="mailto:info@vidasana.ec" className="text-cyan-600 hover:underline">
                  info@vidasana.ec
                </a>
              </div>
            </motion.div>

            <motion.div className="flex items-start gap-3" whileHover={{ scale: 1.02 }}>
              <img src={phoneIcon} alt="Teléfonos" className="w-6 h-6 filter grayscale opacity-70" />
              <div>
                <h3 className="text-lg font-semibold">Teléfonos:</h3>
                <div className="text-gray-600 space-y-1">
                  <a href="tel:+593987601828" className="hover:underline text-cyan-600">+593 987 601 828</a>
                  <br />
                  <a href="tel:+59321800843272" className="hover:underline text-cyan-600">02 1800 843 272</a>
                </div>
              </div>
            </motion.div>

            <motion.div className="flex items-start gap-3" whileHover={{ scale: 1.02 }}>
              <img src={locationIcon} alt="Dirección" className="w-6 h-6 filter grayscale opacity-70" />
              <div>
                <h3 className="text-lg font-semibold">Dirección:</h3>
                <p className="text-gray-600">Edificio Siglo XXI, Irlanda 1016 y, Quito 170518</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <SocialLinks />
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
