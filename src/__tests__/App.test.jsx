import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

describe("App component", () => {
  test("renders without crashing", () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(container).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});