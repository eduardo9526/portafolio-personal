import { render, screen, cleanup } from "@testing-library/react";
import { Proyectos } from "../components/Proyectos";

describe("Proyectos - props", () => {
  afterEach(() => cleanup());

  it("usa titulo y colorBadge por defecto", () => {
    render(<Proyectos />);
    expect(screen.getByRole("heading", { name: "Mis Proyectos" })).toBeTruthy();
    expect(screen.getAllByText("React")[0].classList.contains("bg-secondary")).toBeTrue();
  });

  it("aplica titulo y colorBadge recibidos", () => {
    render(<Proyectos titulo="Portafolio" colorBadge="dark" />);
    expect(screen.getByRole("heading", { name: "Portafolio" })).toBeTruthy();
    expect(screen.getAllByText("React")[0].classList.contains("bg-dark")).toBeTrue();
  });
});