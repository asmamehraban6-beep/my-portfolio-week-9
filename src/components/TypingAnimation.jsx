import { useEffect, useState } from "react";
import "./TypingAnimation.css";
import asmaImage from "../assets/asma.png";


function TypingAnimation() {

  const text = "React Developer | Web Enthusiast";

  const [displayText, setDisplayText] = useState("");


  useEffect(() => {

    let index = 0;

    const timer = setInterval(() => {

      setDisplayText(text.slice(0, index));

      index++;

      if (index > text.length) {
        clearInterval(timer);
      }

    }, 100);


    return () => clearInterval(timer);

  }, []);



  return (

    <section className="hero" id="home">

      <div className="hero-content">


        <img
          src={asmaImage}
          alt="Asma Mehraban"
          className="profile-image"
        />


        <h1>
          Hi, I'm <span>Asma Mehraban</span>
        </h1>


        <h2>
          {displayText}
        </h2>


        <p>
          I create modern and responsive websites using React.
          I enjoy learning new technologies and building creative digital experiences.
        </p>


      </div>

    </section>

  );

}


export default TypingAnimation;