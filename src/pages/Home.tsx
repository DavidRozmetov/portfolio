import { useEffect } from "react";
import { Landing } from "../components/Landing";
import { LatestWork } from "../components/LatestWork";
import AOS from "aos";
import { ITLessons } from "../components/ITLessons";
import { Testimonials } from "../components/landing/Testimonials";
import { PopularCourses } from "../components/PopularCourses";

export const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="home-container">
      <Landing />
      <LatestWork title="Popular English Lessons" />
      <div className="quote-button-container wordle-button-container">
        <h3>Freshen up Your Vocabulary</h3>
        <a href="/wordle">Play Wordle</a>
      </div>
      <ITLessons />
      <Testimonials />
      <PopularCourses />
    </div>
  );
};
