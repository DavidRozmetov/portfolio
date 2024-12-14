import React, { useEffect, useState } from "react";
import { getFile } from "../../firebase/storage";
import { toast } from "react-toastify";
import "./Courses.css";
import { PriceBox, Prices } from "../../components/about/Prices";
import { LatestWork } from "../../components/LatestWork";

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
          <h1>English for Teenagers</h1>
          <h2>Overview</h2>
          <p>
            The English for Teenagers course is designed to empower young
            learners with the language skills they need to succeed in school,
            social settings, and future careers. With a focus on building
            confidence, critical thinking, and effective communication, this
            course helps teenagers transition into advanced English users while
            staying engaged and motivated.
          </p>
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
          <h2>Who is it for?</h2>
          <ul>
            <li>Teenagers aged 13 to 18 years old.</li>
            <li>Students looking to enhance their academic English skills.</li>
            <li>
              Teens preparing for exams, interviews, or study abroad programs.
            </li>
            <li>
              Young learners wanting to improve their conversational and written
              English.
            </li>
          </ul>
        </div>
      </section>

      <section className="section-main section-secondary">
        <div className="div-text">
          <h2>Key Features</h2>

          <ul>
            <li>
              <strong>Practical Focus:</strong> Lessons designed around
              real-world scenarios, including school, social media, and future
              career skills.
            </li>
            <li>
              <strong>Academic Skills:</strong> Strengthens grammar, vocabulary,
              and reading comprehension for school success.
            </li>
            <li>
              <strong>Interactive Sessions:</strong> Engaging discussions,
              debates, and collaborative projects to build confidence.
            </li>
            <li>
              <strong>Individualized Learning:</strong> Curriculum tailored to
              each teenager’s level, goals, and areas of improvement.
            </li>
            <li>
              <strong>Creative Writing:</strong> Focus on essays, stories, and
              academic writing techniques.
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
          <h2>What You’ll Learn</h2>
          <ul>
            <li>Fluent and confident conversational English.</li>
            <li>Enhanced grammar and sentence construction skills.</li>
            <li>
              Critical thinking and analytical skills through reading
              comprehension.
            </li>
            <li>Advanced writing techniques for essays and reports.</li>
            <li>
              Effective communication for interviews, group projects, and
              presentations.
            </li>
          </ul>
        </div>
      </section>

      <section className="section-main ">
        <div className="div-text">
          <h2>Why Choose English for Teenagers?</h2>
          <ul>
            <li>
              Prepares teens for real-life challenges like interviews and exams.
            </li>
            <li>Builds confidence in both speaking and writing English.</li>
            <li>
              Focus on academic and conversational English for well-rounded
              skills.
            </li>
            <li>
              Interactive and engaging lessons tailored for teenage learners.
            </li>
            <li>
              Flexible scheduling to fit busy school and extracurricular
              calendars.
            </li>
          </ul>
        </div>
        <div className="div-img-main div-fifth-img ">
          <img src={img5} alt="Refreshment Course Secondary Image" />
        </div>
      </section>

      <div className="prices-container">
        <h1>Custom Courses</h1>
        <div className="price-box-grid">
          <PriceBox
            price={"3,600"}
            hours={10}
            color="#545454"
            pointers={[
              "1 hour free trial",
              "Pay on Salary",
              "Free Digital Book",
              "Postpone up to 3 times",
            ]}
          />

          <PriceBox
            price={"6,400"}
            hours={20}
            color="#6257e3"
            pointers={[
              "1 hour free trial",
              "Pay on Salary",
              "2 payment installments",
              "Postpone up to 3 times",
            ]}
          />

          <PriceBox
            price={"14,250"}
            hours={50}
            color="#a359a0"
            pointers={[
              "1 hour free trial",
              "Pay on Salary",
              "Postpone up to 3 times",
              "2 payment installments",
            ]}
          />

          <PriceBox
            price={"22,500"}
            hours={100}
            color="#c6b79b"
            pointers={[
              "1 hour free trial",
              "Pay on Salary",
              "Free Digital Book",
              "3 payment installments",
            ]}
          />
        </div>
      </div>

      <section className="section-main section-1-line">
        <div className="div-text">
          <h2>Take the Next Step</h2>
          <p>
            Equip your teenager with the skills they need to excel in English!
            The English for Teenagers course is the perfect stepping stone to
            academic and social success. Whether preparing for exams, planning
            to study abroad, or boosting their confidence, this course has them
            covered.
          </p>
          <p>
            <strong>
              Contact us today to enroll and get your teenager started on their
              journey to English excellence!
            </strong>
          </p>
        </div>
      </section>
      <LatestWork title="More Courses" />
    </div>
  );
};

export default EnglishForTeenagers;
