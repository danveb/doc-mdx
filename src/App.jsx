import { useState, createContext } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Post from "./components/Post";

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
