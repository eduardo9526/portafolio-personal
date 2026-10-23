// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from "vitest";

import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CustomNavbar from "../components/CustomNavbar";

describe("Pruebas Unitarias - Componente CustomNavbar", () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  it("6. Muestra los enlaces públicos cuando no hay sesión iniciada", () => {
    render(
      <MemoryRouter>
        <CustomNavbar />
      </MemoryRouter>
    );

    expect(screen.getByText(/inicio/i)).toBeInTheDocument();
    expect(screen.getByText(/categorías/i)).toBeInTheDocument();
    expect(screen.getByText(/iniciar sesión/i)).toBeInTheDocument();
  });

  it("7. Muestra el enlace al Dashboard y botón de Cerrar Sesión cuando el usuario está autenticado", () => {
    sessionStorage.setItem("usuario", "mario");

    render(
      <MemoryRouter>
        <CustomNavbar />
      </MemoryRouter>
    );

    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/cerrar sesión/i)).toBeInTheDocument();
  });
});