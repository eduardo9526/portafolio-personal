
function Footer({
  nombre = "Pedro",
  github = "https://github.com/pedrohacker20",
  anio = new Date().getFullYear(),
}) {
  console.log("🧩 [Footer] props:", { nombre, github, anio });

  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <div className="container">
        <p className="mb-2">
          © {anio} {nombre}. Todos los derechos reservados.
        </p>
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="text-white fs-4"
          aria-label="GitHub"
        >
          <i className="bi bi-github"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;