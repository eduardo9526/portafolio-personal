// @vitest-environment jsdom
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "../pages/Login";

describe("Pruebas Unitarias - Componente Login", () => {
  it("1. Renderiza correctamente el formulario de ingreso y sus elementos", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    expect(screen.getByPlaceholderText(/ingresa tu usuario/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/ingresa tu contraseña/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /ingresar/i })).toBeInTheDocument();
  });

  it("2. Permite actualizar el estado al escribir en los inputs de usuario y contraseña", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const inputUsuario = screen.getByPlaceholderText(/ingresa tu usuario/i);
    const inputPassword = screen.getByPlaceholderText(/ingresa tu contraseña/i);

    fireEvent.change(inputUsuario, { target: { value: "mario" } });
    fireEvent.change(inputPassword, { target: { value: "1234" } });

    expect(inputUsuario.value).toBe("mario");
    expect(inputPassword.value).toBe("1234");
  });

  it("3. Muestra una alerta si el usuario ingresa credenciales incorrectas", () => {
    window.alert = vi.fn();

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const inputUsuario = screen.getByPlaceholderText(/ingresa tu usuario/i);
    const inputPassword = screen.getByPlaceholderText(/ingresa tu contraseña/i);
    const botonSubmit = screen.getByRole("button", { name: /ingresar/i });

    fireEvent.change(inputUsuario, { target: { value: "usuario_incorrecto" } });
    fireEvent.change(inputPassword, { target: { value: "0000" } });
    fireEvent.click(botonSubmit);

    expect(window.alert).toHaveBeenCalledWith("Usuario o contraseña incorrectos");
  });
});