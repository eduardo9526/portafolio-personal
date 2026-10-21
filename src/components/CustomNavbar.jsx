import { Link, useNavigate } from 'react-router-dom';
import { getAuthSession, logoutUser } from '../utils/localStorage';

export const CustomNavbar = () => {
  const navigate = useNavigate();
  const user = getAuthSession();

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  return (
    <nav style={{ padding: '1rem', background: '#333', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h2><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Mi Blog / Portafolio</Link></h2>
      <div>
        <Link to="/" style={{ margin: '0 10px', color: '#fff' }}>Inicio</Link>
        {user ? (
          <>
            <Link to="/crear-noticia" style={{ margin: '0 10px', color: '#fff' }}>Crear Noticia</Link>
            <span style={{ margin: '0 10px', color: '#28a745' }}>Hola, {user.username}</span>
            <button onClick={handleLogout} style={{ padding: '5px 10px', cursor: 'pointer' }}>Cerrar Sesión</button>
          </>
        ) : (
          <Link to="/login" style={{ margin: '0 10px', color: '#fff' }}>Iniciar Sesión</Link>
        )}
      </div>
    </nav>
  );
};