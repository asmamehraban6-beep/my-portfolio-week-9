import { useEffect, useState } from "react";
import "./ProjectUpdates.css";

function ProjectUpdates() {


  const [updates, setUpdates] = useState([]);



  useEffect(() => {


    const interval = setInterval(() => {


      const newUpdate = {

        id: Date.now(),

        text: "New project update received!"

      };


      setUpdates((previousUpdates) => [

        ...previousUpdates,

        newUpdate

      ]);


    }, 15000);



    return () => clearInterval(interval);



  }, []);




  return (

    <section className="project-upates">

      <h2>Project Updates</h2>


      {

        updates.length === 0 ? (

          <p>
            Waiting for updates...
          </p>

        ) : (


          updates.map((update) => (

            <div className="update-card"
            key={update.id}>
              <p>
                🔔 {update.text}
              </p>

            </div>

          ))


        )

      }


    </section>

  );


}


export default ProjectUpdates;