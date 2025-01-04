import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";

import { BsLine } from "react-icons/bs";
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaLine } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { LinkedInBanger } from "./LinkedInBanger";
import { useEffect } from "react";
import AOS from "aos";
import { translation } from "../utils/translation";
export const ContactMeViaSocialMedia = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="social-media-container">
      <div className="contact-me-text" data-aos="fade-right">
        <h1>{translation.tr_contact.en}.</h1>
        <h3>{translation.tr_get_in_touch.en}</h3>

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
            href="https://www.instagram.com/englishwithteacherdavid/"
            target="_blank"
          >
            <div className="social-logo-container social-logo-instagram">
              <FaInstagram />
            </div>
            <p className="social-name-instagram">Instagram</p>
          </a>
          <a
            className="social-link social-link-facebook "
            href="https://www.facebook.com/profile.php?id=61571017861526"
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
