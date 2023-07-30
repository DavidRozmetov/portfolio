import { useEffect } from "react";
import { PortfolioMain } from "../components/PortfolioMain";
import { Projects } from "../components/Projects";
import AOS from "aos";
export const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="portfolio-container">
      <PortfolioMain />
      <Projects />
    </div>
  );
};
