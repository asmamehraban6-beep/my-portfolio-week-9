import { useEffect, useState } from "react";
import "./ContactForm.css";


function ContactForm({ formData, setFormData }) {

  const [savedMessage, setSavedMessage] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");


  useEffect(() => {

    const savedData = localStorage.getItem("contactData");

    if (savedData) {

      setFormData(JSON.parse(savedData));
      setSavedMessage(true);

    }

  }, [setFormData]);



  useEffect(() => {

    if (
      formData.name ||
      formData.email ||
      formData.message
    ) {

      localStorage.setItem(
        "contactData",
        JSON.stringify(formData)
      );

    }

  }, [formData]);



  useEffect(() => {

    const timer = setTimeout(() => {

      if (formData.email) {

        const emailPattern =
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(formData.email)) {

          setEmailError(
            "Please enter a valid email address"
          );

        } else {

          setEmailError("");

        }

      } else {

        setEmailError("");

      }

    }, 400);


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


    if (
      !formData.name ||
      !formData.email ||
      !formData.message
    ) {

      alert("Please fill in all fields.");
      return;

    }


    if (emailError) {

      return;

    }



    setSuccessMessage(
      "✅ Message sent successfully!"
    );


    localStorage.removeItem("contactData");


    setSavedMessage(false);



    setFormData({

      name: "",
      email: "",
      message: ""

    });

  };



  return (

    <section id="contact" className="contact-form">


      <h2>
        Contact Me
      </h2>



      {savedMessage && (

        <p>
          You have unsent message data saved!
        </p>

      )}



      {successMessage && (

        <p>
          {successMessage}
        </p>

      )}



      <form onSubmit={handleSubmit}>


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



        {emailError && (

          <p>
            {emailError}
          </p>

        )}



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


    </section>

  );

}


export default ContactForm;