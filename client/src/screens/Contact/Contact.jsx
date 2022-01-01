import { useState } from "react";
import { send } from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_email: "",
    message: undefined,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setToSend({
      ...toSend,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      toSend,
      process.env.REACT_APP_USER_ID
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const { from_name, reply_to, message } = toSend;

  return (
    <div className="contact-page">
      <h1>Hello</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="from_name"
          value={from_name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="reply_to"
          value={reply_to}
          onChange={handleChange}
          placeholder="Email"
        />
        <textarea
          name="message"
          value={message}
          id=""
          cols="30"
          rows="10"
          onChange={handleChange}
          placeholder="Leave a message..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
