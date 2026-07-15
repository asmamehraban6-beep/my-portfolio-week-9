import "./Header.css";

function Header() {


  const scrollToProjects = () => {

    const projectsSection = document.getElementById("projects");

    if (projectsSection) {

      projectsSection.scrollIntoView({
        behavior: "smooth"
      });

    }

  };



  return (


    <header className="header">


      <section 
        className="hero-content"
        aria-label="Portfolio introduction"
      >


        <h1>
          Welcome to My <span>Portfolio</span>
        </h1>



        <p>
          Frontend Developer | React Learner | Building clean UI experiences
        </p>



        <button

          onClick={scrollToProjects}

          aria-label="Explore my projects"

        >

          Explore My Work

        </button>



      </section>


    </header>


  );

}


export default Header;