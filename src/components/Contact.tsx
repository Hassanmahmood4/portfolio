import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <div className="contact-links">
              <a
                href="https://www.linkedin.com/in/hassanmahmood/"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                className="contact-link"
              >
                LinkedIn <MdArrowOutward className="contact-link-icon" />
              </a>
              <a
                href="https://github.com/Hassanmahmood4"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                className="contact-link"
              >
                GitHub <MdArrowOutward className="contact-link-icon" />
              </a>
            </div>
            <h4 className="contact-education-heading">Education</h4>
            <p className="contact-summary">
              Computer Engineering student with a strong focus on software
              development—building practical experience across the full stack, from
              interfaces and APIs to data and deployment. Actively deepening skills
              in machine learning to design features that are both reliable and
              intelligent, and to connect classroom foundations with real-world
              product thinking.
            </p>
          </div>
          <div className="contact-box contact-box--credit">
            <h2>
              Designed and Developed <br /> by <span>Hassan Mahmood</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
