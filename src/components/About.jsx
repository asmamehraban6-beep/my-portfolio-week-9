import { useState } from "react";
import "./About.css";


function About() {

  const [reaction, setReaction] = useState("👋 Hello!");


  const changeReaction = () => {

    setReaction("😊 Thanks for visiting my portfolio!");

  };


  return (

    <section id="about" className="about">

      <h2>
        About Me
      </h2>


      <div
        onClick={changeReaction}
        className="about-icon"
      >
        👩‍💻
      </div>


      <h3>
        {reaction}
      </h3>


      <p>
        I am an aspiring React developer and Health Science student.
        I enjoy building responsive websites, learning modern technologies,
        and creating creative digital experiences.
      </p>


    </section>

  );

}


export default About;