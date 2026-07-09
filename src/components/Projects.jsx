import { useState } from "react";
import "./Projects.css";


function Projects() {


  const [filter, setFilter] = useState("All");

  const [selectedProject, setSelectedProject] = useState(null);



  const projects = [

    {
      id: 1,
      title: "Portfolio Website",
      image: "🌐",
      description: "A personal portfolio built with React.",
      technology: "React",
      featured: true,
      details: "A responsive developer portfolio with modern UI design."
    },


    {
      id: 2,
      title: "Todo App",
      image: "✅",
      description: "A task management application.",
      technology: "JavaScript",
      featured: false,
      details: "A simple application for managing daily tasks."
    },


    {
      id: 3,
      title: "Landing Page",
      image: "🎨",
      description: "A responsive website design.",
      technology: "CSS",
      featured: false,
      details: "A clean and responsive landing page design."
    }

  ];



  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.technology === filter
        );



  return (

    <section id="projects" className="projects">


      <h2>
        My Projects
      </h2>



      <div className="filter-buttons">


        <button onClick={() => setFilter("All")}>
          All
        </button>


        <button onClick={() => setFilter("React")}>
          React
        </button>


        <button onClick={() => setFilter("JavaScript")}>
          JavaScript
        </button>


        <button onClick={() => setFilter("CSS")}>
          CSS
        </button>


      </div>



      <div className="projects-grid">


        {
          filteredProjects.map((project) => (

            <div 
              className="project-card" 
              key={project.id}
            >


              <h3>
                {project.image} {project.title}
              </h3>



              {
                project.featured && (

                  <span className="badge">
                    ⭐ Featured Project
                  </span>

                )
              }



              <p>
                {project.description}
              </p>



              <p className="technology">
                🛠 {project.technology}
              </p>



              <button
                onClick={() =>
                  setSelectedProject(project)
                }
              >
                View Details
              </button>



            </div>

          ))
        }


      </div>




      {
        selectedProject && (

         <div className="details-box">

  <h3>
    {selectedProject.image} {selectedProject.title}
  </h3>


  <p>
    {selectedProject.description}
  </p>


  <p>
    This project was built using <strong>{selectedProject.technology}</strong>.
  </p>


  <p>
    {selectedProject.details}
  </p>


</div>

        )
      }



    </section>

  );

}


export default Projects;