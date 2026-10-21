import { Introduccion } from '../components/Introduccion';
import { Noticias } from '../components/Noticias';
import { Proyectos } from '../components/Proyectos';
import { Contacto } from '../components/Contacto';

export const Inicio = () => {
  return (
    <main style={{ padding: '1rem' }}>
      <Introduccion />
      <Noticias />
      <Proyectos />
      <Contacto />
    </main>
  );
};