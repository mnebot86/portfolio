import React from 'react';

const ContactForm = ({toSend, handleChange, handleSubmit}) => {
  
  const { from_name, reply_to, message } = toSend;
  return (
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
          value={undefined}
          id=""
          cols="30"
          rows="10"
          onChange={handleChange}
          placeholder="Leave a message..."
        />
        <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;