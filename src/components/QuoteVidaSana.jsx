import React, { useState } from 'react';
import Swal from 'sweetalert2';

const tarifasUrl = '/data/tarifario.json';

export default function QuoteVidaSana() {
  const [tarifas, setTarifas] = useState(null);
  const [step, setStep] = useState(1);
  const [dependientes, setDependientes] = useState([]);
  const [nuevoDependiente, setNuevoDependiente] = useState({ nombre: '', edad: '', genero: '' });
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [form, setForm] = useState({ nombre: '', edad: '', email: '', telefono: '', ciudad: '', genero: '', plan: '', tipo: '' });
  const [cotizacion, setCotizacion] = useState(null);

  React.useEffect(() => {
    fetch(tarifasUrl).then(r => r.json()).then(setTarifas).catch(console.error);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const getRangoEdad = (edad) => {
    const rangos = [[0,5],[5,10],[10,15],[15,20],[20,25],[25,30],[30,35],[35,40],[40,45],[45,50],[50,55],[55,60],[60,65],[65,70],[70,100]];
    for (const [min, max] of rangos) {
      if (edad >= min && edad < max) return `${min}-${max}`;
    }
    return null;
  };

  const calcularCotizacion = () => {
    if (!tarifas) { setCotizacion('Cargando tarifas...'); return; }
    const rangoTitular = getRangoEdad(parseInt(form.edad));
    if (!rangoTitular) { setCotizacion('Edad del titular fuera de rango'); return; }
    try {
      const valorTitular = tarifas[form.plan][form.genero][form.tipo][rangoTitular];
      let total = valorTitular;
      for (const dep of dependientes) {
        const rango = getRangoEdad(parseInt(dep.edad));
        if (!rango) continue;
        total += tarifas[form.plan][dep.genero][form.tipo][rango];
      }
      let descripcion = 'Titular';
      if (dependientes.length === 1) descripcion += ' + 1 dependiente';
      else if (dependientes.length > 1) descripcion += ' + familia';
      setCotizacion(`Prima mensual total: $${total.toFixed(2)}\n${descripcion}`);
    } catch (e) {
      setCotizacion('No se pudo calcular la cotización con los datos ingresados.');
    }
  };

  const enviarCotizacionPorWhatsApp = () => {
    const numeroDestino = "593987601828";
    const dependientesTexto = dependientes.length
      ? dependientes.map((d) => `• ${d.nombre}, ${d.edad} años - ${d.genero}`).join('\n')
      : "Sin dependientes";
    const mensaje = `Hola, soy ${form.nombre} y estoy interesado en contratar un plan en Vida Sana.\n\nDetalles:\nEdad: ${form.edad}\nGénero: ${form.genero}\nCiudad: ${form.ciudad}\nPlan: ${form.plan}\nTipo dental: ${form.tipo}\n\nDependientes:\n${dependientesTexto}\n\n${cotizacion}`;
    window.open(`https://wa.me/${numeroDestino}?text=${encodeURIComponent(mensaje)}`, "_blank");
  };

  const handleNext = () => {
    if (step === 1) {
      const edadTitular = parseInt(form.edad);
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const telefonoRegex = /^[0-9]{7,10}$/;
      if (!aceptaTerminos) { Swal.fire({ icon: 'info', title: 'Acepta los Términos', text: 'Debes aceptar los Términos y Condiciones para continuar.' }); return; }
      if (!form.nombre || !form.edad || !form.ciudad || !form.genero || !form.email || !form.telefono) { Swal.fire({ icon: 'warning', title: 'Campos incompletos', text: 'Por favor completa todos los campos del titular' }); return; }
      if (!emailRegex.test(form.email)) { Swal.fire({ icon: 'error', title: 'Correo inválido', text: 'Ingresa un correo electrónico válido' }); return; }
      if (!telefonoRegex.test(form.telefono)) { Swal.fire({ icon: 'error', title: 'Número inválido', text: 'Ingresa un número valido' }); return; }
      if (isNaN(edadTitular) || edadTitular < 0 || edadTitular > 100) { Swal.fire({ icon: 'error', title: 'Edad inválida', text: 'La edad del titular debe estar entre 0 y 100 años' }); return; }
    }
    if (step === 3 && (!form.plan || !form.tipo)) { Swal.fire({ icon: 'info', title: 'Plan incompleto', text: 'Selecciona un plan y un tipo dental' }); return; }
    if (step === 3) calcularCotizacion();
    setStep(step + 1);
  };

  const handleBack = () => { if (step === 4) setCotizacion(null); setStep(step - 1); };

  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-xl shadow-xl p-6">
      {step === 1 && (
        <div className="space-y-4">
          <input type="text" name="nombre" placeholder="Nombre completo" value={form.nombre} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded focus:outline-none placeholder:text-gray-400" />
          <input type="number" name="edad" placeholder="Edad" value={form.edad} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded focus:outline-none placeholder:text-gray-400" />
          <input type="text" name="email" placeholder="Correo" value={form.email} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded focus:outline-none placeholder:text-gray-400" />
          <input type="text" name="telefono" placeholder="Telefono" value={form.telefono} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded focus:outline-none placeholder:text-gray-400" />
          <input type="text" name="ciudad" placeholder="Ciudad" value={form.ciudad} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded focus:outline-none placeholder:text-gray-400" />
          <div>
            <p className="text-gray-600 mb-1">Género</p>
            <div className="flex gap-4">
              <label className="flex items-center gap-1"><input type="radio" name="genero" value="masculino" onChange={handleChange} checked={form.genero === 'masculino'} /> Masculino</label>
              <label className="flex items-center gap-1"><input type="radio" name="genero" value="femenino" onChange={handleChange} checked={form.genero === 'femenino'} /> Femenino</label>
            </div>
          </div>
          <div className="mt-4">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" checked={aceptaTerminos} onChange={(e) => setAceptaTerminos(e.target.checked)} className="mr-2" />
              Acepto los <a href="/pdfs/terms&conditions.pdf" download className="underline text-cyan-600 ml-1" target="_blank" rel="noopener noreferrer">Términos y Condiciones</a>
            </label>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <p className="text-gray-700 font-medium">¿Deseas agregar algún dependiente?</p>
          <div className="space-y-2">
            <input type="text" placeholder="Nombre del dependiente" value={nuevoDependiente.nombre} onChange={(e) => setNuevoDependiente({ ...nuevoDependiente, nombre: e.target.value })} className="w-full border border-gray-300 p-2 rounded" />
            <input type="number" placeholder="Edad" value={nuevoDependiente.edad} onChange={(e) => setNuevoDependiente({ ...nuevoDependiente, edad: e.target.value })} className="w-full border border-gray-300 p-2 rounded" />
            <div className="flex gap-4">
              <label className="flex items-center gap-1"><input type="radio" value="masculino" checked={nuevoDependiente.genero === 'masculino'} onChange={(e) => setNuevoDependiente({ ...nuevoDependiente, genero: e.target.value })} /> Masculino</label>
              <label className="flex items-center gap-1"><input type="radio" value="femenino" checked={nuevoDependiente.genero === 'femenino'} onChange={(e) => setNuevoDependiente({ ...nuevoDependiente, genero: e.target.value })} /> Femenino</label>
            </div>
            <button onClick={() => {
              if (!nuevoDependiente.nombre || !nuevoDependiente.edad || !nuevoDependiente.genero) { Swal.fire({ icon: 'warning', title: 'Faltan datos', text: 'Completa todos los campos del dependiente' }); return; }
              setDependientes([...dependientes, nuevoDependiente]);
              setNuevoDependiente({ nombre: '', edad: '', genero: '' });
            }} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Agregar Dependiente</button>
          </div>
          {dependientes.length > 0 && (
            <ul className="mt-4 space-y-1">
              {dependientes.map((d, i) => (
                <li key={i} className="text-sm text-gray-700 flex justify-between border p-2 rounded">
                  👤 {d.nombre}, {d.edad} años - {d.genero}
                  <button onClick={() => setDependientes(dependientes.filter((_, idx) => idx !== i))} className="text-red-500 text-xs ml-2">Eliminar</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <div>
            <p className="text-gray-600 mb-1">Selecciona un plan</p>
            <div className="flex flex-col gap-2">
              <label><input type="radio" name="plan" value="proteccion_10000" onChange={handleChange} checked={form.plan === 'proteccion_10000'} /> <span className="ml-2">Plan Protección 10.000</span></label>
              <label><input type="radio" name="plan" value="predilecto_20000" onChange={handleChange} checked={form.plan === 'predilecto_20000'} /> <span className="ml-2">Plan Predilecto 20.000</span></label>
            </div>
          </div>
          <div>
            <p className="text-gray-600 mb-1">Tipo de plan dental</p>
            <div className="flex gap-4">
              <label><input type="radio" name="tipo" value="basico" onChange={handleChange} checked={form.tipo === 'basico'} /> <span className="ml-2">Básico</span></label>
              <label><input type="radio" name="tipo" value="plus" onChange={handleChange} checked={form.tipo === 'plus'} /> <span className="ml-2">Plus</span></label>
            </div>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="text-center text-green-700 font-semibold text-xl whitespace-pre-line">{cotizacion}</div>
      )}

      <div className="mt-6 flex justify-between flex-wrap gap-4">
        {step > 1 && <button onClick={handleBack} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Atrás</button>}
        {step < 4 && <button onClick={handleNext} className="px-6 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 shadow-md">{step === 3 ? 'Cotizar' : 'Siguiente'}</button>}
        {step === 4 && <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 shadow-md" onClick={enviarCotizacionPorWhatsApp}>¡Lo quiero! Contactarse.</button>}
      </div>
    </div>
  );
}
