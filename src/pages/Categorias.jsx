import { useState } from "react";
import { obtenerNoticias } from "../utils/localStorage";
import { Link } from "react-router-dom";

function Categorias() {
  const noticias = obtenerNoticias();
  const [categoriaSel, setCategoriaSel] = useState("Todas");

  const categorias = ["Todas", ...new Set(noticias.map((n) => n.categoria || "General"))];

  const noticiasFiltradas = categoriaSel === "Todas"
    ? noticias
    : noticias.filter((n) => (n.categoria || "General") === categoriaSel);

  return (
    <div className="container mt-4">
      <h2>📁 Categorías de Artículos</h2>
      <p className="text-muted">Filtra las publicaciones según tu área de interés.</p>

      <div className="btn-group my-3 flex-wrap" role="group">
        {categorias.map((cat, idx) => (
          <button
            key={idx}
            className={`btn me-2 mb-2 ${categoriaSel === cat ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setCategoriaSel(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="row mt-3">
        {noticiasFiltradas.length === 0 ? (
          <p className="text-muted">No hay artículos en esta categoría.</p>
        ) : (
          noticiasFiltradas.map((noticia) => (
            <div key={noticia.id} className="col-md-4 mb-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <span className="badge bg-secondary mb-2">{noticia.categoria || "General"}</span>
                  <h5 className="card-title">{noticia.titulo}</h5>
                  <p className="card-text">
                    {noticia.contenido ? noticia.contenido.slice(0, 90) + "..." : ""}
                  </p>
                  <Link to={`/noticias/${noticia.id}`} className="btn btn-sm btn-outline-primary">
                    Leer más
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Categorias;