import "./App.css";
import Toggle from "./components/Toggle/Toggle";

import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import ProductList from "./components/ProductList/ProductList";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

import { useContext } from "react";
import { ThemeContext } from "./context.js";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode ? "white" : "black",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
