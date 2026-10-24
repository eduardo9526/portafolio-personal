import { render, screen, cleanup } from "@testing-library/react";
import { Noticias } from "../components/Noticias";
import noticiasData from "../data/noticias.json";

describe("Noticias - props", () => {
  afterEach(() => cleanup());

  it("usa el titulo por defecto y muestra todas las noticias", () => {
    render(<Noticias />);
    expect(screen.getByRole("heading", { name: "Últimas Noticias" })).toBeTruthy();
    expect(screen.getByText(noticiasData[0].titulo)).toBeTruthy();
    expect(screen.getByText(noticiasData[1].titulo)).toBeTruthy();
  });

  it("respeta titulo y limite recibidos", () => {
    render(<Noticias titulo="Novedades" limite={1} />);
    expect(screen.getByRole("heading", { name: "Novedades" })).toBeTruthy();
    expect(screen.getByText(noticiasData[0].titulo)).toBeTruthy();
    expect(screen.queryByText(noticiasData[1].titulo)).toBeNull();
  });
});