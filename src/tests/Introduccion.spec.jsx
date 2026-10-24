import { render, screen, cleanup } from "@testing-library/react";
import { Introduccion } from "../components/Introduccion";

describe("Introduccion - props", () => {
  afterEach(() => cleanup());

  it("usa los valores por defecto", () => {
    render(<Introduccion />);
    expect(screen.getByRole("heading", { level: 1, name: "Pedro" })).toBeTruthy();
    expect(screen.getByAltText("Foto profesional de Pedro")).toBeTruthy();
  });

  it("muestra nombre, descripcion y github recibidos", () => {
    render(
      <Introduccion
        nombre="Diego"
        descripcion="Estudiante de Informática"
        github="https://github.com/otro"
      />
    );
    expect(screen.getByRole("heading", { level: 1, name: "Diego" })).toBeTruthy();
    expect(screen.getByText("Estudiante de Informática")).toBeTruthy();
    expect(screen.getByAltText("Foto profesional de Diego")).toBeTruthy();
    expect(screen.getByText("https://github.com/otro").getAttribute("href"))
      .toBe("https://github.com/otro");
  });
});