import { useEffect } from "react";
import { Landing } from "../components/Landing";
import { LatestWork } from "../components/LatestWork";
import AOS from "aos";

export const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="home-container">
      <Landing />
      <LatestWork />
    </div>
  );
};
