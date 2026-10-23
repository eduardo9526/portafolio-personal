import { useParams, Link } from "react-router-dom";
import { obtenerNoticias } from "../utils/localStorage";

function DetalleNoticia() {
  const { id } = useParams();
  const noticias = obtenerNoticias();
  const noticia = noticias.find((n) => n.id === parseInt(id));

  if (!noticia) {
    return <div className="container mt-5"><p className="alert alert-danger">Artículo no encontrado.</p></div>;
  }

  return (
    <div className="container mt-4">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
          <li className="breadcrumb-item"><Link to="/noticias">Noticias</Link></li>
          <li className="breadcrumb-item active">{noticia.titulo}</li>
        </ol>
      </nav>

      <div className="card shadow-sm p-4">
        <span className="badge bg-primary mb-2 align-self-start">{noticia.categoria || "General"}</span>
        <h1 className="mb-3">{noticia.titulo}</h1>
        <p className="text-muted">Publicado el {noticia.fecha || "Recientemente"}</p>
        <hr />
        <p className="lead">{noticia.contenido}</p>
        <Link to="/noticias" className="btn btn-secondary mt-3">Volver a Noticias</Link>
      </div>
    </div>
  );
}

export default DetalleNoticia;
