import "./Profile.css";
import asmaImage from "../assets/asma.png";


function Profile() {

  return (

    <div className="profile-container">


      <img

        src={asmaImage}

        alt="Portrait of Asma Mehraban"

        className="profile-img"

      />



      <h2>
        Asma Mehraban
      </h2>



      <p>
        Frontend Developer | React Learner | Building clean UI experiences
      </p>



    </div>

  );

}


export default Profile;