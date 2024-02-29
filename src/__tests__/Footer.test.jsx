import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "../components";
import { BrowserRouter } from "react-router-dom";

describe("Footer component", () => {
  test("renders without crashing", () => {
    const { container } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    expect(container).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders footer text", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const text = screen.getByText("© All rights reserved", {
      exact: false,
    });
    expect(text).toBeInTheDocument();
  });

  test("alt attribute on image tag", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const altAttribute = screen.getByAltText("github logo");
    expect(altAttribute).toBeInTheDocument();
  });
});