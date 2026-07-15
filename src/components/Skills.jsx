import { useState } from "react";
import "./Skills.css";


function Skills() {

  const [hoverSkill, setHoverSkill] = useState("");


  const skills = [

    {
      name: "React",
      level: 85,
      fact: "I build reusable components and interactive user interfaces with React."
    },

    {
      name: "JavaScript",
      level: 75,
      fact: "I use JavaScript to create dynamic and interactive web experiences."
    },

    {
      name: "CSS",
      level: 80,
      fact: "I create responsive layouts and modern user interface designs."
    },

    {
      name: "HTML",
      level: 90,
      fact: "I use semantic HTML to create accessible web structures."
    },

    {
      name: "Git & GitHub",
      level: 70,
      fact: "I use Git and GitHub for version control and project management."
    },

    {
      name: "Responsive Design",
      level: 85,
      fact: "I design websites that work across desktop, tablet, and mobile devices."
    }

  ];


  return (

    <section 
      className="skills"
      id="skills"
    >

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



            <div 
              className="progress-bar"
              role="progressbar"
              aria-label={`${skill.name} skill level`}
              aria-valuenow={skill.level}
              aria-valuemin="0"
              aria-valuemax="100"
            >


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