import { ProjectCard } from "./Card";

import { getFile } from "../firebase/storage";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import scratchCat from "../assets/svg/scratch-cat.svg";
import python from "../assets/svg/programming-monitor.svg";
import { translation } from "../utils/translation";

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
        <p className="title">{translation.tr_popular_it_lessons.en}</p>
      </div>

      <div className="projects-container it-course-cards-container">
        <ProjectCard
          title={translation.tr_game_design_with.en}
          subtitle={translation.tr_learn_to_create.en}
          imageSource={scratchCat}
          index={1}
          isDisabled={true}
          link=""
        />

        <ProjectCard
          title={translation.tr_robotics_for_kids.en}
          subtitle={translation.tr_dive_into_the.en}
          imageSource={Robotics}
          index={2}
          isDisabled={true}
          link=""
        />

        <ProjectCard
          title={translation.tr_python_for_teenagers.en}
          subtitle={translation.tr_designed_for_teens.en}
          imageSource={python}
          index={4}
          isDisabled={true}
          link=""
        />
      </div>
    </div>
  );
};
