import { useState, useEffect } from "react";
import { translation } from "../utils/translation";
import EnglishIcon1 from "../assets/svg/book-closed.svg";
import EnglishIcon2 from "../assets/svg/chat-chat.svg";
import EnglishIcon3 from "../assets/svg/chinese-noodles-2.svg";
import EnglishIcon4 from "../assets/svg/thai-baht-thai-baht-coin-finance-money.svg";
import EnglishIcon5 from "../assets/svg/google-meet.svg";
import EnglishIcon6 from "../assets/svg/online-interview.svg";
import EnglishIcon7 from "../assets/svg/thai-pattern-architecture.svg";

import ItIcon1 from "../assets/svg/game-controller.svg";
import ItIcon2 from "../assets/svg/js.svg";
import ItIcon3 from "../assets/svg/online-arcade-pc-game-pacman.svg";
import ItIcon4 from "../assets/svg/programming-code-signs.svg";
import ItIcon5 from "../assets/svg/programming-code.svg";
import ItIcon6 from "../assets/svg/programming-monitor.svg";
import ItIcon7 from "../assets/svg/programming-process.svg";
import ItIcon8 from "../assets/svg/python.svg";
import ItIcon9 from "../assets/svg/roblox-svgrepo-com.svg";
import ItIcon10 from "../assets/svg/robot-arm.svg";
import ItIcon11 from "../assets/svg/scratch-cat.svg";
import ItIcon12 from "../assets/svg/robot.svg";

import { SpinningPortfolio } from "./SpinningPortfolio";
import landingImage from "../assets/img/10.png";
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
          <h1>{translation.tr_english.en}</h1>
          <p>
            {translation.tr_guiding_students_to.en}{" "}
            <span style={{ color: "#0693e3", fontWeight: 800 }}>
              {translation.tr_english.en}{" "}
            </span>{" "}
            {translation.tr_fluency_with_a.en}
            <span style={{ color: "#0693e3", fontWeight: 800 }}>
              {translation.tr_seven_years.en}
            </span>
            .
          </p>
          {calculateImageIndex(mouseX) < 3 && (
            <div className="div-english-courses">
              <div className="div-icons-container">
                <div className="div-course-icon div-course-icon-1">
                  <img src={EnglishIcon1} alt="svg icon" />
                </div>
                <div className="div-course-icon div-course-icon-2">
                  <img src={EnglishIcon2} alt="svg icon" />
                </div>
                <div className="div-course-icon div-course-icon-3">
                  <img src={EnglishIcon3} alt="svg icon" />
                </div>
                <div className="div-course-icon div-course-icon-4">
                  <img src={EnglishIcon4} alt="svg icon" />
                </div>
                <div className="div-course-icon div-course-icon-5">
                  <img src={EnglishIcon5} alt="svg icon" />
                </div>
                <div className="div-course-icon div-course-icon-6">
                  <img src={EnglishIcon6} alt="svg icon" />
                </div>
                <div className="div-course-icon div-course-icon-7">
                  <img src={EnglishIcon7} alt="svg icon" />
                </div>{" "}
              </div>
              <div className="div-courses-container">
                <div className="div-course div-course-1">
                  <h3>{translation.tr_exam_preperation.en}</h3>
                </div>
                <div className="div-course div-course-2">
                  <h3>{translation.tr_english_for_daily.en}</h3>
                </div>
                <div className="div-course div-course-3">
                  <h3>{translation.tr_business_english_essentials.en}</h3>
                </div>
                <div className="div-course div-course-4">
                  <h3>{translation.tr_conversational_english_practice.en}</h3>
                </div>

                <div className="div-course div-course-5">
                  <h3>{translation.tr_reading_phonics.en}</h3>
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          className="job-container div-teacher"
          style={opacityStyleTeacher}
          data-aos="fade-right"
          data-aos-duration="250"
          data-aos-delay="500"
        >
          <h1>{translation.tr_it.en}</h1>
          <p>{translation.tr_from_scratch_to.en}</p>
          {calculateImageIndex(mouseX) > 17 && (
            <div className="div-it-courses">
              <div className="div-icons-container div-it-icons-container">
                <div className="div-course-icon div-it-course-icon-1">
                  <img src={ItIcon1} alt="svg icon" />
                </div>
                <div className="div-course-icon div-it-course-icon-2">
                  <img src={ItIcon2} alt="svg icon" />
                </div>
                <div className="div-course-icon div-it-course-icon-3">
                  <img src={ItIcon3} alt="svg icon" />
                </div>
                <div className="div-course-icon div-it-course-icon-4">
                  <img src={ItIcon4} alt="svg icon" />
                </div>
                <div className="div-course-icon div-it-course-icon-5">
                  <img src={ItIcon5} alt="svg icon" />
                </div>
                <div className="div-course-icon div-it-course-icon-6">
                  <img src={ItIcon6} alt="svg icon" />
                </div>
                <div className="div-course-icon div-it-course-icon-7">
                  <img src={ItIcon7} alt="svg icon" />
                </div>
                <div className="div-course-icon div-it-course-icon-8">
                  <img src={ItIcon8} alt="svg icon" />
                </div>
                <div className="div-course-icon div-it-course-icon-9">
                  <img src={ItIcon9} alt="svg icon" />
                </div>
                <div className="div-course-icon div-it-course-icon-10">
                  <img src={ItIcon10} alt="svg icon" />
                </div>
                <div className="div-course-icon div-it-course-icon-11">
                  <img src={ItIcon11} alt="svg icon" />
                </div>
                <div className="div-course-icon div-it-course-icon-12">
                  <img src={ItIcon12} alt="svg icon" />
                </div>
              </div>
              <div className="div-courses-container div-it-courses-container">
                <div className="div-course div-it-course-1">
                  <h3>{translation.tr_scratch.en}</h3>
                </div>
                <div className="div-course div-it-course-2">
                  <h3>{translation.tr_robotics.en} </h3>
                </div>
                <div className="div-course div-it-course-3">
                  <h3>{translation.tr_python.en}</h3>
                </div>
                <div className="div-course div-it-course-4">
                  <h3>{translation.tr_web_design.en}</h3>
                </div>

                <div className="div-course div-it-course-5">
                  <h3>{translation.tr_roblox_game_development.en}</h3>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {window.innerWidth > 768 && (
        <div style={{ opacity: 0 }}>
          <SpinningPortfolio i={calculateImageIndex(mouseX)} />
        </div>
      )}
      <div></div>
      <div className="image-container" style={imgPostionStyle}>
        <div className="div-cover">
          <></>
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
