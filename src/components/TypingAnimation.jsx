import { useEffect, useState } from "react";
import "./TypingAnimation.css";
import asmaImage from "../assets/asma.png";
import cvFile from "../assets/Asma-Mehraban-CV.pdf";
import { Link } from "react-router-dom";


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


    <section
      className="hero"
      id="home"
    >



      <div className="hero-content">





        <img

          src={asmaImage}

          alt="Portrait of Asma Mehraban, frontend developer"

          className="profile-image"

        />






        <h1>

          Hi, I'm <span>Asma Mehraban</span>

        </h1>






        <h2>

          {displayText}

        </h2>







        <p>

          I build modern, responsive, and accessible
          web applications using React.
          I enjoy learning new technologies and creating
          meaningful digital experiences.

        </p>








        <a

          href={cvFile}

          target="_blank"

          rel="noreferrer"

          className="resume-btn"

        >

          Download Resume

        </a>









      <div className="hero-buttons">

  <Link to="/projects">

    <button>
      View My Projects
    </button>

  </Link>


  <Link to="/contact">

    <button>
      Let's Connect
    </button>

  </Link>


</div>


      </div>




    </section>


  );

}



export default TypingAnimation;