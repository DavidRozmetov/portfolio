import React, { useEffect, useState } from "react";
import { getFile } from "../../firebase/storage";
import { toast } from "react-toastify";
import "./Courses.css";
import { PriceBox, Prices } from "../../components/about/Prices";
import { LatestWork } from "../../components/LatestWork";
import "./../../SCSS/app.scss";
import { translation } from "../../utils/translation";

const YoungLearners: React.FC = () => {
  const [img1, setImg1] = useState<string>("");
  const [img2, setImg2] = useState<string>("");
  const [img3, setImg3] = useState<string>("");
  const [img4, setImg4] = useState<string>("");
  const [img5, setImg5] = useState<string>("");

  useEffect(() => {
    getFile("courses/18.png").then((res) => {
      if (!res.success) {
        toast.error("couldn't load an image");
        return;
      }
      setImg1(res?.message);
    });

    getFile("courses/5.png").then((res) => {
      if (!res.success) {
        toast.error("couldn't load an image");
        return;
      }
      setImg2(res?.message);
    });
    getFile("courses/pukan.png").then((res) => {
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

    getFile("courses/12.png").then((res) => {
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
          <h1>{translation.tr_english_for_young.en}</h1>
          <h2>{translation.tr_overview.en}</h2>
          <p>{translation.tr_the_english_for_young.en}</p>
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
            <li>{translation.tr_children_aged_4.en}</li>
            <li>{translation.tr_young_learners_starting.en}</li>
            <li>{translation.tr_kids_needing_extra.en}</li>
            <li>{translation.tr_parents_looking_to.en}</li>
          </ul>
        </div>
      </section>

      <section className="section-main section-secondary">
        <div className="div-text">
          <h2>{translation.tr_key_features.en}</h2>

          <ul>
            <li>
              <strong>{translation.tr_individualized_learning.en}:</strong>{" "}
              {translation.tr_lessons_include_storytelling.en}
            </li>
            <li>
              <strong>{translation.tr_phonics_and_vocabulary.en}:</strong>
              {translation.tr_focus_on_building.en}
            </li>
            <li>
              <strong>{translation.tr_creative_activities.en}:</strong>
              {translation.tr_use_art_music.en}
            </li>
            <li>
              <strong>{translation.tr_tailored_curriculum.en}:</strong>{" "}
              {translation.tr_lessons_are_adapted.en}
            </li>
            <li>
              <strong>{translation.tr_parent_involvement.en}:</strong>{" "}
              {translation.tr_regular_progress_updates.en}
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
            <li>{translation.tr_basic_conversational_english.en}</li>
            <li>{translation.tr_improved_pronunciation_and.en}</li>
            <li>{translation.tr_foundational_grammar_and.en}</li>
            <li>{translation.tr_reading_and_comprehension.en}</li>
            <li>{translation.tr_creative_expression_in.en}</li>
          </ul>
        </div>
      </section>

      <section className="section-main ">
        <div className="div-text">
          <h2> Why Choose English for Young Learners?</h2>
          <ul>
            <li>{translation.tr_fun_and_engaging.en}</li>
            <li>{translation.tr_boosts_confidence_and.en}</li>
            <li>{translation.tr_interactive_and_creative.en}</li>
            <li>{translation.tr_flexible_learning_options.en}</li>
            <li>{translation.tr_regular_updates_and.en}</li>
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
          <p>{translation.tr_help_your_child.en}</p>
          <p>
            {translation.tr_english_for_young.en}
            <strong>{translation.tr_contact_us_now.en}</strong>
          </p>
        </div>
      </section>
      <div className="projects-container">
        <LatestWork title={translation.tr_more_courses.en} />
      </div>
    </div>
  );
};

export default YoungLearners;
