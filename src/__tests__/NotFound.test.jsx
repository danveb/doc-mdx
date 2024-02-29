import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { NotFound } from "../components";
import { BrowserRouter } from "react-router-dom";

describe("NotFound component", () => {
  test("component renders without crashing", () => {
    const { container } = render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    expect(container).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders a 404 message", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    const text = screen.getByText("404 | Sorry, page not found.");
    expect(text).toBeInTheDocument();
  });
});