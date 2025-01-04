import React, { useEffect, useState } from "react";
import { getFile } from "../../firebase/storage";
import { toast } from "react-toastify";
import "./Courses.css";
import { PriceBox, Prices } from "../../components/about/Prices";
import { LatestWork } from "../../components/LatestWork";
import { translation } from "../../utils/translation";

const GrammarEssentials: React.FC = () => {
  const [img1, setImg1] = useState<string>("");
  const [img2, setImg2] = useState<string>("");
  const [img3, setImg3] = useState<string>("");
  const [img4, setImg4] = useState<string>("");
  const [img5, setImg5] = useState<string>("");

  useEffect(() => {
    getFile("courses/20.png").then((res) => {
      if (!res.success) {
        toast.error("couldn't load an image");
        return;
      }
      setImg1(res?.message);
    });

    getFile("courses/2.png").then((res) => {
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

    getFile("courses/6.png").then((res) => {
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
          <h1>{translation.tr_grammar_essentials.en}</h1>

          <h2>{translation.tr_overview.en}</h2>
          <p>{translation.tr_grammar_is_the.en}</p>
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
            <li> {translation.tr_students_of_all.en}</li>
            <li> {translation.tr_adults_aiming_to.en}</li>
            <li> {translation.tr_language_learners_preparing.en}</li>
            <li> {translation.tr_anyone_who_wants_refine.en}</li>
          </ul>
        </div>
      </section>

      <section className="section-main section-secondary">
        <div className="div-text">
          <h2>{translation.tr_key_features.en}</h2>

          <ul>
            <li>
              <strong> {translation.tr_comprehensive_coverage.en}:</strong>
              {translation.tr_lessons_on_tenses.en}
            </li>
            <li>
              <strong> {translation.tr_practical_application.en}:</strong>
              {translation.tr_exercises_and_examples.en}
            </li>
            <li>
              <strong> {translation.tr_error_correction.en}:</strong>
              {translation.tr_focused_feedback_on.en}
            </li>
            <li>
              <strong> {translation.tr_interactive_learning.en}:</strong>
              {translation.tr_activities_and_quizzes.en}
            </li>
            <li>
              <strong> {translation.tr_flexible_pace.en}:</strong>
              {translation.tr_tailored_lessons_to.en}
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
          <h2>{translation.tr_what_youll_learn.en}What You’ll Learn</h2>
          <ul>
            <li> {translation.tr_mastery_of_verb.en}</li>
            <li> {translation.tr_proper_sentence_construction.en}</li>
            <li> {translation.tr_accurate_use_of.en}</li>
            <li> {translation.tr_understanding_and_avoiding.en}</li>
            <li> {translation.tr_confidence_in_speaking.en}</li>
          </ul>
        </div>
      </section>

      <section className="section-main ">
        <div className="div-text">
          <h2>Why Choose Grammar Essentials?</h2>
          <ul>
            <li> {translation.tr_strengthen_your_english.en}</li>
            <li> {translation.tr_helps_you_sound.en}</li>
            <li> {translation.tr_improve_conversational_fluency.en}</li>
            <li> {translation.tr_offers_engaging_lessons.en}</li>
            <li> Tailored to your current level and future goals.</li>
          </ul>
        </div>
        <div className="div-img-main div-fifth-img ">
          <img src={img5} alt="Refreshment Course Secondary Image" />
        </div>
      </section>

      <div className="prices-container">
        <h1>
          {translation.tr_prepares_teens_for.en}
          {translation.tr_custom_courses.en}
        </h1>
        <div className="price-box-grid">
          <PriceBox
            price={"4,300"}
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
            price={"7,700"}
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
            price={"17,250"}
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
            price={"25,000"}
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
          <p>{translation.tr_take_charge_of.en}</p>
          <p>
            {translation.tr_prepares_teens_for.en}
            <strong> {translation.tr_enroll_today_and.en}</strong>
          </p>
        </div>
      </section>
      <LatestWork title={translation.tr_more_courses.en} />
    </div>
  );
};

export default GrammarEssentials;
