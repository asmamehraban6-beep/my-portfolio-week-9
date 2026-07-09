import "./LivePreview.css";


function LivePreview({formData}) {

  return (

    <section className="live-preview">

      <h2>
        Live Preview
      </h2>


      <div className="preview-card">

        <h3>
          {formData.name || "Your Name"}
        </h3>


        <p>
          📧 {formData.email || "Your Email"}
        </p>


        <p>
          💬 {formData.message || "Your Message"}
        </p>


      </div>


    </section>

  );

}


export default LivePreview;