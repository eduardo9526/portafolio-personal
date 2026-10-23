import { useState } from "react";
import { Link } from "react-router-dom";
import { obtenerNoticias, guardarNoticias } from "../utils/localStorage";

function DashboardAdmin() {
  const [noticias, setNoticias] = useState(obtenerNoticias());

  const handleEliminar = (id) => {
    if (window.confirm("¿Seguro que deseas eliminar este artículo?")) {
      const actualizadas = noticias.filter((n) => n.id !== id);
      guardarNoticias(actualizadas);
      setNoticias(actualizadas);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">⚙️ Panel de Administración</h2>

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
            <h3>1</h3>
            <p className="mb-0">Administrador Conectado</p>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Gestión de Noticias</h4>
        <Link to="/admin/crear-noticia" className="btn btn-success">+ Nueva Noticia</Link>
      </div>

      <div className="table-responsive">
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
                    onClick={() => handleEliminar(n.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardAdmin;