import React, { useState, useEffect } from "react";
import imgRegular from "../assets/img/david/landing-regular.png";
import imgColor from "../assets/img/david/landing-color.png";
import { CoderText } from "./CoderText";
export const Landing = () => {
  const [mouseX, setMouseX] = useState<number>(0.5);

  const handleMouseMove = (event: MouseEvent) => {
    const windowWidth = window.innerWidth;
    const mouseXPosition = event.clientX / windowWidth;
    setMouseX(mouseXPosition);
  };

  useEffect(() => {
    const landingContainer = document.querySelector(".landing-container");
    if (landingContainer) {
      landingContainer.addEventListener(
        "mousemove",
        handleMouseMove as EventListener
      );
    }

    return () => {
      if (landingContainer) {
        landingContainer.removeEventListener(
          "mousemove",
          handleMouseMove as EventListener
        );
      }
    };
  }, []);

  const calculateOpacity = (x: number) => {
    const opacity = (x - 0.15) / (0.85 - 0.15);

    return Math.min(Math.max(opacity, 0), 1);
  };

  const calculateDistance = (x: number) => {
    const distance = (x - 0.4) / (0.6 - 0.4);

    return Math.min(Math.max(distance, 0), 1);
  };

  const calculateImagePosition = (x: number): string => {
    const minValue = 13;
    const maxValue = 23;
    const distance = maxValue - x * (maxValue - minValue);
    return `${distance}vw`;
  };
  const opacityStyleTeacher = {
    opacity: calculateOpacity(mouseX),
    transition: "opacity 1s", // Add the transition property for 1 second
  };

  const opacityStyleCoder = {
    opacity: 1 - calculateDistance(mouseX),
    transition: "opacity 1s", // Add the transition property for 1 second
  };

  const returnPercentage = (x: number): string => {
    if (x >= 0 && x <= 0.35) {
      return "0%";
    } else if (x <= 0.5) {
      const percentage = ((x - 0.35) / (0.5 - 0.35)) * 60;
      return `${percentage}%`;
    } else if (x <= 0.7) {
      const percentage = ((x - 0.5) / (0.7 - 0.5)) * 60 + 6;
      return `${percentage}%`;
    } else {
      return "120%";
    }
  };
  const imgColorStyle = {
    width: returnPercentage(calculateOpacity(mouseX)),
    transition: "width 2s",
  };

  const imgPostionStyle = {
    left: calculateImagePosition(calculateOpacity(mouseX)),
    transition: "left 2s",
  };

  return (
    <a className="landing-container" href="/about">
      <div className="jobs-container">
        <div className="job-container div-coder" style={opacityStyleCoder}>
          <CoderText />

          <p>Front end React Developer who tries to write elegant code</p>
        </div>
        <div className="job-container div-teacher" style={opacityStyleTeacher}>
          <h1>teacher</h1>
          <p>Over 5 years of teaching experience in English and IT</p>
          {/* <p>{returnPercentage(calculateOpacity(mouseX))}</p> */}
        </div>
      </div>
      <div className="image-container" style={imgPostionStyle}>
        <div className="div-cover">
          <div className="div-img div-regular">
            <img className=" img-regular" src={imgRegular} alt="" />
          </div>
          <div className="div-img div-color" style={imgColorStyle}>
            <img className=" img-color" src={imgColor} alt="" />
          </div>
        </div>
      </div>
    </a>
  );
};
