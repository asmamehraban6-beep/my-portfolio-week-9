import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectUpdates from "../components/ProjectUpdates";
import projects from "../data/projects";
import "./Projects.css";


function Projects() {

  const [filter, setFilter] = useState("All");


  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) =>
          project.technology.includes(filter)
        );


  return (

    <section 
      className="projects" 
      id="projects"
    >

      <h2>
        My Projects
      </h2>



      <div className="filter-buttons">


        <button
          onClick={() => setFilter("All")}
        >
          All
        </button>


        <button
          onClick={() => setFilter("React")}
        >
          React
        </button>


        <button
          onClick={() => setFilter("JavaScript")}
        >
          JavaScript
        </button>


        <button
          onClick={() => setFilter("CSS")}
        >
          CSS
        </button>


      </div>



      <div className="projects-grid">


        {
          filteredProjects.map((project) => (

            <ProjectCard

              key={project.id}

              project={project}

            />

          ))
        }


      </div>



      <ProjectUpdates />


    </section>

  );

}


export default Projects;