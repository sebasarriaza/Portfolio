import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    <div className="App">
      <Home />
      <Nav />
      <ProjectsSection />
      <AboutSection />
      <FontAwesomeIcon icon={faInstagram} />
    </div>
  );
}

export default App;
