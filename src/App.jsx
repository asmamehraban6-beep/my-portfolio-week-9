import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import About from "./pages/About";

import "./App.css";


function App() {

  return (

    <div className="app">


      <Navbar />


      <Routes>


        <Route
          path="/"
          element={<Home />}
        />
       
        <Route
  path="/"
  element={<Home />}
/>

<Route
  path="/about"
  element={<About />}
/>

        <Route
          path="/projects"
          element={<Projects />}
        />


        <Route
          path="/projects/:id"
          element={<ProjectDetails />}
        />


        <Route
          path="/contact"
          element={<Contact />}
        />


        <Route
          path="*"
          element={<NotFound />}
        />


      </Routes>

      <Footer /> 

      <ThemeToggle />


    </div>

  );

}


export default App;