import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { obtenerNoticias, guardarNoticias } from "../utils/localStorage";

function DashboardAdmin() {
  const [noticias, setNoticias] = useState(obtenerNoticias());
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem("mensajes_contacto")) || [];
    setMensajes(guardados);
  }, []);

  const handleEliminarNoticia = (id) => {
    if (window.confirm("¿Seguro que deseas eliminar este artículo?")) {
      const actualizadas = noticias.filter((n) => n.id !== id);
      guardarNoticias(actualizadas);
      setNoticias(actualizadas);
    }
  };

  const handleEliminarMensaje = (id) => {
    if (window.confirm("¿Seguro que deseas eliminar este mensaje?")) {
      const actualizados = mensajes.filter((m) => m.id !== id);
      localStorage.setItem("mensajes_contacto", JSON.stringify(actualizados));
      setMensajes(actualizados);
    }
  };

  return (
    <div className="container mt-4 mb-5">
      <h2 className="mb-4">⚙️ Panel de Administración</h2>

      {/* Tarjetas de Resumen */}
      <div className="row mb-4">
        <div className="col-md-4 mb-2">
          <div className="card bg-primary text-white p-3 shadow-sm">
            <h3>{noticias.length}</h3>
            <p className="mb-0">Artículos Publicados</p>
          </div>
        </div>
        <div className="col-md-4 mb-2">
          <div className="card bg-success text-white p-3 shadow-sm">
            <h3>{[...new Set(noticias.map((n) => n.categoria || "General"))].length}</h3>
            <p className="mb-0">Categorías Activas</p>
          </div>
        </div>
        <div className="col-md-4 mb-2">
          <div className="card bg-warning text-dark p-3 shadow-sm">
            <h3>{mensajes.length}</h3>
            <p className="mb-0">Mensajes de Contacto</p>
          </div>
        </div>
      </div>

      {/* Gestión de Noticias */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Gestión de Noticias</h4>
        <Link to="/crear-noticia" className="btn btn-success">+ Nueva Noticia</Link>
      </div>

      <div className="table-responsive mb-5">
        <table className="table table-striped table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Categoría</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {noticias.map((n) => (
              <tr key={n.id}>
                <td>{n.id}</td>
                <td>{n.titulo}</td>
                <td>
                  <span className="badge bg-info text-dark">{n.categoria || "General"}</span>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleEliminarNoticia(n.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Gestión de Mensajes de Contacto */}
      <div className="mt-4">
        <h4 className="mb-3">📬 Mensajes de Contacto Recibidos ({mensajes.length})</h4>
        {mensajes.length === 0 ? (
          <div className="alert alert-secondary">No hay mensajes de contacto recibidos aún.</div>
        ) : (
          <div className="list-group">
            {mensajes.map((m) => (
              <div key={m.id} className="list-group-item d-flex justify-content-between align-items-start p-3 mb-2 shadow-sm rounded">
                <div>
                  <h6 className="mb-1">{m.nombre} <span className="text-muted fw-normal">({m.correo})</span></h6>
                  <p className="mb-1">{m.mensaje}</p>
                  <small className="text-muted">Fecha: {m.fecha}</small>
                </div>
                <button
                  className="btn btn-sm btn-outline-danger ms-2"
                  onClick={() => handleEliminarMensaje(m.id)}
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardAdmin;