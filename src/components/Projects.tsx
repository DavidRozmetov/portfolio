import { ProjectCard } from "./ProjectCard";

import PhonicsPinkOnPhone from "../assets/img/phonics-pink/phonics-pink-on-phone.png";
import PhonicsBlue from "../assets/img/phonics-blue/phonics-blue-monitor-yellow-bg.png";
import SnappyLike from "../assets/img/snappy-like-thumbnail.png";
import WWTBAM from "../assets/img/wwtbam.png";
import TestGenerator from "../assets/img/test-generator/laptop.png";
import TestWorms from "../assets/img/testworms/5.png";

export const Projects = () => {
  return (
    <div className="projects-container">
      <ProjectCard
        title="Phonics Pink"
        subtitle="Vanilla Js"
        imageSource={PhonicsPinkOnPhone}
        index={1}
      />
      <ProjectCard
        title="Phonics Blue"
        subtitle="React JS, Firebase "
        imageSource={PhonicsBlue}
        index={2}
      />

      <ProjectCard
        title="SnappyLike"
        subtitle="Wix"
        imageSource={SnappyLike}
        index={3}
      />

      <ProjectCard
        title="Who Wants To be a Mil.."
        subtitle="Vanilla JS"
        imageSource={WWTBAM}
        index={2}
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
  );
};
