import main from "../../assets/img/about/main.jpeg";
import img2 from "../../assets/img/about/1.jpeg";

export const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-text" data-aos="fade-right">
        <h1>about.</h1>
        <h2>Welcome! I’m Teacher David.</h2>
        <p>
          For over <b>7 years </b>, I’ve been passionate about empowering
          students of all ages to achieve their goals through personalized and
          engaging education. My teaching journey has taken me across Cambodia
          and Thailand, where I’ve taught <b>English</b>, <b>Programming</b> ,
          and <b>Robotics</b>. Along the way, I’ve helped students build
          confidence, develop essential skills, and open doors to new
          opportunities.
        </p>
      </div>
      <div className="about-me-image" data-aos="fade-left" data-aos-delay="500">
        <div className="img-main">
          <img src={main} alt="main photo about me" />
        </div>
      </div>

      <div
        className="about-me-image"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <div className="img-what-i-do">
          <img src={img2} alt="image what I do" />
        </div>
      </div>

      <div className="about-me-text text-what-do-i-do" data-aos="fade-left">
        <h1> </h1>
        <h2>What I Do</h2>
        <p>
          I specialize in teaching English language skills to a wide variety of
          students:
        </p>
        <div className="what-i-do">
          <ul>
            <li>
              <strong>Young Learners:</strong> Building strong foundations
              through fun, interactive methods.
            </li>
            <li>
              <strong>Teenagers:</strong> Guiding them to excel academically and
              socially in English.
            </li>
            <li>
              <strong>Professionals:</strong> Helping business leaders,
              managers, and employees improve communication and succeed in
              international environments.
            </li>
            <li>
              <strong>Global Aspirants:</strong> Preparing students for
              life-changing opportunities, from studying abroad to clearing
              English proficiency exams.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
