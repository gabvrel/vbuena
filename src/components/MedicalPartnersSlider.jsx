import React from "react";
import "../css/medicalCarousel.css";
import metroredLogo from '../assets/images/medicalnetwork/metrored.png';
import aprofeLogo from '../assets/images/medicalnetwork/aprofe.jpg';
import clinicaAdvLogo from '../assets/images/medicalnetwork/clinica_adv.png';
import clinicaSrLogo from '../assets/images/medicalnetwork/clinica_sr.jpg';
import cSantiagoLogo from '../assets/images/medicalnetwork/c_santiago.jpg';
import simeLogo from '../assets/images/medicalnetwork/sime.png';
import novascLogo from '../assets/images/medicalnetwork/novasc.png';
import corposanoLogo from '../assets/images/medicalnetwork/corposano.jpg';
import vallesLogo from '../assets/images/medicalnetwork/valles.jpg';
import asistanetLogo from '../assets/images/medicalnetwork/asistanet.png';
import biomedLogo from '../assets/images/medicalnetwork/biomed.jpg';
import metropolitanoLogo from '../assets/images/medicalnetwork/metropolitano.png';
import cMujerLogo from '../assets/images/medicalnetwork/c_mujer.jpg';
import medexpertLogo from '../assets/images/medicalnetwork/medexpert.png';
import medilinkLogo from '../assets/images/medicalnetwork/medilink.jpg';
import northospitalLogo from '../assets/images/medicalnetwork/northospital.jpg';
import pCarolloLogo from '../assets/images/medicalnetwork/p_carollo.png';
import verisLogo from '../assets/images/medicalnetwork/veris.png';
import dameLogo from '../assets/images/medicalnetwork/dame.jpg';
import kennedyLogo from '../assets/images/medicalnetwork/C_Kennedy.png';
import juntaLogo from '../assets/images/medicalnetwork/Junta_de_beneficiencia.jpeg';
import praxmedLogo from '../assets/images/medicalnetwork/Praxmed.png';
import clinicaInternacionalLogo from '../assets/images/medicalnetwork/Clinica_Internacional.png';
import hospitalSanFransicoLogo from '../assets/images/medicalnetwork/Hospital San Fransico.png';
import marcaMedicalScan4Logo from '../assets/images/medicalnetwork/Marca-Medical-Scan4.png';
import logoMHCLogo from '../assets/images/medicalnetwork/Logo_MHC.png';

const medicalPartners = [
  { name: "Metrored", logo: metroredLogo },
  { name: "Aprofe", logo: aprofeLogo },
  { name: "Clinica Adventista", logo: clinicaAdvLogo },
  { name: "Clinica San Rafael", logo: clinicaSrLogo },
  { name: "Clinica Santiago", logo: cSantiagoLogo },
  { name: "Sime", logo: simeLogo },
  { name: "Novaclinica Sta. Cecilia", logo: novascLogo },
  { name: "Corposano", logo: corposanoLogo },
  { name: "H. de los Valles", logo: vallesLogo },
  { name: "Asistanet", logo: asistanetLogo },
  { name: "Biomed", logo: biomedLogo },
  { name: "Metropolitano", logo: metropolitanoLogo },
  { name: "Clinica de la Mujer", logo: cMujerLogo },
  { name: "Medexpert", logo: medexpertLogo },
  { name: "Medilink", logo: medilinkLogo },
  { name: "Northospital", logo: northospitalLogo },
  { name: "Padre Carollo", logo: pCarolloLogo },
  { name: "Veris", logo: verisLogo },
  { name: "DAME", logo: dameLogo },
  { name: "Clinica Kennedy", logo: kennedyLogo },
  { name: "Junta de Beneficiencia de Guayaquil", logo: juntaLogo },
  { name: "Praxmed", logo: praxmedLogo },
  { name: "Clinica Internacional", logo: clinicaInternacionalLogo },
  { name: "Hospital San Fransisco", logo: hospitalSanFransicoLogo },
  { name: "Medical Scan", logo: marcaMedicalScan4Logo },
  { name: "Manta Hospital Center", logo: logoMHCLogo },
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
