import main from "../../assets/img/about/main.jpeg";
import img2 from "../../assets/img/about/1.jpeg";
import { translation } from "../../utils/translation";
import { useEffect } from "react";

export const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-text" data-aos="fade-right">
        <h1>{translation.tr_about.en}</h1>
        <h2>{translation.tr_welcome_im_teacher.en}</h2>
        <p
          id="about-me-pharagraph"
          dangerouslySetInnerHTML={{ __html: translation.tr_7_years.en }}
        ></p>
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
        <h2>{translation.tr_what_i_do.en}</h2>
        <p>{translation.tr_i_specialize_in.en}:</p>
        <div className="what-i-do">
          <ul>
            <li>
              <strong>{translation.tr_young_learners.en}:</strong>{" "}
              {translation.tr_building_strong_foundations.en}
            </li>
            <li>
              <strong>{translation.tr_teenagers.en}:</strong>{" "}
              {translation.tr_guiding_them_to.en}
            </li>
            <li>
              <strong>{translation.tr_professionals.en}:</strong>{" "}
              {translation.tr_helping_business_leaders.en}
            </li>
            <li>
              <strong>{translation.tr_global_aspirants.en}:</strong>{" "}
              {translation.tr_preparing_students_for.en}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
