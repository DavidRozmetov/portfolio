import React, { useEffect, useState } from "react";
import { getFile } from "../../firebase/storage";
import { toast } from "react-toastify";
import "./Courses.css";
import { PriceBox, Prices } from "../../components/about/Prices";
import { LatestWork } from "../../components/LatestWork";
import { translation } from "../../utils/translation";

const BusinessEnglish: React.FC = () => {
  const [img1, setImg1] = useState<string>("");
  const [img2, setImg2] = useState<string>("");
  const [img3, setImg3] = useState<string>("");
  const [img4, setImg4] = useState<string>("");
  const [img5, setImg5] = useState<string>("");

  useEffect(() => {
    getFile("courses/15.png").then((res) => {
      if (!res.success) {
        toast.error("couldn't load an image");
        return;
      }
      setImg1(res?.message);
    });

    getFile("courses/Bow.png").then((res) => {
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

    getFile("courses/Fon.png").then((res) => {
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
          <h1>{translation.tr_business_english_essentials.en}</h1>
          <h2>{translation.tr_overview.en}</h2>
          <p>{translation.tr_the_business_english.en}</p>
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
            <li>{translation.tr_professionals_aiming_to.en}</li>
            <li>{translation.tr_job_seekers_preparing.en}</li>
            <li>{translation.tr_managers_and_team.en}</li>
            <li>{translation.tr_entrepreneurs_seeking_to.en}</li>
          </ul>
        </div>
      </section>

      <section className="section-main section-secondary">
        <div className="div-text">
          <h2>{translation.tr_key_features.en}</h2>

          <ul>
            <li>
              <strong>{translation.tr_professional_scenarios.en}:</strong>
              {translation.tr_practice_business_related_tasks.en}:
              <ul>
                <li>{translation.tr_delivering_effective_presentations.en}</li>
                <li>{translation.tr_participating_in_meetings.en}</li>
                <li>{translation.tr_negotiating_deals_and.en}</li>
                <li>{translation.tr_writing_professional_emails.en}</li>
                <li>{translation.tr_networking_and_building.en}</li>
              </ul>
            </li>
            <li>
              <strong>{translation.tr_vocabulary_expansion.en}:</strong>
              {translation.tr_learn_industry_specific_vocabulary.en}
            </li>
            <li>
              <strong>{translation.tr_role_playing_activities.en}:</strong>
              {translation.tr_simulate_real_workplace.en}
            </li>
            <li>
              <strong>{translation.tr_personalized_curriculum.en}:</strong>{" "}
              {translation.tr_content_tailored_to.en}
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
            <li>{translation.tr_master_professional_communication.en}</li>
            <li>{translation.tr_build_confidence_in.en}</li>
            <li>{translation.tr_learn_to_write.en}</li>
            <li>{translation.tr_develop_strategies_for.en}</li>
            <li>{translation.tr_gain_confidence_in_networking.en}</li>
          </ul>
        </div>
      </section>

      <section className="section-main ">
        <div className="div-text">
          <h2>{translation.tr_why_choose_business.en}</h2>
          <ul>
            <li>{translation.tr_focus_on_practical.en}</li>
            <li>{translation.tr_get_personalized_feedback_skills.en}</li>
            <li>{translation.tr_gain_confidence_in_professional.en}</li>
            <li>{translation.tr_learn_from_interactive.en}</li>
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
            price={"3,600"}
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
            price={"6,500"}
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
          <p>{translation.tr_enroll_in_the_business.en}</p>
          <p>
            <strong>{translation.tr_contact_us_now.en}</strong>
          </p>
        </div>
      </section>
      <LatestWork title={translation.tr_more_courses.en} />
    </div>
  );
};

export default BusinessEnglish;
