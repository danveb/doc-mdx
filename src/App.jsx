import { useState, createContext } from "react";
import { About, Navbar, Post } from "./components";

// createContext
export const ThemeContext = createContext();

export default function App() {
  // useState 
  const [darkMode, setDarkMode] = useState(true);

  // value to be darkMode, setDarkMode
  const value = {
    darkMode, setDarkMode
  }

  return (
    <ThemeContext.Provider value={value}>
      <Navbar />
      <About />
      <Post />
    </ThemeContext.Provider>
  )
}
