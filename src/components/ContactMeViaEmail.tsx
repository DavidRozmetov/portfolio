export const ContactMeViaEmail = () => {
  return (
    <div className="contact-via-email-container">
      <h2>Send me an email</h2>
      <div className="form-send-email">
        <div className="row-1">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" className="text-input" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" className="text-input" />
        </div>
        <div className="row-2">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols={30} rows={10}></textarea>
        </div>
      </div>
      <button className="send-email-button">Send Email</button>
    </div>
  );
};
