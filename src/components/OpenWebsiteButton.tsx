import React from "react";
import { IconType } from "react-icons";
import "../SCSS/project.scss";

interface OpenWebsiteButtonProps {
  title: string;
  link: string;
  icon: IconType;
}

const OpenWebsiteButton: React.FC<OpenWebsiteButtonProps> = ({
  title,
  link,
  icon,
}) => {
  const handleButtonClick = () => {
    window.open(link, "_blank");
  };

  return (
    <button
      className={
        title === "Watch On" ? "btn-website btn-youtube" : "btn-website"
      }
      onClick={handleButtonClick}
    >
      {title} <span className="icon">{React.createElement(icon)}</span>
    </button>
  );
};

export default OpenWebsiteButton;
