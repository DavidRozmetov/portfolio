import { BsLine } from "react-icons/bs";
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaLine } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">[David]</div>
      <div className="navbar-items">
        <a
          href="/about"
          className={
            window.location.pathname === "/about" ? "navbar-item-active" : ""
          }
        >
          about
        </a>
        <a
          href="/portfolio"
          className={
            window.location.pathname === "/portfolio"
              ? "navbar-item-active"
              : ""
          }
        >
          portfolio
        </a>
        <a
          href="/blog"
          className={
            window.location.pathname === "/blog" ? "navbar-item-active" : ""
          }
        >
          blog
        </a>
        <a
          href="/contact"
          className={
            window.location.pathname === "/contact" ? "navbar-item-active" : ""
          }
        >
          contact{" "}
        </a>
      </div>
      <div className="navbar-social-links">
        <FaLinkedinIn />
        <FaInstagram />
        <FaFacebookF />
        <BsLine />
      </div>
    </div>
  );
};
