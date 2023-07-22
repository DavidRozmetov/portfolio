import { useEffect } from "react";
import { AboutMe } from "../components/AboutMe";
import { MyStory } from "../components/MyStory";
import { RandomFacts } from "../components/RandomFacts";
import { Skills } from "../components/Skills";
import AOS from "aos";

export const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="about-container">
      <AboutMe></AboutMe>
      <Skills></Skills>
      <RandomFacts></RandomFacts>
      <MyStory></MyStory>
    </div>
  );
};
