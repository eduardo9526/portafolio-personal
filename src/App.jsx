import { Routes, Route } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import CrearNoticia from "./pages/CrearNoticia";
import DetalleNoticia from "./pages/DetalleNoticia";
import Categorias from "./pages/Categorias";
import DashboardAdmin from "./pages/DashboardAdmin";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <CustomNavbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/noticias/:id" element={<DetalleNoticia />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <DashboardAdmin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/crear-noticia"
            element={
              <ProtectedRoute>
                <CrearNoticia />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;