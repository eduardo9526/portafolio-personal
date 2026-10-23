// @vitest-environment jsdom
import { describe, it, expect } from "vitest";

import { render, screen, fireEvent } from "@testing-library/react";
import Contacto from "../components/Contacto";

describe("Pruebas Unitarias - Componente Contacto", () => {
  it("4. Renderiza los campos principales del formulario de contacto", () => {
    render(<Contacto />);

    expect(screen.getByPlaceholderText(/tu nombre/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/tu correo/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/tu mensaje/i)).toBeInTheDocument();
  });

  it("5. Cambia el estado de los campos de texto al escribir", () => {
    render(<Contacto />);

    const inputNombre = screen.getByPlaceholderText(/tu nombre/i);
    const inputCorreo = screen.getByPlaceholderText(/tu correo/i);

    fireEvent.change(inputNombre, { target: { value: "Juan Pérez" } });
    fireEvent.change(inputCorreo, { target: { value: "juan@example.com" } });

    expect(inputNombre.value).toBe("Juan Pérez");
    expect(inputCorreo.value).toBe("juan@example.com");
  });
});