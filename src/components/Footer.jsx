import React, { useEffect, useState } from "react";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative text-white text-base" style={{ backgroundColor: '#003C62' }}>
      <div className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold text-lg mb-2">Empresa</h3>
          <ul className="space-y-2">
            <li><a href="/nosotros" className="hover:underline">Sobre nosotros</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Servicios</h3>
          <ul className="space-y-2">
            <li><a href="/planes" className="hover:underline">Planes</a></li>
            <li><a href="https://vidabuena.doctorone.com/" target="_blank" className="hover:underline">Telemedicina</a></li>
            <li><a href="/medical-networks" className="hover:underline">Redes médicas</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Ayuda</h3>
          <ul className="space-y-2">
            <li>
              <a href="https://wa.me/593987601828?text=Hola%2C%20necesito%20ayuda" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Contáctanos por WhatsApp
              </a>
            </li>
            <li>
              <a href="/pdfs/terms&conditions.pdf" download="Terminos y Condiciones - Vida Buena.pdf" className="hover:underline" target="_blank" rel="noopener noreferrer">
                Terminos & Condiciones
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Contacto</h3>
          <ul className="space-y-2 text-sm">
            <li><span className="font-semibold">Celular:</span> +593 987 601 828</li>
            <li><span className="font-semibold">PBX:</span> (02) 3 949 430 </li>
            <li><span className="font-semibold">Correo:</span> info@vidasana.ec</li>
            <li>
              <span className="font-semibold">Dirección:</span><br />
              Edificio Siglo XXI, Irlanda 1016 y, Quito 170518
            </li>
            <li className="flex gap-3 mt-2">
              <a href="https://www.facebook.com/VidaBuenaEcuadorUIO/" target="_blank" rel="noopener noreferrer">
                <img src="/images/fb_icon.png" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/vidabuena/" target="_blank" rel="noopener noreferrer">
                <img src="/images/lnkin_icon.png" alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/vidabuenaec/" target="_blank" rel="noopener noreferrer">
                <img src="/images/ig_w_icon.png" alt="Instagram" className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm py-4 border-t border-[#004d7d]">
        <h4 className="text-white font-medium">
          © 2025 Vida Sana Medicina Prepagada. Todos los derechos reservados.
        </h4>
        <a
          href="https://nivusoftware.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-2 text-white text-sm mt-1 transition-all duration-300"
        >
          <img src="/images/nivusoftlogo.png" alt="Nivusoft" className="w-6 h-6 transform transition-transform duration-300 group-hover:scale-110" />
          <span className="group-hover:underline">Desarrollado por Nivusoft</span>
        </a>
      </div>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="hidden md:flex items-center justify-center p-3 bg-white text-cyan-500 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 fixed bottom-6 right-6 z-50"
          aria-label="Volver arriba"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </footer>
  );
}
