import React, { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export default function QuoteForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ nombre: "", email: "", numero: "", mensaje: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  if (!isOpen) return null;

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch(`${API_URL}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al enviar cotización");
      }

      setStatus({ success: true, message: "¡Gracias! Uno de nuestros asesores se comunicará contigo muy pronto con la mejor opción para ti." });
      setFormData({ nombre: "", email: "", mensaje: "", numero: "" });
    } catch (error) {
      console.error("Error:", error);
      setStatus({ success: false, message: "❌ Error al enviar la cotización. Intenta nuevamente." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl">&times;</button>

        <h2 className="text-2xl font-bold mb-4 text-cyan-600 text-center">Solicita tu cotización</h2>

        {status && (
          <div className={`mb-4 p-3 rounded text-center ${status.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="nombre" placeholder="Tu nombre" value={formData.nombre} onChange={handleChange} required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          <input type="text" name="numero" placeholder="Tu número de teléfono" value={formData.numero} onChange={handleChange} required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          <input type="email" name="email" placeholder="Tu correo" value={formData.email} onChange={handleChange} required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          <textarea name="mensaje" placeholder="Tu mensaje (opcional)" value={formData.mensaje} onChange={handleChange} rows="4" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"></textarea>
          <button type="submit" disabled={loading} className="w-full bg-cyan-500 text-white font-semibold py-2 px-4 rounded hover:bg-cyan-600 disabled:opacity-50">
            {loading ? "Enviando..." : "Enviar cotización"}
          </button>
        </form>
      </div>
    </div>
  );
}
