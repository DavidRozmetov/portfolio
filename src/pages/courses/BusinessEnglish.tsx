import React, { useEffect, useState } from "react";
import { getFile } from "../../firebase/storage";
import { toast } from "react-toastify";
import "./Courses.css";
import { PriceBox, Prices } from "../../components/about/Prices";
import { LatestWork } from "../../components/LatestWork";

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
          <h1>Business English</h1>
          <h2>Overview</h2>
          <p>
            The Business English course is tailored for professionals looking to
            enhance their communication skills in corporate and professional
            environments. Whether you’re preparing for meetings, delivering
            presentations, or writing emails, this course will equip you with
            the tools to communicate effectively and confidently in the
            workplace.
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
              Professionals aiming to improve their workplace communication.
            </li>
            <li>
              Job seekers preparing for interviews or enhancing their resumes.
            </li>
            <li>
              Managers and team leaders needing better presentation and
              negotiation skills.
            </li>
            <li>
              Entrepreneurs seeking to communicate effectively with
              international clients and partners.
            </li>
          </ul>
        </div>
      </section>

      <section className="section-main section-secondary">
        <div className="div-text">
          <h2>Key Features</h2>

          <ul>
            <li>
              <strong>Professional Scenarios:</strong> Practice business-related
              tasks like:
              <ul>
                <li>Delivering effective presentations.</li>
                <li>Participating in meetings and discussions.</li>
                <li>Negotiating deals and resolving conflicts.</li>
                <li>Writing professional emails and reports.</li>
                <li>Networking and building professional relationships.</li>
              </ul>
            </li>
            <li>
              <strong>Vocabulary Expansion:</strong> Learn industry-specific
              vocabulary and professional jargon.
            </li>
            <li>
              <strong>Role-Playing Activities:</strong> Simulate real workplace
              situations for hands-on practice.
            </li>
            <li>
              <strong>Personalized Curriculum:</strong> Content tailored to your
              industry and role.
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
            <li>Master professional communication skills for the workplace.</li>
            <li>
              Build confidence in giving presentations and participating in
              meetings.
            </li>
            <li>Learn to write clear and concise business documents.</li>
            <li>
              Develop strategies for effective cross-cultural communication.
            </li>
            <li>
              Gain confidence in networking and professional interactions.
            </li>
          </ul>
        </div>
      </section>

      <section className="section-main ">
        <div className="div-text">
          <h2>Why Choose Business English?</h2>
          <ul>
            <li>
              Focus on practical communication skills that are immediately
              applicable in the workplace.
            </li>
            <li>Get personalized feedback to refine your skills.</li>
            <li>
              Gain confidence in professional settings like meetings,
              presentations, and negotiations.
            </li>
            <li>
              Learn from interactive and engaging lessons tailored to your
              needs.
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
            Enroll in the Business English course today and start using English
            with confidence in your everyday activities. Whether you’re a
            beginner or looking to refine your skills, this course will help you
            achieve your communication goals.
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

export default BusinessEnglish;
