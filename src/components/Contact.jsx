import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact-container">
        <div className="contact-text-box">
          <p className="contact-text">
            Feel free to reach out to me via email <br />
            or connect with me on LinkedIn and GitHub.
          </p>
        </div>
        <div className="contact-info-box">
          <ul className="contact-list">
            <li>
              <a
                href="mailto:karayusuf95@outlook.com"
              >
                contact@yusufkara.dev
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/karayusuff"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/karayusuff
              </a>
            </li>
            <li>
              <a
                href="https://github.com/karayusuff"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/karayusuff
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="contact-icons">
        <a
          href="mailto:karayusuf95@outlook.com"
          className="icon"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://linkedin.com/in/karayusuff"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/karayusuff"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
}

export default Contact;