import img3 from "../../assets/img/about/7.jpeg";
import img4 from "../../assets/img/about/8.jpeg";
import { translation } from "../../utils/translation";

export const MyTeachingStyle = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-text" data-aos="fade-right">
        <h2>{translation.tr_my_teaching_style.en}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: translation.tr_i_believe_learning.en,
          }}
        ></p>
        <div className="what-i-do">
          <ul>
            <li>
              <b>{translation.tr_creating_a_need.en}:</b>{" "}
              {translation.tr_i_design_lessons.en}
            </li>
            <li>
              <b>{translation.tr_custom_materials_and.en}:</b>{" "}
              {translation.tr_i_develop_personalized.en}
            </li>
            <li>
              <b>{translation.tr_bilingual_support.en}:</b>{" "}
              {translation.tr_for_thai_speaking_learners.en}
            </li>
            <li>
              <b>{translation.tr_child_centered_learning.en}:</b>{" "}
              {translation.tr_for_young_learners.en}
            </li>
            <li>
              <b>{translation.tr_integrating_technology.en}:</b>{" "}
              {translation.tr_i_incorporate_modern.en}
            </li>
            <li>
              <b>{translation.tr_cultural_connection.en}:</b>{" "}
              {translation.tr_my_lessons_link.en}
            </li>
            <li>
              <b>{translation.tr_supportive_coaching.en}:</b>{" "}
              {translation.tr_i_provide_clear.en}
            </li>
          </ul>
        </div>
      </div>
      <div className="about-me-image">
        <div className="img-main div-my-style-img">
          <img
            src={img3}
            alt="main photo, My teaching style"
            data-aos="fade-left"
            data-aos-delay="200"
          />
          <img
            src={img4}
            alt="second photo, My teaching style"
            data-aos="fade-left"
            data-aos-delay="500"
          />
        </div>
      </div>
    </div>
  );
};
