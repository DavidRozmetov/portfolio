import React, { useEffect, useState } from "react";
import { getFile } from "../../firebase/storage";
import { toast } from "react-toastify";
import "./Courses.css";
import { PriceBox, Prices } from "../../components/about/Prices";
import { LatestWork } from "../../components/LatestWork";

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
          <h1>Grammar Essentials</h1>

          <h2>Overview</h2>
          <p>
            Grammar is the backbone of any language, and mastering it is key to
            effective communication. The Grammar Essentials course is designed
            to help learners strengthen their foundation in English grammar,
            making it easier to write clearly, speak confidently, and understand
            the language better. Whether you're a beginner or someone looking to
            polish your grammar skills, this course has something for everyone.
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
            <li>Students of all ages who struggle with English grammar.</li>
            <li>Adults aiming to improve their professional communication.</li>
            <li>
              Language learners preparing for exams like IELTS, TOEFL, or
              ADFELPS.
            </li>
            <li>
              Anyone who wants to refine their grammar for speaking and writing.
            </li>
          </ul>
        </div>
      </section>

      <section className="section-main section-secondary">
        <div className="div-text">
          <h2>Key Features</h2>

          <ul>
            <li>
              <strong>Comprehensive Coverage:</strong> Lessons on tenses,
              sentence structures, parts of speech, and punctuation.
            </li>
            <li>
              <strong>Practical Application:</strong> Exercises and examples to
              apply grammar rules in real-life situations.
            </li>
            <li>
              <strong>Error Correction:</strong> Focused feedback on common
              mistakes and how to avoid them.
            </li>
            <li>
              <strong>Interactive Learning:</strong> Activities and quizzes to
              make grammar learning engaging and fun.
            </li>
            <li>
              <strong>Flexible Pace:</strong> Tailored lessons to fit your
              learning speed and goals.
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
            <li>Mastery of verb tenses and how to use them correctly.</li>
            <li>Proper sentence construction for clear communication.</li>
            <li>Accurate use of articles, prepositions, and conjunctions.</li>
            <li>Understanding and avoiding common grammar pitfalls.</li>
            <li>
              Confidence in speaking and writing English with proper grammar.
            </li>
          </ul>
        </div>
      </section>

      <section className="section-main ">
        <div className="div-text">
          <h2>Why Choose Grammar Essentials?</h2>
          <ul>
            <li>
              Strengthens your foundation for all areas of English learning.
            </li>
            <li>Helps you sound more professional and articulate.</li>
            <li>
              Improves accuracy in exams, presentations, and daily
              communication.
            </li>
            <li>Offers engaging lessons with practical applications.</li>
            <li>Tailored to your current level and future goals.</li>
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
            price={"4,300"}
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
            price={"7,700"}
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
            price={"17,250"}
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
            Take charge of your English journey by mastering the rules of
            grammar. With the Grammar Essentials course, you'll gain the skills
            and confidence to use English correctly and effectively in any
            setting.
          </p>
          <p>
            <strong>
              Enroll today and start building a solid foundation in English
              grammar!
            </strong>
          </p>
        </div>
      </section>
      <LatestWork title="More Courses" />
    </div>
  );
};

export default GrammarEssentials;
