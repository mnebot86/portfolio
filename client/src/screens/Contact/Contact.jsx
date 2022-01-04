import { useState } from "react";
import { send } from "emailjs-com";
import ContactForm from "../../components/ContactForm/ContactForm";

import "./Contact.css";

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    reply_to: "",
    message: "",
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
    
      setToSend({
        from_name: '',
        reply_to: '',
        message: ''
      });
  };


  return (
    <div  className="contact-page">
      <h1 id='contact' className="contact-title">Contact</h1>
    <ContactForm toSend={toSend} handleChange={handleChange} handleSubmit={handleSubmit}/>
    </div>
  );
};

export default Contact;
