import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { About } from "../components";

describe("About component", () => {
  test("renders without crashing", () => {
    const { container } = render(<About />);
    expect(container).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders correct paragraph on component", () => {
    render(
      <About />
    )
    const text = screen.getByText("This is doc-mdx, a simple application that allows users create concise technical documentation directly from a markdown document. In this article, I will go over the process of installation and usage.");
    expect(text).toBeInTheDocument();
  });
});