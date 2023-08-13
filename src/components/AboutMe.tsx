import main from "../assets/img/about/main.jpeg";

export const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-text" data-aos="fade-right">
        <h1>about.</h1>
        <h2>
          I am a programmer from Turkmenistan and based in Bangkok, Thailand
        </h2>
        <p>
          I'm David, a determined individual who relocated to Bangkok in 2015
          and embarked on a self-taught programming journey in 2016. As a recent
          university graduate, I'm actively seeking a remote programming job to
          leverage my skills and passion for technology.
        </p>
      </div>
      <div className="about-me-image" data-aos="fade-left" data-aos-delay="500">
        <div className="img-main">
          <img src={main} alt="main photo about me" />
        </div>
      </div>
    </div>
  );
};
