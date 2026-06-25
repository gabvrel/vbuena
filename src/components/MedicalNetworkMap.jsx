import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const clinics = [
  { name: "Novaclinica santa cecilia", position: [-0.2005689602141217, -78.49617352698615], url: "https://maps.app.goo.gl/JHfEM9rmhpGRCR9w6", logo: "/images/medicalnetwork/novasc.png" },
  { name: "Clinica San Rafael", position: [-0.30518601935422635, -78.45562388650691], url: "https://maps.app.goo.gl/kgv9ggCJqku8P3RLA", logo: "/images/medicalnetwork/clinica_sr.jpg" },
  { name: "Clinica Adventista", position: [-0.19127606009207254, -78.49283828280798], url: "https://maps.app.goo.gl/kzXdFEqh4kq91opf6", logo: "/images/medicalnetwork/clinica_adv.png" },
  { name: "Sime", position: [-0.17767440384462313, -78.4854494], url: "https://g.co/kgs/Yif3Yow", logo: "/images/medicalnetwork/sime.png" },
  { name: "Hospital de los Valles", position: [-0.2080078315509906, -78.42471141164361], url: "https://maps.app.goo.gl/5scfJkQt4ovggQeB8", logo: "/images/medicalnetwork/valles.jpg" },
  { name: "Corposano - Matriz", position: [-0.17189339531155487, -78.49347685950214], url: "https://maps.app.goo.gl/JcPXNwSvXTUiBSX87", logo: "/images/medicalnetwork/corposano.jpg" },
  { name: "Corposano - Villaflora", position: [-0.24246029228829832, -78.51988678158371], url: "https://maps.app.goo.gl/5ZNXnrzysDiftH3g6", logo: "/images/medicalnetwork/corposano.jpg" },
  { name: "Corposano - Valle de los Chillos", position: [-0.3094636201880947, -78.443837], url: "https://maps.app.goo.gl/eh9DjWhhfACaPpd49", logo: "/images/medicalnetwork/corposano.jpg" },
  { name: "Hospital Metropolitano", position: [-0.18424149024572678, -78.5036509558218], url: "https://maps.app.goo.gl/UNJ28fMfE6xRgj6B6", logo: "/images/medicalnetwork/metropolitano.png" },
  { name: "Aprofe", position: [-0.18748944782706928, -78.47903149999999], url: "https://maps.app.goo.gl/FdTNyvdrLGkp8R946", logo: "/images/medicalnetwork/aprofe.jpg" },
  { name: "Metrored - Plaza de toros", position: [-0.16469026131486686, -78.48344519999999], url: "https://g.co/kgs/AAxh55X", logo: "/images/medicalnetwork/metro.jpg" },
  { name: "Metrored - Cumbaya", position: [-0.194417264237415, -78.44235793644265], url: "https://maps.app.goo.gl/svr4Cx16zzZ9ja1d8", logo: "/images/medicalnetwork/metro.jpg" },
  { name: "Metrored - El Condado", position: [-0.1038029142662207, -78.48961603177867], url: "https://maps.app.goo.gl/aASpePX42BR7nuD47", logo: "/images/medicalnetwork/metro.jpg" },
  { name: "Metrored - Los Chillos", position: [-0.3050983567990002, -78.44555729096179], url: "https://maps.app.goo.gl/nwpnEXZiAZ7XqaHn8", logo: "/images/medicalnetwork/metro.jpg" },
  { name: "Metrored - Calderon", position: [-0.09135703358032571, -78.43292862698617], url: "https://maps.app.goo.gl/8Xf64NonpZuRpnyu9", logo: "/images/medicalnetwork/metro.jpg" },
  { name: "Metrored - Quicentro Sur", position: [-0.2853999528147274, -78.54347120369894], url: "https://maps.app.goo.gl/8faPv61YM6NtLn4N9", logo: "/images/medicalnetwork/metro.jpg" },
  { name: "Metrored - La Carolina", position: [-0.1939213230936792, -78.48502908465744], url: "https://maps.app.goo.gl/Eig3idS7s3c736xZ7", logo: "/images/medicalnetwork/metro.jpg" },
  { name: "Clínica de la Mujer", position: [-0.16945650225064002, -78.48426944232871], url: "https://maps.app.goo.gl/FdTNyvdrLGkp8R946", logo: "/images/medicalnetwork/c_mujer.jpg" },
  { name: "MedExpert", position: [-0.18360434633759937, -78.47783517116436], url: "https://maps.app.goo.gl/hqZjkauQnK2aov5U8", logo: "/images/medicalnetwork/medexpert.png" },
  { name: "Northospital", position: [-0.12851195976180912, -78.49342484027011], url: "https://maps.app.goo.gl/P5MqntyFkyNz7EgZ6", logo: "/images/medicalnetwork/northospital.jpg" },
  { name: "Veris", position: [-0.16750221738593557, -78.47577427116437], url: "https://maps.app.goo.gl/vWgFdRFoznz2TB5R8", logo: "/images/medicalnetwork/veris.png" },
  { name: "MediLink", position: [-0.18667198736080323, -78.48205334417864], url: "https://maps.app.goo.gl/3TC3c6wQwzrK6yju8", logo: "/images/medicalnetwork/medilink.jpg" },
  { name: "Biomed", position: [-0.18747577515700495, -78.48115631349309], url: "https://maps.app.goo.gl/1BjyBtRQoJKQN2Sb7", logo: "/images/medicalnetwork/biomed.jpg" },
  { name: "DAME", position: [-0.2032993645116846, -78.50530307611788], url: "https://maps.app.goo.gl/3vXrKPgaAGw8mvPB9", logo: "/images/medicalnetwork/dame.jpg" },
  { name: "Clinica Kennedy", position: [-2.172248090422059, -79.8988815409943], url: "https://maps.app.goo.gl/9kXLcyAZQtZQabNM9", logo: "/images/medicalnetwork/C_Kennedy.png" },
  { name: "Junta de Benficiencia de Guayaquil", position: [-2.1813778491211857, -79.8896921660353], url: "https://maps.app.goo.gl/Y3tix7LJUeky3i9j9", logo: "/images/medicalnetwork/Junta_de_beneficiencia.jpeg" },
  { name: "NOVARIS CENTRO MEDICO", position: [-0.19450894156862344, -78.49124867584433], url: "https://maps.app.goo.gl/x1HdL375dxHSwV9SA", logo: "/images/medicalnetwork/novasc.png" },
];

const createIcon = (logo) =>
  L.icon({
    iconUrl: logo,
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50],
    className: "rounded-full shadow-md",
  });

export default function MedicalNetworkMap() {
  return (
    <section className="py-24 px-4 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/bg_landing.png')" }}>
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-600">Red médica que te cuida donde estés</h2>
        <p className="text-gray-600 text-lg">Conecta con atención médica de calidad en todo el país.</p>
      </div>

      <div className="relative z-0 max-w-6xl mx-auto rounded-xl overflow-hidden shadow-xl h-[300px]">
        <MapContainer center={[-0.1755, -78.475]} zoom={14} style={{ width: "100%", height: "100%" }} scrollWheelZoom={true}>
          <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {clinics.map((clinic, idx) => (
            <Marker key={idx} position={clinic.position} icon={createIcon(clinic.logo)}>
              <Popup>
                <strong>{clinic.name}</strong><br />
                <a href={clinic.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Ver en Google Maps</a>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
}
