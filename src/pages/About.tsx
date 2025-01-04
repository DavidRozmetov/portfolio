import { useEffect } from "react";
import { AboutMe } from "../components/about/AboutMe";

import AOS from "aos";

import { Philosophy } from "../components/about/Philosophy";
import { CountFigures } from "../components/about/CountFigures";
import { MyTeachingStyle } from "../components/about/MyTeachingStyle";
import { Prices } from "../components/about/Prices";

export const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="about-container">
      <AboutMe />

      <Philosophy />
      <CountFigures />
      <MyTeachingStyle />
      <Prices />
    </div>
  );
};
