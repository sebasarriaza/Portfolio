import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <div className="App">
      <Home />
      <Nav />
      <ProjectsSection/>
    </div>
  );
}

export default App;
