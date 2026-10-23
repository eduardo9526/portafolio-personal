import { Navigate } from "react-router-dom";
import { getAuthSession } from "../utils/localStorage";

function ProtectedRoute({ children }) {
  const usuario = getAuthSession();

  if (!usuario) {
    console.warn("🚫 [Seguridad] Intento de acceso no autorizado. Redirigiendo a /login");
    return <Navigate to="/login" replace />;
  }

  console.log("🛡️ [Seguridad] Acceso concedido a ruta protegida");
  return children;
}

export default ProtectedRoute;