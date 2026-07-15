import { useState } from "react";
import "./About.css";


function About() {

  const [reaction, setReaction] = useState("👋 Hello!");


  const changeReaction = () => {

    setReaction("😊 Thanks for visiting my portfolio!");

  };


  return (

    <section 
      id="about" 
      className="about"
    >

      <h2>
        About Me
      </h2>


      <div
        onClick={changeReaction}
        className="about-icon"
        role="button"
        tabIndex="0"
        aria-label="Click to see a welcome message"
      >
        👩‍💻
      </div>


      <h3>
        {reaction}
      </h3>


      <p>
        I am Asma Mehraban, an aspiring frontend developer and
        Health Science student. I am passionate about building
        modern, responsive, and user-friendly web applications
        using React and modern web technologies.
      </p>


      <p>
        My learning journey started with digital skills and web
        development fundamentals. Through practical projects, I
        continue improving my coding skills and exploring new
        technologies.
      </p>


      <h3>
        My Goals
      </h3>


      <p>
        My goal is to become a professional frontend developer,
        create meaningful digital experiences, and continue
        growing as a lifelong learner.
      </p>


      <h3>
        Interests
      </h3>


      <p>
        I enjoy creating responsive user interfaces, solving
        problems, learning new technologies, and building creative
        projects that improve my development skills.
      </p>


    </section>

  );

}


export default About;