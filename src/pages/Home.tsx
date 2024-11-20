import { useEffect } from "react";
import { Landing } from "../components/Landing";
import { LatestWork } from "../components/LatestWork";
import AOS from "aos";
import { ITLessons } from "../components/ITLessons";
import { Testimonials } from "../components/landing/Testimonials";

export const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="home-container">
      <Landing />
      <LatestWork />
      <ITLessons />
      <Testimonials />
    </div>
  );
};
