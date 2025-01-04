import React, { useEffect, useState } from "react";
import { getFile } from "../../firebase/storage";
import { toast } from "react-toastify";
import "./Courses.css";
import { PriceBox, Prices } from "../../components/about/Prices";
import { LatestWork } from "../../components/LatestWork";
import { translation } from "../../utils/translation";

const DailyEnglish: React.FC = () => {
  const [img1, setImg1] = useState<string>("");
  const [img2, setImg2] = useState<string>("");
  const [img3, setImg3] = useState<string>("");
  const [img4, setImg4] = useState<string>("");
  const [img5, setImg5] = useState<string>("");

  useEffect(() => {
    getFile("courses/17.png").then((res) => {
      if (!res.success) {
        toast.error("couldn't load an image");
        return;
      }
      setImg1(res?.message);
    });

    getFile("courses/Hong.png").then((res) => {
      if (!res.success) {
        toast.error("couldn't load an image");
        return;
      }
      setImg2(res?.message);
    });
    getFile("courses/onlineConference.jpg").then((res) => {
      if (!res.success) {
        toast.error("couldn't load an image");
        return;
      }
      setImg3(res?.message);
    });
    getFile("courses/grammar.jpg").then((res) => {
      if (!res.success) {
        toast.error("couldn't load an image");
        return;
      }
      setImg4(res?.message);
    });

    getFile("courses/2.png").then((res) => {
      if (!res.success) {
        toast.error("couldn't load an image");
        return;
      }
      setImg5(res?.message);
    });
  }, []);
  return (
    <div className="course-container">
      <section className="section-main">
        <div className="div-text">
          <h1>{translation.tr_english_for_daily.en}</h1>
          <h2>{translation.tr_overview.en}</h2>
          <p>{translation.tr_the_english_for_daily.en}</p>
        </div>
        <div className="div-img-main">
          <img src={img1} alt="Refreshment Course Main Image" />
        </div>
      </section>

      <section className="section-main">
        <div className="div-img-main div-secondary-img ">
          <img src={img2} alt="Refreshment Course Secondary Image" />
        </div>
        <div className="div-text">
          <h2>{translation.tr_who_is_it.en}</h2>
          <ul>
            <li>{translation.tr_beginners_looking_to.en}</li>
            <li>{translation.tr_intermediate_learners_wanting.en}</li>
            <li>{translation.tr_travelers_preparing_for.en}</li>
            <li>{translation.tr_anyone_who_wants_feel.en}</li>
          </ul>
        </div>
      </section>

      <section className="section-main section-secondary">
        <div className="div-text">
          <h2>{translation.tr_key_features.en}</h2>

          <ul>
            <li>
              <strong>{translation.tr_practical_focus.en}:</strong>{" "}
              {translation.tr_the_course_emphasizes.en}:
              <ul>
                <li>{translation.tr_shopping_and_handling.en}</li>
                <li>{translation.tr_ordering_food_at.en}</li>
                <li>{translation.tr_introducing_yourself_and.en}</li>
                <li>{translation.tr_making_appointments_or.en}</li>
                <li>{translation.tr_asking_for_directions.en}</li>
              </ul>
            </li>
            <li>
              <strong>{translation.tr_interactive_learning.en}:</strong>
              {translation.tr_role_playing_dialogues_and.en}
            </li>
            <li>
              <strong>{translation.tr_pronunciation_practice.en}:</strong>{" "}
              {translation.tr_gain_confidence_in_speaking.en}
            </li>
            <li>
              <strong>{translation.tr_customized_lessons.en}:</strong>{" "}
              {translation.tr_tailored_content_to.en}
            </li>
          </ul>
        </div>

        <div className="div-img-main div-secondary-img ">
          <img src={img3} alt="Refreshment Course Secondary Image" />
        </div>
      </section>

      <section className="section-main ">
        <div className="div-img-main div-secondary-img ">
          <img src={img4} alt="Refreshment Course Secondary Image" />
        </div>
        <div className="div-text">
          <h2>{translation.tr_what_youll_learn.en}</h2>
          <ul>
            <li>{translation.tr_improve_conversational_fluency.en}</li>
            <li>{translation.tr_expand_vocabulary_for.en}</li>
            <li>{translation.tr_understand_and_use.en}</li>
            <li>{translation.tr_build_confidence_for.en}</li>
            <li>{translation.tr_learn_cultural_tips.en}</li>
          </ul>
        </div>
      </section>

      <section className="section-main ">
        <div className="div-text">
          <h2>{translation.tr_why_choose_english.en}</h2>
          <ul>
            <li>{translation.tr_learn_english_thats.en}</li>
            <li>{translation.tr_build_confidence_with.en}</li>
            <li>{translation.tr_focus_on_improving.en}</li>
            <li>{translation.tr_get_personalized_feedback_improvement.en}</li>
          </ul>
        </div>
        <div className="div-img-main div-fifth-img ">
          <img src={img5} alt="Refreshment Course Secondary Image" />
        </div>
      </section>

      <div className="prices-container">
        <h1>{translation.tr_custom_courses.en}</h1>
        <div className="price-box-grid">
          <PriceBox
            price={"3,400"}
            hours={10}
            color="#545454"
            pointers={[
              translation.tr_1_hour_free.en,
              translation.tr_pay_on_salary.en,
              translation.tr_free_digital_book.en,
              translation.tr_postpone_up_to.en,
            ]}
          />

          <PriceBox
            price={"6,100"}
            hours={20}
            color="#6257e3"
            pointers={[
              translation.tr_1_hour_free.en,
              translation.tr_pay_on_salary.en,
              translation.tr_2_payment_installments.en,
              translation.tr_postpone_up_to.en,
            ]}
          />

          <PriceBox
            price={"11,500"}
            hours={40}
            color="#a359a0"
            pointers={[
              translation.tr_1_hour_free.en,
              translation.tr_pay_on_salary.en,
              translation.tr_postpone_up_to.en,
              translation.tr_2_payment_installments.en,
            ]}
          />

          <PriceBox
            price={"22,500"}
            hours={100}
            color="#c6b79b"
            pointers={[
              translation.tr_1_hour_free.en,
              translation.tr_pay_on_salary.en,
              translation.tr_free_digital_book.en,
              translation.tr_3_payment_installments.en,
            ]}
          />
        </div>
      </div>

      <section className="section-main section-1-line">
        <div className="div-text">
          <h2>{translation.tr_take_the_next.en}</h2>
          <p>{translation.tr_enroll_in_the_daily.en}</p>
          <p>
            <strong>{translation.tr_contact_us_now.en}</strong>
          </p>
        </div>
      </section>
      <LatestWork title={translation.tr_more_courses.en} />
    </div>
  );
};

export default DailyEnglish;
