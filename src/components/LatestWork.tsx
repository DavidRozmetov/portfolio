import { ProjectCard } from "./Card";

import { getFile } from "../firebase/storage";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { translation } from "../utils/translation";

export const LatestWork = (props: { title: string }) => {
  const [businessEnglishHeader, setBusinessEnglishHeader] =
    useState<string>("");
  const [englishFileHeader, setEnglishFileHeader] = useState<string>("");
  const [kidsEnglishHeader, setKidsEnglishHeader] = useState<string>("");
  const [discoverHeader, setDiscoverHeader] = useState<string>("");
  const [refreshEnglishHeader, setRefreshEnglishHeader] = useState<string>("");
  const [grammarHeader, setGrammarHeader] = useState<string>("");

  useEffect(() => {
    getFile("courses/15.png").then((res) => {
      if (!res.success) {
        toast.error("couldn't load an image");
        return;
      }
      setBusinessEnglishHeader(res?.message);
    });

    getFile("courses/16.png").then((res) => {
      if (!res.success) {
        toast.error("couldn't load an image");
        return;
      }
      setDiscoverHeader(res?.message);
    });

    getFile("courses/17.png").then((res) => {
      if (!res.success) {
        toast.error("couldn't load an image");
        return;
      }
      setEnglishFileHeader(res?.message);
    });

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

    getFile("courses/20.png").then((res) => {
      if (!res.success) {
        toast.error("couldn't load an image");
        return;
      }
      setGrammarHeader(res?.message);
    });
  }, []);
  return (
    <div className="latest-work-container">
      <div className="title-container">
        <p className="title">{props.title}</p>
      </div>

      <div className="projects-container">
        <ProjectCard
          link="refreshment-english"
          title={translation.tr_refreshment_english.en}
          subtitle={translation.tr_perfect_for_those.en}
          imageSource={refreshEnglishHeader}
          index={1}
          isDisabled={false}
        />
        <ProjectCard
          title={translation.tr_english_for_daily.en}
          subtitle={translation.tr_learning_tools_for.en}
          imageSource={englishFileHeader}
          index={1}
          isDisabled={false}
          link="english-for-daily-life"
        />

        <ProjectCard
          title={translation.tr_business_english_essentials.en}
          subtitle={translation.tr_practice_language_that.en}
          imageSource={businessEnglishHeader}
          index={2}
          isDisabled={false}
          link="business-english-essentials"
        />

        <ProjectCard
          title={translation.tr_english_for_young.en}
          subtitle={translation.tr_fun_foundational_english.en}
          imageSource={kidsEnglishHeader}
          index={4}
          isDisabled={false}
          link="english-for-young-learners"
        />
        <ProjectCard
          title={translation.tr_english_for_teenagers.en}
          subtitle={translation.tr_engaging_relevant_conversations.en}
          imageSource={discoverHeader}
          index={4}
          isDisabled={false}
          link="english-for-teenagers"
        />

        <ProjectCard
          title={translation.tr_grammar_essentials.en}
          subtitle={translation.tr_strengthen_your_english.en}
          imageSource={grammarHeader}
          index={6}
          isDisabled={false}
          link="grammar-essentials"
        />
      </div>
    </div>
  );
};
