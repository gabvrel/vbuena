import React, { useState } from "react";
import QuoteVidaSana from '../components/QuoteVidaSana';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QuoteForm from "../components/QuoteForm";

export default function QuotePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Navbar />
      <section
        className="bg-cover bg-center px-4 py-32 md:py-32"
        style={{ backgroundImage: "url('/images/bg_landing.png')" }}
      >
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-600 mb-4 leading-snug">
            Tu plan ideal empieza aquí
          </h1>
          <p className="text-gray-600 text-base sm:text-lg mb-6">
            Cotízalo en minutos. Nosotros nos encargamos del resto.
          </p>
          <a
            href="#cotizacion"
            onClick={openModal}
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300 ease-in-out"
          >
            Solicita tu cotización
          </a>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start px-2 sm:px-6">
          <div className="flex justify-center">
            <img
              src="/images/family.jpeg"
              alt="Familia feliz"
              className="w-full max-w-[320px] sm:max-w-md rounded-lg shadow-md object-cover"
            />
          </div>

          <div className="bg-cyan-500 rounded-xl shadow-xl p-6 sm:p-8 w-full max-w-md mx-auto">
            <p className="text-gray-50 py-2">Cotiza el valor de tu plan mensual aqui.</p>
            <QuoteVidaSana />
          </div>
          <QuoteForm isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </section>
      <Footer />
    </>
  );
}
