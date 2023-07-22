import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";

import { BsLine } from "react-icons/bs";
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaLine } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
export const ContactMeViaSocialMedia = () => {
  return (
    <div className="social-media-container">
      <div className="contact-me-text">
        <h1>contact.</h1>
        <h3>Get in touch with me via social media or email.</h3>

        <div className="social-links-container">
          <div className="social-link social-link-linkedin">
            <div className="social-logo-container social-logo-linkedin">
              <FaLinkedinIn />
            </div>

            <p className="social-name-linkedin">LinkedIn</p>
          </div>

          <div className="social-link social-link-instagram ">
            <div className="social-logo-container social-logo-instagram">
              <FaInstagram />
            </div>
            <p className="social-name-instagram">Instagram</p>
          </div>
          <div className="social-link social-link-facebook ">
            <div className="social-logo-container social-logo-facebook">
              <FaFacebookF />
            </div>
            <p className="social-name-facebook">Facebook</p>
          </div>
          <div className="social-link social-link-line ">
            <div className="social-logo-container social-logo-line">
              <BsLine />
            </div>
            <p className="social-name-line">Line</p>
          </div>
        </div>
      </div>
      <div className="contact-me-photo">[photo]</div>
    </div>
  );
};
