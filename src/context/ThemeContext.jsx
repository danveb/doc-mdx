import { createContext, useContext, useEffect, useState } from "react";

// initialize ThemeContext
const ThemeContext = createContext();

// custom hook useTheme 
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  return useContext(ThemeContext);
}

// ThemeProvider 
// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  // darkMode state; initial value false 
  const [darkMode, setDarkMode] = useState(false);

  // toggleTheme 
  const toggleTheme = () => {
    setDarkMode((prevTheme) => !prevTheme);
  }

  // theme 
  const theme = darkMode ? "dark" : "light";

  // useEffect 
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme, darkMode]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}