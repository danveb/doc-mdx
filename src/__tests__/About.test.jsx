import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
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
});