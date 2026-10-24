import { Introduccion } from '../components/Introduccion';
import { Noticias } from '../components/Noticias';
import { Proyectos } from '../components/Proyectos';
import Contacto from '../components/Contacto'; // Sin llaves

function Inicio() {
  return (
    <main style={{ padding: '1rem' }}>
      <Introduccion
        nombre="Pedro"
        descripcion="Estudiante de Informática Duoc UC | Entusiasta de la Tecnología"
        github="https://github.com/pedrohacker20"
      />
      <Noticias titulo="Últimas Noticias" limite={2} />
      <Proyectos titulo="Mis Proyectos" colorBadge="dark" />
      <Contacto titulo="Contáctame" textoBoton="Enviar mensaje" />
    </main>
  );
}

export default Inicio; // Exportación por defecto