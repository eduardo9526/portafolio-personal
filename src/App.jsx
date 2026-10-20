import React from 'react';
import { CustomNavbar } from './components/CustomNavbar';
import { Introduccion } from './components/Introduccion';
import { Proyectos } from './components/Proyectos';
import { Noticias } from './components/Noticias';
import { Contacto } from './components/Contacto';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <main>
        <Introduccion />
        <Proyectos />
        <Noticias />
        <Contacto />
      </main>
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">&copy; 2026 Portafolio Personal - Duoc UC. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;