import "./Footer.css";


function Footer() {

  return (

    <footer className="footer">


      <p>
        © {new Date().getFullYear()} Asma Mehraban
      </p>




      <div 
        className="socials"
        aria-label="Social media links"
      >



        <a

          href="https://github.com/asmamehraban6-beep/Asma-Mehraban-"

          target="_blank"

          rel="noreferrer"

          aria-label="Visit Asma Mehraban GitHub profile"

        >

          GitHub

        </a>






        <a

          href="https://www.linkedin.com/in/asma-mehraban-279a48404"

          target="_blank"

          rel="noreferrer"

          aria-label="Visit Asma Mehraban LinkedIn profile"

        >

          LinkedIn

        </a>






        <a

          href="mailto:asmamehraban6@gmail.com"

          aria-label="Send email to Asma Mehraban"

        >

          Email

        </a>



      </div>



    </footer>


  );

}


export default Footer;