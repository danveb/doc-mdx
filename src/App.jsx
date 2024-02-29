import { About, Footer, Navbar, Post } from "./components";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <About />
      <Post />
      <Footer />
    </ThemeProvider>
  )
}
