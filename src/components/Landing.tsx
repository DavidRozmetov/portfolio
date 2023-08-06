import { useState, useEffect } from "react";

import { CoderText } from "./CoderText";
import { SpinningPortfolio } from "./SpinningPortfolio";
import landingImage from "../assets/img/david/landing.png";
export const Landing = () => {
  const [mouseX, setMouseX] = useState<number>(0);

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

  const calculateImageIndex = (x: number) => {
    const scaledValue = (x - 0.3) / 0.3;
    const imageIndex = Math.floor(scaledValue * 17);
    return imageIndex;
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

  const imgPostionStyle = {
    left: calculateImagePosition(calculateOpacity(mouseX)),
    transition: "left 2s",
  };

  return (
    <a className="landing-container" href="/about">
      <div className="landing-image-mobile">
        <img src={landingImage} alt="landing image for mobile devices" />
      </div>
      <div className="jobs-container">
        <div
          className="job-container div-coder"
          style={opacityStyleCoder}
          data-aos="fade-up"
          data-aos-duration="3s"
          data-aos-delay="2s"
        >
          <CoderText />

          <p>Entry-level Front-end React Developer who's open for more </p>
        </div>
        <div
          className="job-container div-teacher"
          style={opacityStyleTeacher}
          data-aos="fade-right"
          data-aos-duration="250"
          data-aos-delay="500"
        >
          <h1>teacher</h1>
          <p>Over 5 years of teaching experience in English and IT</p>
        </div>
      </div>
      <div className="image-container" style={imgPostionStyle}>
        <div className="div-cover">
          <div
            className="div-img div-regular"
            data-aos="fade-right"
            data-aos-duration="750"
            data-aos-delay="1000"
          >
            <SpinningPortfolio i={calculateImageIndex(mouseX)} />
          </div>
        </div>
      </div>
    </a>
  );
};
