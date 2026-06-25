import React from "react";
import "../css/medicalCarousel.css";

const medicalPartners = [
  { name: "Metrored", logo: "/images/medicalnetwork/metrored.png" },
  { name: "Aprofe", logo: "/images/medicalnetwork/aprofe.jpg" },
  { name: "Clinica Adventista", logo: "/images/medicalnetwork/clinica_adv.png" },
  { name: "Clinica San Rafael", logo: "/images/medicalnetwork/clinica_sr.jpg" },
  { name: "Clinica Santiago", logo: "/images/medicalnetwork/c_santiago.jpg" },
  { name: "Sime", logo: "/images/medicalnetwork/sime.png" },
  { name: "Novaclinica Sta. Cecilia", logo: "/images/medicalnetwork/novasc.png" },
  { name: "Corposano", logo: "/images/medicalnetwork/corposano.jpg" },
  { name: "H. de los Valles", logo: "/images/medicalnetwork/valles.jpg" },
  { name: "Asistanet", logo: "/images/medicalnetwork/asistanet.png" },
  { name: "Biomed", logo: "/images/medicalnetwork/biomed.jpg" },
  { name: "Metropolitano", logo: "/images/medicalnetwork/metropolitano.png" },
  { name: "Clinica de la Mujer", logo: "/images/medicalnetwork/c_mujer.jpg" },
  { name: "Medexpert", logo: "/images/medicalnetwork/medexpert.png" },
  { name: "Medilink", logo: "/images/medicalnetwork/medilink.jpg" },
  { name: "Northospital", logo: "/images/medicalnetwork/northospital.jpg" },
  { name: "Padre Carollo", logo: "/images/medicalnetwork/p_carollo.png" },
  { name: "Veris", logo: "/images/medicalnetwork/veris.png" },
  { name: "DAME", logo: "/images/medicalnetwork/dame.jpg" },
  { name: "Clinica Kennedy", logo: "/images/medicalnetwork/C_Kennedy.png" },
  { name: "Junta de Beneficiencia de Guayaquil", logo: "/images/medicalnetwork/Junta_de_beneficiencia.jpeg" },
  { name: "Praxmed", logo: "/images/medicalnetwork/Praxmed.png" },
  { name: "Clinica Internacional", logo: "/images/medicalnetwork/Clinica_Internacional.png" },
  { name: "Hospital San Fransisco", logo: "/images/medicalnetwork/Hospital San Fransico.png" },
  { name: "Medical Scan", logo: "/images/medicalnetwork/Marca-Medical-Scan4.png" },
  { name: "Manta Hospital Center", logo: "/images/medicalnetwork/Logo_MHC.png" },
];

export default function MedicalPartnersSlider() {
  return (
    <section className="py-10 px-0">
      <div className="mb-6">
        <h2 className="inline-block bg-cyan-500 text-white text-2xl font-bold py-4 px-6 rounded-r-full">
          Centros médicos aliados
        </h2>
      </div>

      <div className="carousel-wrapper">
        <div className="carousel-track">
          {[...medicalPartners, ...medicalPartners].map((partner, index) => (
            <div key={index} className="carousel-slide">
              <img src={partner.logo} alt={partner.name} className="w-32 h-32 object-contain mb-2" />
              <p className="text-gray-700 text-center font-medium">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <a href="/medical-networks" className="btn-secondary">Ver red médica completa</a>
      </div>
    </section>
  );
}
