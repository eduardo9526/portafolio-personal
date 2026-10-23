import { Introduccion } from '../components/Introduccion';
import { Noticias } from '../components/Noticias';
import { Proyectos } from '../components/Proyectos';
import Contacto from '../components/Contacto'; // Sin llaves

function Inicio() {
  return (
    <main style={{ padding: '1rem' }}>
      <Introduccion />
      <Noticias />
      <Proyectos />
      <Contacto />
    </main>
  );
}

export default Inicio; // Exportación por defecto