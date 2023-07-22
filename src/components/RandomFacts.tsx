import { useEffect } from "react";
import SouthParkAvatar from "../assets/southpark-avatar.png";
import Aos from "aos";
import "aos/dist/aos.css";

export const RandomFacts = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="random-facts-container">
      <div className="random-facts-image" data-aos="fade-right">
        {/* <img src={SouthParkAvatar} alt="avatar image southpark" /> */}
      </div>
      <div className="random-facts-text">
        <h3>Random facts</h3>
        <ul className="fact-list">
          <li>I love coffee. No sugar, no milk, no ice</li>
          <li>Psychology is my guilty pleasure</li>
          <li>Not good at drawing</li>
          <li>Digital nomad wannabe</li>
          <li>Addicted to pet videos on Social Media</li>
          <li>Never exercised but still slim</li>
          <li>SouthPark fan</li>
          <li>Fluent in Thai while drunk</li>
          <li>Dad joke lover</li>
        </ul>
      </div>
    </div>
  );
};
