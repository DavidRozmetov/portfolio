import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";

import { BsLine } from "react-icons/bs";
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaLine } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { LinkedInBanger } from "./LinkedInBanger";
import { useEffect } from "react";
import AOS from "aos";
export const ContactMeViaSocialMedia = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="social-media-container">
      <div className="contact-me-text" data-aos="fade-right">
        <h1>contact.</h1>
        <h3>Get in touch with me via social media or email.</h3>

        <div className="social-links-container">
          <a
            className="social-link social-link-linkedin"
            href="https://www.linkedin.com/in/davranbek-rozmetov-5a89301aa/"
            target="_blank"
          >
            <div className="social-logo-container social-logo-linkedin">
              <FaLinkedinIn />
            </div>

            <p className="social-name-linkedin">LinkedIn</p>
          </a>

          <a
            className="social-link social-link-instagram "
            href="https://www.instagram.com/teacherdvid/"
            target="_blank"
          >
            <div className="social-logo-container social-logo-instagram">
              <FaInstagram />
            </div>
            <p className="social-name-instagram">Instagram</p>
          </a>
          <a
            className="social-link social-link-facebook "
            href="https://www.facebook.com/davrabekRozmetov1/"
            target="_blank"
          >
            <div className="social-logo-container social-logo-facebook">
              <FaFacebookF />
            </div>
            <p className="social-name-facebook">Facebook</p>
          </a>
          <a
            className="social-link social-link-line "
            href="https://line.me/ti/p/Jq_GQiOr3e"
            target="_blank"
          >
            <div className="social-logo-container social-logo-line">
              <BsLine />
            </div>
            <p className="social-name-line">Line</p>
          </a>
        </div>
      </div>
      <div className="contact-me-photo">
        <LinkedInBanger />
      </div>
    </div>
  );
};
