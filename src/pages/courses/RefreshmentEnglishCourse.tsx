import React, { useEffect, useState } from "react";
import { getFile } from "../../firebase/storage";
import { toast } from "react-toastify";
import "./Courses.css";
import { PriceBox, Prices } from "../../components/about/Prices";
import { LatestWork } from "../../components/LatestWork";

const RefreshmentEnglishCourse: React.FC = () => {
  const [img1, setImg1] = useState<string>("");
  const [img2, setImg2] = useState<string>("");
  const [img3, setImg3] = useState<string>("");
  const [img4, setImg4] = useState<string>("");
  const [img5, setImg5] = useState<string>("");

  useEffect(() => {
    getFile("courses/19.png").then((res) => {
      if (!res.success) {
        toast.error("couldn't load an image");
        return;
      }
      setImg1(res?.message);
    });

    getFile("courses/Ploy.png").then((res) => {
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

    getFile("courses/4.png").then((res) => {
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
          <h1>Refreshment English</h1>
          <h2>Overview</h2>
          <p>
            The Refreshment English Course is designed for individuals who
            already have a foundation in English but seek to enhance their
            skills, refresh their knowledge, and regain confidence in everyday
            communication. Whether you’ve been out of practice or simply want to
            polish your abilities, this course is tailored to meet your needs in
            a structured yet flexible way.
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
            <li>
              Professionals looking to improve their workplace communication.
            </li>
            <li>
              Individuals preparing for international travel or relocation.
            </li>
            <li>
              Students returning to academic studies that require English
              proficiency.
            </li>
            <li>
              Anyone who wants to brush up on grammar, vocabulary, and
              conversational skills.
            </li>
          </ul>
        </div>
      </section>

      <section className="section-main section-secondary">
        <div className="div-text">
          <h2>Key Features</h2>

          <ul>
            <li>
              <strong>Customized Lessons:</strong> Each lesson is tailored to
              suit your current skill level and goals, ensuring a personalized
              learning experience.
            </li>
            <li>
              <strong>Practical Topics:</strong> The course focuses on real-life
              scenarios, such as:
              <ul>
                <li>
                  Professional communication (emails, presentations, meetings).
                </li>
                <li>
                  Travel and daily interactions (asking for directions, dining
                  out, small talk).
                </li>
                <li>Academic writing and speaking.</li>
              </ul>
            </li>
            <li>
              <strong>Skill Integration:</strong> Each session integrates
              speaking, listening, reading, and writing activities to reinforce
              your skills holistically.
            </li>
            <li>
              <strong>Flexible Scheduling:</strong> Choose class timings that
              fit your busy lifestyle, with options for both fixed and dynamic
              schedules.
            </li>
            <li>
              <strong>Interactive Sessions:</strong> Engage in role-playing,
              group discussions, and interactive exercises to make learning
              enjoyable and practical.
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
            <li>Refresh and refine your grammar skills.</li>
            <li>
              Expand your vocabulary with relevant and modern expressions.
            </li>
            <li>Enhance fluency in speaking and listening.</li>
            <li>
              Build confidence for public speaking, interviews, and social
              interactions.
            </li>
            <li>Master clear and effective written communication.</li>
          </ul>
        </div>
      </section>

      <section className="section-main ">
        <div className="div-text">
          <h2>Why Choose the Refreshment English Course?</h2>
          <ul>
            <li>
              Personalized teaching methods to target specific areas of
              improvement.
            </li>
            <li>
              Interactive and fun learning environment to make progress feel
              effortless.
            </li>
            <li>
              Expert instructors with years of experience in teaching English to
              non-native speakers.
            </li>
            <li>A focus on building confidence and real-world application.</li>
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
            price={"3,500"}
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
            price={"6,500"}
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
            price={"12,000"}
            hours={40}
            color="#a359a0"
            pointers={[
              "1 hour free trial",
              "Pay on Salary",
              "Postpone up to 3 times",
              "2 payment installments",
            ]}
          />

          <PriceBox
            price={"25,000"}
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
            Join the Refreshment English Course today and regain your edge in
            English communication. Whether for personal growth, career
            advancement, or preparing for a new adventure, this course will
            equip you with the skills you need to thrive.
          </p>
          <p>
            <strong>Contact us now to book a free trial class!</strong>
          </p>
        </div>
      </section>

      <LatestWork title="More Courses" />
    </div>
  );
};

export default RefreshmentEnglishCourse;
