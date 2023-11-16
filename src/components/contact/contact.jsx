import "./contact.css";

function Contact() {
  function sendContact(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // Access form data
    const formData = new FormData(event.target);
    const name = formData.get("name");
    console.log(name);
  }

  return (
    <div id="contact">
      <div className="contact-container">
        <h1 className="fade">Contact me</h1>
        <div className="contact-content">
          <div className="contact-information fade">
            {/* <h2>Get in touch:</h2> */}
            <a href="mailto:sjurgustavsen@gmail.com">
              Mail: Sjurgustavsen@gmail.com
            </a>
            <a href="https://no.linkedin.com/in/sjur-gustavsen-0b6352186">
              Linkedin
            </a>
            <a href="https://github.com/GustavsenSj">GitHub</a>
          </div>
          {/* 
          <form className="contact-form" onSubmit={sendContact}>
            <div className="fade">
              <input className="form-text" name="name" placeholder="Name" />
              <input className="form-text" name="email" placeholder="Email" />
            </div>
            <textarea
              className="form-text fade"
              name="message"
              placeholder="Message"
            />
            <button className="fade" type="submit">
              Send
            </button>
          </form> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
