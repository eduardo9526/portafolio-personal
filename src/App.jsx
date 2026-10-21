import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CustomNavbar } from './components/CustomNavbar';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Inicio } from './pages/Inicio';
import { Login } from './pages/Login';
import { CrearNoticia } from './pages/CrearNoticia';

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/crear-noticia" 
          element={
            <ProtectedRoute>
              <CrearNoticia />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;