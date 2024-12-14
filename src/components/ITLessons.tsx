import { ProjectCard } from "./Card";

import { getFile } from "../firebase/storage";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import scratchCat from "../assets/svg/scratch-cat.svg";
import python from "../assets/svg/programming-monitor.svg";

export const ITLessons = () => {
  const [Robotics, setRobotics] = useState<string>("");

  useEffect(() => {
    getFile("courses/wedo.avif").then((res) => {
      if (!res.success) {
        toast.error("couldn't load an image");
        return;
      }
      setRobotics(res?.message);
    });
  }, []);
  return (
    <div className="latest-work-container popular-it-lessons-container">
      <div className="title-container">
        <p className="title">Popular IT Lessons</p>
      </div>

      <div className="projects-container it-course-cards-container">
        <ProjectCard
          title="Game Design with Scratch"
          subtitle="Learn to create your own games using Scratch! Perfect for beginners, this course teaches coding basics through fun, interactive projects."
          imageSource={scratchCat}
          index={1}
          isDisabled={true}
        />

        <ProjectCard
          title="Robotics for Kids"
          subtitle="Dive into the world of robotics with hands-on projects! Kids will learn to design, build, and program robots, sparking their curiosity in STEM while having fun."
          imageSource={Robotics}
          index={2}
          isDisabled={true}
        />

        <ProjectCard
          title="Python for Teenagers"
          subtitle="Designed for teens, this course covers essential coding concepts through engaging projects, preparing them for more advanced challenges."
          imageSource={python}
          index={4}
          isDisabled={true}
        />
        {/* <ProjectCard
          title="English for Teenagers"
          subtitle="Engaging, relevant conversations using Oxford Discover Futures to boost confidence and critical thinking for real-world English skills."
          imageSource={discoverHeader}
          index={4}
        />

        

        <ProjectCard
          title="Grammar Essentials"
          subtitle="Strengthen your English from the ground up with this focused course. Learn essential grammar rules, fix common mistakes, and gain confidence in writing."
          imageSource={grammarHeader}
          index={6}
        /> */}
      </div>
    </div>
  );
};
