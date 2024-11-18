import { ProjectCard } from "./Card";

import { getFile } from "../firebase/storage";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const LatestWork = () => {
  const [businessEnglishHeader, setBusinessEnglishHeader] =
    useState<string>("");
  // const [englishFileHeader, setEnglishFileHeader] = useState<string>("");
  const [kidsEnglishHeader, setKidsEnglishHeader] = useState<string>("");
  // const [discoverHeader, setDiscoverHeader] = useState<string>("");
  const [refreshEnglishHeader, setRefreshEnglishHeader] = useState<string>("");
  // const [grammarHeader, setGrammarHeader] = useState<string>("");

  useEffect(() => {
    getFile("courses/15.png").then((res) => {
      if (!res.success) {
        toast.error("couldn't load an image");
        return;
      }
      setBusinessEnglishHeader(res?.message);
    });

    // getFile("courses/16.png").then((res) => {
    //   if (!res.success) {
    //     toast.error("couldn't load an image");
    //     return;
    //   }
    //   setDiscoverHeader(res?.message);
    // });

    // getFile("courses/17.png").then((res) => {
    //   if (!res.success) {
    //     toast.error("couldn't load an image");
    //     return;
    //   }
    //   setEnglishFileHeader(res?.message);
    // });

    getFile("courses/18.png").then((res) => {
      if (!res.success) {
        toast.error("couldn't load an image");
        return;
      }
      setKidsEnglishHeader(res?.message);
    });

    getFile("courses/19.png").then((res) => {
      if (!res.success) {
        toast.error("couldn't load an image");
        return;
      }
      setRefreshEnglishHeader(res?.message);
    });

    // getFile("courses/20.png").then((res) => {
    //   if (!res.success) {
    //     toast.error("couldn't load an image");
    //     return;
    //   }
    //   setGrammarHeader(res?.message);
    // });
  }, []);
  return (
    <div className="latest-work-container">
      <div className="title-container">
        <p className="title">Popular English Lessons</p>
      </div>

      <div className="projects-container">
        <ProjectCard
          title="Refreshment English"
          subtitle="Perfect for those who’ve studied English but need a boost. Refresh your vocabulary, polish speaking skills, and regain fluency."
          imageSource={refreshEnglishHeader}
          index={1}
        />
        {/* <ProjectCard
          title="English for Daily Life"
          subtitle="Learning tools for every situation. Build confidence in everyday conversations, from ordering food to making new friends!"
          imageSource={englishFileHeader}
          index={1}
        /> */}

        <ProjectCard
          title="Business English Essentials"
          subtitle="Practice language that is relevant to your work context, so you can use what you learn in real work situations."
          imageSource={businessEnglishHeader}
          index={2}
        />

        <ProjectCard
          title="English for Young Learners"
          subtitle="Fun, foundational English lessons using various tools to build core language skills through stories, activities, and exercises."
          imageSource={kidsEnglishHeader}
          index={4}
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
