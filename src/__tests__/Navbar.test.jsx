import { describe, test, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import { Navbar } from "../components";
import { BrowserRouter } from "react-router-dom";

vi.mock("../context/ThemeContext", () => ({
  useTheme: vi.fn(() => ({
    theme: "light",
    toggleTheme: vi.fn(),
  })),
}));

describe("Navbar component", () => {
  test("renders without crashing", () => {
    const { container } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(container).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});