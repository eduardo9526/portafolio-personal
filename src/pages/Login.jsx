import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/localStorage";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario === "admin" && password === "1234") {
      loginUser({ usuario });
      sessionStorage.setItem("usuario", usuario);
      navigate("/admin");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h3 className="text-center mb-4">Iniciar Sesión</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Usuario</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingresa tu usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;