import { useState } from "react";
import "./FeedbackWall.css";

function FeedbackWall() {

  const [feedbacks, setFeedbacks] = useState([]);

  const [feedback, setFeedback] = useState({
    name: "",
    rating: 5,
    comment: ""
  });


  const handleChange = (e) => {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value
    });
  };


  const addFeedback = (e) => {
    e.preventDefault();

    setFeedbacks([
      ...feedbacks,
      feedback
    ]);

    setFeedback({
      name: "",
      rating: 5,
      comment: ""
    });
  };


  return (
    <section className="feedback-wall">

      <h2>Feedback Wall</h2>

      <form onSubmit={addFeedback}>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={feedback.name}
          onChange={handleChange}
        />


        <select
          name="rating"
          value={feedback.rating}
          onChange={handleChange}
        >
          <option value="1">⭐</option>
          <option value="2">⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
        </select>


        <textarea
          name="comment"
          placeholder="Your feedback"
          value={feedback.comment}
          onChange={handleChange}
        />


        <button>
          Add Feedback
        </button>

      </form>


      <div className="feedback-list">
        {feedbacks.map((item, index) => (


          <div className="feedback-card"
          key={index}>

            <h3>{item.name}</h3>

            <p>
              {"⭐".repeat(item.rating)}
            </p>

            {item.rating == 5 && (
              <span>🌟 Featured</span>
            )}

            <p>{item.comment}</p>

          </div>

        ))}

      </div>


    </section>
  );
}


export default FeedbackWall;