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
const ExpandableButton = (props: {
  title: string;
  options: string[];
  link: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getSubOptions = (option: string) => {
    if (option === "weekends") {
      return ["weekend mornings", "power hours", "late hours"];
    } else if (option === "weekdays") {
      return ["business hours", "after-school hours", "evenings", "late hours"];
    }
    return [];
  };

  // Function to generate link with proper query string
  const generateLink = (baseLink: string, option: string) => {
    const separator = baseLink.includes("?") ? "&" : "?";
    return `${baseLink}${separator}type=${encodeURIComponent(option)}`;
  };

  return (
    <div
      className="expandable-button-container"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <a
        href={generateLink(props.link, props.title)}
        className="expandable-button-title"
      >
        {props.title}
      </a>

      {isExpanded && (
        <div className="toggle-options-container">
          {props.options.map((option) => {
            const subOptions = getSubOptions(option);
            if (subOptions.length > 0) {
              return (
                <ExpandableButton
                  key={option}
                  title={option}
                  link={generateLink(props.link, option)} // Use generateLink for sub-options as well
                  options={subOptions}
                />
              );
            }
            return (
              <div key={option} className="expandable-button-option">
                <a href={generateLink(props.link, option)}>{option}</a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const MobileExpandableButton = (props: {
  title: string;
  options: string[];
  link: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [subOptionStates, setSubOptionStates] = useState<
    Record<string, boolean>
  >({});

  const getSubOptions = (option: string) => {
    if (option === "weekends") {
      return ["weekend mornings", "power hours", "late hours"];
    } else if (option === "weekdays") {
      return ["business hours", "after-school hours", "evenings", "late hours"];
    }
    return [];
  };

  const toggleSubOption = (option: string) => {
    setSubOptionStates((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  const generateLink = (baseLink: string, option: string) => {
    const separator = baseLink.includes("?") ? "&" : "?";
    return `${baseLink}${separator}type=${encodeURIComponent(option)}`;
  };

  return (
    <div className="expandable-button-container">
      <div
        className="expandable-button-title"
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          cursor: "pointer",
          padding: "10px",
          background: "#f0f0f0",
          border: "1px solid #ddd",
        }}
      >
        <a href={generateLink(props.link, props.title)}>{props.title}</a>
        <span style={{ marginLeft: "10px" }}>{isExpanded ? "▲" : "▼"}</span>
      </div>

      {isExpanded && (
        <div
          className="toggle-options-container"
          style={{ marginLeft: "20px" }}
        >
          {props.options.map((option) => {
            const subOptions = getSubOptions(option);

            return (
              <div key={option} style={{ marginBottom: "5px" }}>
                <div
                  className="expandable-button-option"
                  onClick={() => toggleSubOption(option)}
                  style={{
                    cursor: "pointer",
                    background: "#e0e0e0",
                    padding: "8px",
                    borderRadius: "4px",
                  }}
                >
                  <a href={generateLink(props.link, option)}>{option}</a>
                  {subOptions.length > 0 && (
                    <span style={{ marginLeft: "10px" }}>
                      {subOptionStates[option] ? "▲" : "▼"}
                    </span>
                  )}
                </div>
                {subOptionStates[option] && subOptions.length > 0 && (
                  <div
                    className="sub-options-container"
                    style={{
                      marginLeft: "20px",
                      padding: "5px",
                      borderLeft: "2px solid #ccc",
                    }}
                  >
                    {subOptions.map((subOption) => (
                      <div key={subOption} style={{ marginBottom: "5px" }}>
                        <a
                          href={generateLink(props.link, subOption)}
                          style={{ color: "#333", textDecoration: "none" }}
                        >
                          {subOption}
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

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

        {window.innerWidth > 768 ? (
          <ExpandableButton
            title="schedule"
            options={["weekdays", "weekends"]}
            link="/schedule"
          />
        ) : (
          <a
            href="/schedule?type=schedule"
            className={
              window.location.pathname === "/schedule"
                ? "navbar-item-active"
                : ""
            }
          >
            schedule
          </a>
        )}

        <a
          href="/wordle"
          className={
            window.location.pathname === "/wordle" ? "navbar-item-active" : ""
          }
        >
          wordle
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

        <a
          href="https://www.facebook.com/profile.php?id=61571017861526 "
          target="_blank"
        >
          <FaFacebookF />
        </a>
        <a href="https://line.me/ti/p/Jq_GQiOr3e" target="_blank">
          <BsLine />
        </a>
      </div>
    </div>
  );
};
