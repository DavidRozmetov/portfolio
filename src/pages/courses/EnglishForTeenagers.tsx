import React, { useEffect, useState } from "react";
import { getFile } from "../../firebase/storage";
import { toast } from "react-toastify";
import "./Courses.css";
import { PriceBox, Prices } from "../../components/about/Prices";
import { LatestWork } from "../../components/LatestWork";
import { translation } from "../../utils/translation";

const EnglishForTeenagers: React.FC = () => {
  const [img1, setImg1] = useState<string>("");
  const [img2, setImg2] = useState<string>("");
  const [img3, setImg3] = useState<string>("");
  const [img4, setImg4] = useState<string>("");
  const [img5, setImg5] = useState<string>("");

  useEffect(() => {
    getFile("courses/16.png").then((res) => {
      if (!res.success) {
        toast.error("couldn't load an image");
        return;
      }
      setImg1(res?.message);
    });

    getFile("courses/3.png").then((res) => {
      if (!res.success) {
        toast.error("couldn't load an image");
        return;
      }
      setImg2(res?.message);
    });
    getFile("courses/teenager.jpg").then((res) => {
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

    getFile("courses/onlineConference.jpg").then((res) => {
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
          <h1>{translation.tr_english_for_teenagers.en}</h1>
          <h2>{translation.tr_overview.en}</h2>
          <p>{translation.tr_the_english_for_teenagers.en}</p>
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
            <li>{translation.tr_teenagers_aged_13.en}</li>
            <li>{translation.tr_students_looking_to.en}</li>
            <li>{translation.tr_teens_preparing_for.en}</li>
            <li>{translation.tr_young_learners.en}</li>
          </ul>
        </div>
      </section>

      <section className="section-main section-secondary">
        <div className="div-text">
          <h2>{translation.tr_key_features.en}</h2>

          <ul>
            <li>
              <strong>{translation.tr_practical_focus.en}:</strong>
              {translation.tr_lessons_designed_around.en}
            </li>
            <li>
              <strong>{translation.tr_academic_skills.en}:</strong>
              {translation.tr_strengthens_grammar_vocabulary.en}.
            </li>
            <li>
              <strong>{translation.tr_interactive_sessions.en}:</strong>
              {translation.tr_engaging_discussions_debates.en}
            </li>
            <li>
              <strong>{translation.tr_individualized_learning.en}:</strong>
              {translation.tr_curriculum_tailored_to.en}
            </li>
            <li>
              <strong>{translation.tr_creative_writing.en}:</strong>
              {translation.tr_focus_on_essays.en}
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
            <li>{translation.tr_fluent_and_confident.en}</li>
            <li>{translation.tr_enhanced_grammar_and.en}</li>
            <li>{translation.tr_critical_thinking_and.en}</li>
            <li>{translation.tr_advanced_writing_techniques.en}</li>
            <li>{translation.tr_effective_communication_for.en}</li>
          </ul>
        </div>
      </section>

      <section className="section-main ">
        <div className="div-text">
          <h2>{translation.tr_why_choose_business.en}</h2>
          <ul>
            <li>{translation.tr_prepares_teens_for.en}</li>
            <li>{translation.tr_builds_confidence_in.en}</li>
            <li>{translation.tr_focus_on_academic.en}</li>
            <li>{translation.tr_interactive_and_engaging.en}</li>
            <li>{translation.tr_flexible_scheduling.en}</li>
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
          <p>{translation.tr_equip_your_teenager.en}</p>
          <p>
            {translation.tr_english_for_teenagers.en}
            <strong>{translation.tr_contact_us_today.en}</strong>
          </p>
        </div>
      </section>
      <LatestWork title={translation.tr_more_courses.en} />
    </div>
  );
};

export default EnglishForTeenagers;
