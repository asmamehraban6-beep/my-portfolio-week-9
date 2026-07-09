import { useState } from "react";
import "./Skills.css";


function Skills() {


  const [hoverSkill, setHoverSkill] = useState("");



  const skills = [

    {
      name: "React",
      level: 85,
      fact: "React is a popular library for building user interfaces."
    },

    {
      name: "JavaScript",
      level: 75,
      fact: "JavaScript makes websites interactive."
    },

    {
      name: "CSS",
      level: 80,
      fact: "CSS controls the design and layout of websites."
    },

    {
      name: "HTML",
      level: 90,
      fact: "HTML creates the structure of web pages."
    }

  ];



  return (

    <section className="skills">

      <h2>
        My Skills
      </h2>


      {
        skills.map((skill) => (

          <div

            className="skill-card"

            key={skill.name}

            onMouseEnter={() =>
              setHoverSkill(skill.name)
            }

            onMouseLeave={() =>
              setHoverSkill("")
            }

          >

            <h3>
              {skill.name}
            </h3>


            <div className="progress-bar">

              <div

                className="progress-fill"

                style={{
                  width: `${skill.level}%`
                }}

              >

                {skill.level}%

              </div>

            </div>


            {
              hoverSkill === skill.name && (

                <p>
                  💡 {skill.fact}
                </p>

              )

            }


          </div>

        ))

      }


    </section>

  );

}


export default Skills;