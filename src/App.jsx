import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Card />
      <Portfolio />
      <Contact />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
