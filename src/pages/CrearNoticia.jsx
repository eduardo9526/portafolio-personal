import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { savePost } from "../utils/localStorage";

function CrearNoticia() {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [categoria, setCategoria] = useState("Tecnología");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const nuevaNoticia = {
      id: Date.now(),
      titulo,
      contenido,
      categoria,
      fecha: new Date().toLocaleDateString("es-ES")
    };

    console.log("📝 [Formulario Noticia] Creando publicación:", nuevaNoticia);
    savePost(nuevaNoticia);
    navigate("/admin");
  };

  return (
    <div className="container mt-4">
      <h2>Crear Nueva Noticia</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            type="text"
            className="form-control"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Categoría</label>
          <select
            className="form-select"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="Tecnología">Tecnología</option>
            <option value="Deportes">Deportes</option>
            <option value="Cultura">Cultura</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Contenido</label>
          <textarea
            className="form-control"
            rows="5"
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          Guardar Noticia
        </button>
      </form>
    </div>
  );
}

export default CrearNoticia;