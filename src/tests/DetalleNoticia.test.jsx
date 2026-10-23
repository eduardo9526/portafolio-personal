// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import DetalleNoticia from "../pages/DetalleNoticia";
import { guardarNoticias } from "../utils/localStorage";

describe("Pruebas Unitarias - Componente DetalleNoticia", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("8. Muestra mensaje de error cuando el artículo solicitado no existe", () => {
    render(
      <MemoryRouter initialEntries={["/noticias/999"]}>
        <Routes>
          <Route path="/noticias/:id" element={<DetalleNoticia />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/artículo no encontrado/i)).toBeInTheDocument();
  });

  it("9. Muestra el título y el contenido de la noticia cuando el ID es válido", () => {
    const noticiaPrueba = [
      { id: 1, titulo: "Noticia de Prueba", contenido: "Contenido detallado de prueba", categoria: "Tecnología" }
    ];
    guardarNoticias(noticiaPrueba);

    render(
      <MemoryRouter initialEntries={["/noticias/1"]}>
        <Routes>
          <Route path="/noticias/:id" element={<DetalleNoticia />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: "Noticia de Prueba" })).toBeInTheDocument();
    expect(screen.getByText("Contenido detallado de prueba")).toBeInTheDocument();
  });

  it("10. Incluye un botón o enlace para regresar al listado de noticias", () => {
    const noticiaPrueba = [{ id: 1, titulo: "Noticia 1", contenido: "Texto", categoria: "General" }];
    guardarNoticias(noticiaPrueba);

    render(
      <MemoryRouter initialEntries={["/noticias/1"]}>
        <Routes>
          <Route path="/noticias/:id" element={<DetalleNoticia />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole("link", { name: /volver a noticias/i })).toBeInTheDocument();
  });
});