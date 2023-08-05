import { BsLine } from "react-icons/bs";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaHamburger,
  FaGithub,
} from "react-icons/fa";
import Logo from "../assets/logo-white-text.png";
import { useState } from "react";
export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);

  return (
    <div className="navbar-container">
      {!toggleMenu && (
        <div
          className="close-menu-background"
          onClick={() => {
            setToggleMenu(true);
          }}
        ></div>
      )}
      <div className="navbar-logo">
        <a href="/">
          <img src={Logo} alt="David logo" />
        </a>
        <button
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}
          className={toggleMenu ? "btn-menu" : "btn-menu btn-menu-active"}
        >
          {<FaHamburger />}
        </button>
      </div>
      <div
        className={
          toggleMenu ? "navbar-items" : "navbar-items navbar-items-active"
        }
      >
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
          href="/contact"
          className={
            window.location.pathname === "/contact" ? "navbar-item-active" : ""
          }
        >
          contact{" "}
        </a>
      </div>
      <div
        className={
          toggleMenu
            ? "navbar-social-links"
            : "navbar-social-links navbar-social-links-active"
        }
      >
        <a
          href="https://www.linkedin.com/in/davranbek-rozmetov-5a89301aa/"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>

        <a href="https://github.com/DavidRozmetov" target="_blank">
          <FaGithub />
        </a>

        <a href="https://www.facebook.com/davrabekRozmetov1/ " target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://line.me/ti/p/Jq_GQiOr3e" target="_blank">
          <BsLine />
        </a>
      </div>
    </div>
  );
};
