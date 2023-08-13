import { useEffect } from "react";
import { AboutMe } from "../components/AboutMe";
import { MyStory } from "../components/MyStory";
import { RandomFacts } from "../components/RandomFacts";
import { Skills } from "../components/Skills";
import AOS from "aos";
import { AboutMeImages } from "../components/AboutMeImages";

export const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="about-container">
      <AboutMe></AboutMe>
      <AboutMeImages></AboutMeImages>
      <Skills></Skills>
      <RandomFacts></RandomFacts>
    </div>
  );
};
