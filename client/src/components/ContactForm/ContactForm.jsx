import './ContactForm.css'
const ContactForm = ({toSend, handleChange, handleSubmit}) => {
  
  const { from_name, reply_to, message } = toSend;
  return (
    <div className='form box'>
    <form onSubmit={handleSubmit}>
      <input
          type="text"
          name="from_name"
          value={from_name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="reply_to"
          value={reply_to}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          value={message}
          id='textarea'
          onChange={handleChange}
          placeholder="Leave a message..."
          required
        />
        <button className='contact-btn' type="submit">Submit</button>
    </form>
</div>
  );
};

export default ContactForm;