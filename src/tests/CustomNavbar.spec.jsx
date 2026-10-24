import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CustomNavbar from "../components/CustomNavbar";

describe("CustomNavbar - props", () => {
  beforeEach(() => sessionStorage.clear());
  afterEach(() => cleanup());

  it("muestra el nombre por defecto", () => {
    render(<MemoryRouter><CustomNavbar /></MemoryRouter>);
    expect(screen.getByText("Mi Blog / Portafolio")).toBeTruthy();
  });

  it("muestra el nombreSitio recibido", () => {
    render(<MemoryRouter><CustomNavbar nombreSitio="Portafolio de Diego" /></MemoryRouter>);
    expect(screen.getByText("Portafolio de Diego")).toBeTruthy();
    expect(screen.queryByText("Mi Blog / Portafolio")).toBeNull();
  });
});