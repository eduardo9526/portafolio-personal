import { render, screen, cleanup } from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer - props", () => {
  afterEach(() => cleanup());

  it("usa los valores por defecto si no recibe props", () => {
    render(<Footer />);
    const anioActual = String(new Date().getFullYear());

    expect(screen.getByText(new RegExp(`${anioActual} Pedro`))).toBeTruthy();
    expect(screen.getByRole("link", { name: /github/i }).getAttribute("href"))
      .toBe("https://github.com/pedrohacker20");
  });

  it("muestra los valores recibidos en nombre, github y anio", () => {
    render(<Footer nombre="Diego" github="https://github.com/otro" anio={2030} />);

    expect(screen.getByText(/2030 Diego/)).toBeTruthy();
    expect(screen.getByRole("link", { name: /github/i }).getAttribute("href"))
      .toBe("https://github.com/otro");
  });
});