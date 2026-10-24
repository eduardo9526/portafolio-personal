import { render, screen, cleanup } from "@testing-library/react";
import Contacto from "../components/Contacto";

describe("Contacto - props", () => {
  afterEach(() => cleanup());

  it("usa titulo y textoBoton por defecto", () => {
    render(<Contacto />);
    expect(screen.getByRole("heading", { name: "Contacto" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Enviar" })).toBeTruthy();
  });

  it("muestra titulo y textoBoton recibidos", () => {
    render(<Contacto titulo="Contáctame" textoBoton="Enviar mensaje" />);
    expect(screen.getByRole("heading", { name: "Contáctame" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Enviar mensaje" })).toBeTruthy();
  });
});