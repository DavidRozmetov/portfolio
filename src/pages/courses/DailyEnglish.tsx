import React, { useEffect, useState } from "react";
import { getFile } from "../../firebase/storage";
import { toast } from "react-toastify";
import "./Courses.css";
import { PriceBox, Prices } from "../../components/about/Prices";
import { LatestWork } from "../../components/LatestWork";

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
          <h1>English for Daily Life</h1>
          <h2>Overview</h2>
          <p>
            The English for Daily Life course is perfect for individuals who
            want to enhance their communication skills for everyday situations.
            From casual conversations to handling day-to-day tasks confidently,
            this course ensures you are equipped to use English comfortably in
            real-life scenarios.
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
            <li>Beginners looking to establish practical English skills.</li>
            <li>
              Intermediate learners wanting to boost their fluency in daily
              contexts.
            </li>
            <li>Travelers preparing for international trips or relocation.</li>
            <li>
              Anyone who wants to feel more confident using English in casual
              and functional settings.
            </li>
          </ul>
        </div>
      </section>

      <section className="section-main section-secondary">
        <div className="div-text">
          <h2>Key Features</h2>

          <ul>
            <li>
              <strong>Practical Focus:</strong> The course emphasizes real-world
              scenarios like:
              <ul>
                <li>Shopping and handling transactions.</li>
                <li>Ordering food at restaurants or cafes.</li>
                <li>Introducing yourself and meeting new people.</li>
                <li>Making appointments or reservations.</li>
                <li>
                  Asking for directions and transportation-related
                  conversations.
                </li>
              </ul>
            </li>
            <li>
              <strong>Interactive Learning:</strong> Role-playing, dialogues,
              and interactive activities simulate real-life situations.
            </li>
            <li>
              <strong>Pronunciation Practice:</strong> Gain confidence in
              speaking clearly and understanding native speakers.
            </li>
            <li>
              <strong>Customized Lessons:</strong> Tailored content to match
              your skill level and personal objectives.
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
            <li>Improve conversational fluency for everyday interactions.</li>
            <li>
              Expand vocabulary for common situations like shopping, dining, and
              traveling.
            </li>
            <li>Understand and use common expressions and idioms.</li>
            <li>
              Build confidence to engage with native and non-native English
              speakers.
            </li>
            <li>Learn cultural tips for more effective communication.</li>
          </ul>
        </div>
      </section>

      <section className="section-main ">
        <div className="div-text">
          <h2>Why Choose English for Daily Life?</h2>
          <ul>
            <li>
              Learn English that’s immediately applicable in real-life
              situations.
            </li>
            <li>Build confidence with engaging and interactive lessons.</li>
            <li>
              Focus on improving speaking and listening skills for practical
              communication.
            </li>
            <li>Get personalized feedback to ensure consistent improvement.</li>
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
            price={"3,400"}
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
            price={"6,100"}
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
            price={"11,500"}
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
            Enroll in the English for Daily Life course today and start using
            English with confidence in your everyday activities. Whether you’re
            a beginner or looking to refine your skills, this course will help
            you achieve your communication goals.
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

export default DailyEnglish;
