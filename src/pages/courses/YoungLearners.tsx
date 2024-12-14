import React, { useEffect, useState } from "react";
import { getFile } from "../../firebase/storage";
import { toast } from "react-toastify";
import "./Courses.css";
import { PriceBox, Prices } from "../../components/about/Prices";
import { LatestWork } from "../../components/LatestWork";
import "./../../SCSS/app.scss";

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
          <h1>English for Young Learners</h1>
          <h2>Overview</h2>
          <p>
            The English for Young Learners course is designed to make language
            learning fun, engaging, and effective for children. Through
            interactive lessons, games, and creative activities, we help young
            learners build a strong foundation in English, focusing on
            listening, speaking, reading, and writing skills.
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
            <li>Children aged 4 to 12 years old.</li>
            <li>Young learners starting their journey in English.</li>
            <li>Kids needing extra support with school English assignments.</li>
            <li>
              Parents looking to boost their child's confidence in English.
            </li>
          </ul>
        </div>
      </section>

      <section className="section-main section-secondary">
        <div className="div-text">
          <h2>Key Features</h2>

          <ul>
            <li>
              <strong>Interactive Learning:</strong> Lessons include
              storytelling, songs, games, and activities to keep children
              engaged and excited.
            </li>
            <li>
              <strong>Phonics and Vocabulary:</strong> Focus on building a
              strong base in pronunciation, spelling, and vocabulary.
            </li>
            <li>
              <strong>Creative Activities:</strong> Use art, music, and
              role-playing to make language learning enjoyable.
            </li>
            <li>
              <strong>Tailored Curriculum:</strong> Lessons are adapted to each
              child’s age, skill level, and learning pace.
            </li>
            <li>
              <strong>Parent Involvement:</strong> Regular progress updates and
              tips to support learning at home.
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
            <li>Basic conversational English for everyday interactions.</li>
            <li>Improved pronunciation and confidence in speaking.</li>
            <li>Foundational grammar and sentence-building skills.</li>
            <li>Reading and comprehension skills through engaging stories.</li>
            <li>
              Creative expression in writing simple sentences and paragraphs.
            </li>
          </ul>
        </div>
      </section>

      <section className="section-main ">
        <div className="div-text">
          <h2>Why Choose Business English?</h2>
          <ul>
            <li>Fun and engaging lessons tailored to young learners.</li>
            <li>
              Boosts confidence and builds a love for the English language.
            </li>
            <li>Interactive and creative methods ensure maximum engagement.</li>
            <li>Flexible learning options to suit your child’s needs.</li>
            <li>Regular updates and feedback for parents to track progress.</li>
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
            Help your child shine in English! Enroll in the English for Young
            Learners course today and set them up for success in school and
            beyond. With engaging lessons and a nurturing approach, we make
            learning fun and effective.
          </p>
          <p>
            <strong>Contact us now to book a free trial class!</strong>
          </p>
        </div>
      </section>
      <div className="projects-container">
        <LatestWork title="More Courses" />
      </div>
    </div>
  );
};

export default YoungLearners;
