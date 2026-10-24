import { Link, useNavigate } from "react-router-dom";

// PROP: nombreSitio (texto de la marca en la barra de navegación)
function CustomNavbar({ nombreSitio = "Mi Blog / Portafolio" }) {
  console.log("🧩 [CustomNavbar] props:", { nombreSitio });

  const navigate = useNavigate();
  const usuario = sessionStorage.getItem("usuario");

  const handleLogout = () => {
    sessionStorage.removeItem("usuario");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">{nombreSitio}</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categorias">Categorías</Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            {usuario ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-warning" to="/admin">Dashboard</Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light ms-2" onClick={handleLogout}>
                    Cerrar Sesión
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="btn btn-primary" to="/login">Iniciar Sesión</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default CustomNavbar;