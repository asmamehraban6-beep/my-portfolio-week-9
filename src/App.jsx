import { useState } from "react";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import FeedbackWall from "./components/FeedbackWall";
import ThemeToggle from "./components/ThemeToggle";
import Skills from "./components/Skills";
import ProjectUpdates from "./components/ProjectUpdates";
import LivePreview from "./components/LivePreview";
import TypingAnimation from "./components/TypingAnimation";

import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  return (

    <div className="app" id="home">

      <Navbar />

      <TypingAnimation />

      <About />

      <Skills />

      <Projects />

      <ProjectUpdates />

      <FeedbackWall />

      <ContactForm
        formData={formData}
        setFormData={setFormData}
      />

      <LivePreview
        formData={formData}
      />


      <ThemeToggle />

    </div>

  );

}

export default App;