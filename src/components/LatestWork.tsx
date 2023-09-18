import { ProjectCard } from "./ProjectCard";
import PhonicsPinkOnPhone from "../assets/img/phonics-pink/phonics-pink-on-phone.png";
import TestGenerator from "../assets/img/test-generator/laptop.png";
import TestWorms from "../assets/img/testworms/monitor.png";

export const LatestWork = () => {
  return (
    <div className="latest-work-container">
      <div className="title-container">
        <p className="title">Some of my latest work</p>
      </div>

      <div className="projects-container">
        <ProjectCard
          title="Phonics Pink"
          subtitle="Vanilla Js"
          imageSource={PhonicsPinkOnPhone}
          index={1}
        />

        <ProjectCard
          title="Test generator"
          subtitle="Vanilla JS"
          imageSource={TestGenerator}
          index={3}
        />

        <ProjectCard
          title="TestWorms"
          subtitle="React TS, Firebase"
          imageSource={TestWorms}
          index={4}
        />
      </div>
    </div>
  );
};
