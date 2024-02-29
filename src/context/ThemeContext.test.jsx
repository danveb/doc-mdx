import { describe, test, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { ThemeProvider, useTheme } from "./ThemeContext";

describe("ThemeProvider context", () => {
  test("renders children with light theme by default", () => {
    const TestComponent = () => {
      const { theme } = useTheme();
      return (
        <div data-testid="theme">{theme}</div>
      )
    };

    const { getByTestId } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const themeElement = getByTestId("theme");
    expect(themeElement.textContent).toBe("light");
    expect(themeElement.textContent).not.toBe("dark");
  });

  test("toggle from light mode to dark mode", () => {
    const TestComponent = () => {
      const { theme, toggleTheme } = useTheme();
      return (
        <div>
          <div data-testid="theme">{theme}</div>
          <button data-testid="toggle" onClick={toggleTheme}>Toggle Theme</button>
        </div>
      )
    };

    const { getByTestId } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const themeElement = getByTestId("theme");
    const toggleButton = getByTestId("toggle");

    expect(themeElement.textContent).toBe("light");
    fireEvent.click(toggleButton);
    expect(themeElement.textContent).toBe("dark");
    expect(toggleButton).toHaveBeenCalledOnce;
  });

  test("toggle back and forth between light and dark modes at least twice", () => {
    const TestComponent = () => {
      const { theme, toggleTheme } = useTheme();
      return (
        <div>
          <div data-testid="theme">{theme}</div>
          <button data-testid="toggle" onClick={toggleTheme}>Toggle Theme</button>
        </div>
      )
    };

    const { getByTestId } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const themeElement = getByTestId("theme");
    const toggleButton = getByTestId("toggle");

    expect(themeElement.textContent).toBe("light");
    fireEvent.click(toggleButton);
    expect(themeElement.textContent).toBe("dark");
    fireEvent.click(toggleButton);
    expect(themeElement.textContent).toBe("light");
  });
}); 