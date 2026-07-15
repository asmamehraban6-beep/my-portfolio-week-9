import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";


function ProjectDetails() {

  const { id } = useParams();


  const project = projects.find(
    (item) => item.id === id
  );


  if (!project) {

    return (

      <div>

        <h2>
          Project Not Found
        </h2>


        <Link to="/projects">

          <button>
            Back to Projects
          </button>

        </Link>

      </div>

    );

  }



  return (

    <section className="project-details">


      <h1>
        {project.image} {project.title}
      </h1>


      <p>
        {project.description}
      </p>


      <p>
        <strong>Status:</strong> {project.status}
      </p>


      <p>
        <strong>Technologies:</strong>{" "}
        {project.technology.join(", ")}
      </p>


      <p>
        <strong>Details:</strong> {project.details}
      </p>


      <p>
        <strong>Progress:</strong> {project.progress}%
      </p>



      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
      >

        <button>
          View GitHub
        </button>

      </a>



      <br /><br />



      <Link to="/projects">

        <button>
          Back to Projects
        </button>

      </Link>


    </section>

  );

}


export default ProjectDetails;