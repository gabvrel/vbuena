import React, { useState, useEffect, useMemo } from "react";

export default function MedicalDirectory() {
  const [medicalCenters, setMedicalCenters] = useState([]);
  const [search, setSearch] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const [level, setLevel] = useState("");

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => { setCurrentPage(1); }, [search, province, city, type, level]);

  useEffect(() => {
    const loadHospitals = async () => {
      try {
        const res = await fetch("/data/hospitals.json");
        const data = await res.json();

        const ambulatorios = Array.isArray(data.Ambulatorio)
          ? data.Ambulatorio.map((item) => ({ ...item, type: "Ambulatorio" }))
          : [];
        const hospitalarios = Array.isArray(data.Hospitalario)
          ? data.Hospitalario.map((item) => ({ ...item, type: "Hospitalario" }))
          : [];

        const combined = [...ambulatorios, ...hospitalarios];
        combined.sort((a, b) => {
          if (a.province !== b.province) return a.province.localeCompare(b.province);
          return a.provider.localeCompare(b.provider);
        });
        setMedicalCenters(combined);
      } catch (error) {
        console.error("Error cargando hospitales:", error);
      }
    };
    loadHospitals();
  }, []);

  const filteredCenters = useMemo(() => {
    return medicalCenters.filter((center) => (
      center.provider.toLowerCase().includes(search.toLowerCase()) &&
      (province ? center.province === province : true) &&
      (city ? center.city === city : true) &&
      (type ? center.type === type : true) &&
      (level ? center.level == level : true)
    ));
  }, [medicalCenters, search, province, city, type, level]);

  const totalPages = Math.ceil(filteredCenters.length / itemsPerPage);

  const paginatedCenters = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredCenters.slice(start, start + itemsPerPage);
  }, [filteredCenters, currentPage]);

  const uniqueProvinces = [...new Set(medicalCenters.map((c) => c.province))];
  const uniqueCities = [...new Set(medicalCenters.filter((c) => (province ? c.province === province : true)).map((c) => c.city))];

  return (
    <section className="py-6 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-cyan-600 text-center mb-6">
        Accede a más de 400 centros médicos aliados en todo el país.
      </h2>
      <p className="text-center text-gray-400 mb-8">Contactate con nuestros ejecutivos por si no encuentras lo que buscas.</p>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <input type="text" placeholder="Buscar por nombre..." className="border p-2 rounded shadow-sm" value={search} onChange={(e) => setSearch(e.target.value)} />
        <select value={province} onChange={(e) => { setProvince(e.target.value); setCity(""); }} className="border p-2 rounded shadow-sm">
          <option value="">Todas las provincias</option>
          {uniqueProvinces.map((prov) => <option key={prov} value={prov}>{prov}</option>)}
        </select>
        <select value={city} onChange={(e) => setCity(e.target.value)} className="border p-2 rounded shadow-sm">
          <option value="">Todas las ciudades</option>
          {uniqueCities.map((ct) => <option key={ct} value={ct}>{ct}</option>)}
        </select>
        <select value={type} onChange={(e) => setType(e.target.value)} className="border p-2 rounded shadow-sm">
          <option value="">Todos los tipos</option>
          <option value="Hospitalario">Hospitalario</option>
          <option value="Ambulatorio">Ambulatorio</option>
        </select>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginatedCenters.map((center) => (
          <div key={`${center.id}-${center.type}`} className="bg-white p-4 shadow rounded text-center">
            <h3 className="font-semibold text-blue-800 text-lg">{center.provider}</h3>
            {center.phone && <p className="text-sm mt-1">{center.phone}</p>}
            {center.address && <p className="text-sm text-gray-600 mt-1">{center.address}</p>}
            <p className="text-sm text-gray-500 mt-1">{center.city}, {center.province}</p>
            <span className="text-xs inline-block mt-2 px-2 py-1 bg-cyan-100 text-cyan-700 rounded-full">{center.type}</span>
          </div>
        ))}
        {filteredCenters.length === 0 && <p className="col-span-full text-center text-gray-500">No se encontraron resultados.</p>}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-2 flex-wrap">
          <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50">Anterior</button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button key={page} onClick={() => setCurrentPage(page)} className={`px-3 py-1 border rounded ${currentPage === page ? "bg-cyan-600 text-white" : "bg-gray-100 hover:bg-gray-200"}`}>{page}</button>
          ))}
          <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50">Siguiente</button>
        </div>
      )}
    </section>
  );
}
