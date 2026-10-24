import { useState } from "react";
import { guardarMensaje } from "../utils/localStorage";

// PROPS: titulo (encabezado del formulario), textoBoton (texto del botón de envío)
function Contacto({ titulo = "Contacto", textoBoton = "Enviar" }) {
  console.log("🧩 [Contacto] props:", { titulo, textoBoton }); // <-- LÍNEA NUEVA

  const [form, setForm] = useState({ nombre: "", correo: "", mensaje: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("📤 [Formulario Contacto] Enviando datos:", form);

    const nuevoMensaje = {
      id: Date.now(),
      ...form,
      fecha: new Date().toLocaleDateString("es-ES")
    };

    guardarMensaje(nuevoMensaje);
    alert("¡Mensaje enviado con éxito!");
    setForm({ nombre: "", correo: "", mensaje: "" });
  };

  return (
    <div className="container mt-4" id="contacto">
      <h2>{titulo}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Tu nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo</label>
          <input
            type="email"
            name="correo"
            className="form-control"
            placeholder="Tu correo"
            value={form.correo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Mensaje</label>
          <textarea
            name="mensaje"
            className="form-control"
            placeholder="Tu mensaje"
            value={form.mensaje}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {textoBoton}
        </button>
      </form>
    </div>
  );
}

export default Contacto;