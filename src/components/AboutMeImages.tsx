import one from "../assets/img/about/1.jpeg";
import two from "../assets/img/about/2.jpeg";
import three from "../assets/img/about/3.jpeg";
import four from "../assets/img/about/4.jpeg";
import five from "../assets/img/about/5.jpeg";
import six from "../assets/img/about/6.jpeg";

export const AboutMeImages = () => {
  return (
    <div className="about-me-images" data-aos="fade-up" data-aos-delay="750">
      <div className="img-grid">
        <img src={one} alt="main photo about me" />
        <img src={two} alt="main photo about me" />
        <img src={three} alt="main photo about me" />
        <img src={four} alt="main photo about me" />
        <img src={five} alt="main photo about me" />
        <img src={six} alt="main photo about me" />
      </div>
    </div>
  );
};
