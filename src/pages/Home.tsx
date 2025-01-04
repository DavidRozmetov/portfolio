import { useEffect } from "react";
import { Landing } from "../components/Landing";
import { LatestWork } from "../components/LatestWork";
import AOS from "aos";
import { ITLessons } from "../components/ITLessons";
import { Testimonials } from "../components/landing/Testimonials";
import { PopularCourses } from "../components/PopularCourses";
import { translation } from "../utils/translation";

export const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="home-container">
      <Landing />
      <LatestWork title={translation.tr_popular_courses.en} />
      <div className="quote-button-container wordle-button-container">
        <h3>{translation.tr_freshen_up_your.en}</h3>
        <a href="/wordle">{translation.tr_play_wordle.en}</a>
      </div>
      <ITLessons />
      <Testimonials />
      <PopularCourses />
    </div>
  );
};
