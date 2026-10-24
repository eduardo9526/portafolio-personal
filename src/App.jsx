import { Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Categorias from './pages/Categorias';
import DetalleNoticia from './pages/DetalleNoticia';
import Login from './pages/Login';
import DashboardAdmin from './pages/DashboardAdmin';
import CrearNoticia from './pages/CrearNoticia';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <CustomNavbar nombreSitio="Portafolio de Pedro" />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/categorias" element={<Categorias titulo="📚 Explora mis publicaciones" />} />
        <Route path="/noticias/:id" element={<DetalleNoticia />} />
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
          path="/crear-noticia" 
          element={
            <ProtectedRoute>
              <CrearNoticia />
            </ProtectedRoute>
          } 
        />
      </Routes>
      <Footer nombre="Pedro" github="https://github.com/pedrohacker20" />
    </>
  );
}

export default App;