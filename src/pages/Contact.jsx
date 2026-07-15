import { useState, useEffect } from "react";
import "./Contact.css";
import FeedbackWall from "../components/FeedbackWall";

function Contact() {


  const [formData, setFormData] = useState(() => {

    const savedData = localStorage.getItem("contactMessage");

    return savedData
      ? JSON.parse(savedData)
      : {
          name: "",
          email: "",
          message: ""
        };

  });



  const [submitted, setSubmitted] = useState(false);




  useEffect(() => {

    localStorage.setItem(
      "contactMessage",
      JSON.stringify(formData)
    );

  }, [formData]);
  useEffect(() => {

  const timer = setTimeout(() => {

    setDebouncedEmail(formData.email);

  }, 500);

  return () => clearTimeout(timer);

}, [formData.email]);





  const handleChange = (e) => {


    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });


  };





  const handleSubmit = (e) => {


    e.preventDefault();


    setSubmitted(true);


  };





  return (


    <section 
      id="contact"
      className="contact"
    >


      <h2>
        Contact Me
      </h2>




      <p>
        Feel free to contact me for projects, collaborations, or opportunities.
      </p>





      <form 
        className="contact-form"
        onSubmit={handleSubmit}
      >



        <input

          type="text"

          name="name"

          placeholder="Your Name"

          value={formData.name}

          onChange={handleChange}

          required

        />





        <input

          type="email"

          name="email"

          placeholder="Your Email"

          value={formData.email}

          onChange={handleChange}

          required

        />





        <textarea

          name="message"

          placeholder="Your Message"

          value={formData.message}

          onChange={handleChange}

          required

        />





        <button type="submit">

          Send Message

        </button>




      </form>




      {/* Live Preview */}

      <div className="live-preview">


        <h3>
          Live Preview
        </h3>



        <p>
          Name: {formData.name || "Your name"}
        </p>



        <p>
          Email: {formData.email || "Your email"}
        </p>



        <p>
          Message: {formData.message || "Your message"}
        </p>



      </div>

      <FeedbackWall />

      {
        submitted && (

          <p>

            ✅ Message sent successfully!

          </p>

        )
      }





    </section>


  );

}


export default Contact;