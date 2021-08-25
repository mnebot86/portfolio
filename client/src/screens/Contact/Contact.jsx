import { useState } from "react";
import { send } from "emailjs-com";
import dev from "../../asset/contact-image/8.gif";
import jammin from "../../asset/contact-image/designergif.gif";
import "./Contact.css";

const Contact = () => {
  const [toSend, setToSend] = useState({
    name: "",
    email: "",
    content: "",
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    send(
      "service_z4g0caa",
      "template_mfyw6zr",
      toSend,
      "user_mvCU1usErr3SgkPDOTLlV"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...  ", err);
      });
  };
  return (
    <div className="contact-screen">
      <div className="contact-header">
        <p>
          Thank you for taking the time to look through my portfolio. If you
          want to work together. Please reach out to me!
        </p>
      </div>
      <div className="form-container">
        <div className="img-container">
          <img src={dev} alt="designer-vs-developer" />
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder="Name"
            value={toSend.from_name}
            name="name"
            onChange={handleChange}
          />
          <input
            required
            type="email"
            placeholder="Email"
            value={toSend.to_name}
            name="email"
            onChange={handleChange}
          />
          <textarea
            required
            type="text"
            placeholder="Content"
            value={toSend.message}
            name="content"
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <div className="img-container">
          <img src={jammin} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
