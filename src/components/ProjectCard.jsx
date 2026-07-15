import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FavoriteContext } from "../context/FavoriteContext";
import TechBadge from "./TechBadge";
import "./ProjectCard.css";


function ProjectCard({ project }) {


  const { favorites, toggleFavorite } =
    useContext(FavoriteContext);



  const [showInfo, setShowInfo] = useState(false);



  const isFavorite = favorites.includes(project.id);




  return (


    <article className="project-card">



      <h2>
        {project.image} {project.title}
      </h2>





      {
        project.status && (

          <span className="badge">

            {project.status}

          </span>

        )
      }





      {
        project.description && (

          <p>

            {project.description}

          </p>

        )
      }






      <div className="tech-list">


        {
          project.technology.map((tech) => (

            <TechBadge

              key={tech}

              tech={tech}

            />

          ))
        }


      </div>







      {
        project.progress && (


          <div className="project-progress">


            <p>

              Progress: {project.progress}%

            </p>




            <div className="progress-bar">


              <div

                className="progress-fill"

                style={{

                  width: `${project.progress}%`

                }}

                role="progressbar"

                aria-valuenow={project.progress}

                aria-valuemin="0"

                aria-valuemax="100"

              />

            </div>



          </div>


        )

      }







      <div className="project-actions">



        <button

          onClick={() =>
            setShowInfo(!showInfo)
          }

          aria-expanded={showInfo}

          aria-label="Show or hide project details"

        >

          {
            showInfo
              ? "Hide Details"
              : "More Info"
          }


        </button>






        <button

          onClick={() =>
            toggleFavorite(project.id)
          }

          aria-label={

            isFavorite

              ? "Remove project from favorites"

              : "Add project to favorites"

          }

        >

          {

            isFavorite

              ? "⭐ Favorited"

              : "☆ Add Favorite"

          }


        </button>




      </div>








      <div className="project-buttons">





        {
          project.liveDemo && (


            <a

              href={project.liveDemo}

              target="_blank"

              rel="noreferrer"

              className="project-btn"

              aria-label={`View live demo of ${project.title}`}

            >

              🚀 View Project


            </a>


          )

        }






        <a

          href={project.github}

          target="_blank"

          rel="noreferrer"

          className="project-btn"

          aria-label={`View code for ${project.title}`}

        >

          💻 View Code


        </a>




      </div>








      {

        showInfo && (


          <div className="project-details">



            <h3>
              Problem
            </h3>


            <p>
              {project.problem}
            </p>





            <h3>
              Solution
            </h3>


            <p>
              {project.solution}
            </p>





            <h3>
              Outcome
            </h3>


            <p>
              {project.outcome}
            </p>




          </div>


        )

      }







      <Link

        to={`/projects/${project.id}`}

        className="details-link"

        aria-label={`Open details page for ${project.title}`}

      >

        View Details Page


      </Link>





    </article>


  );

}



export default ProjectCard;