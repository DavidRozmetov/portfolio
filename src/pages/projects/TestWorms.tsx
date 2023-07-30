import "../../SCSS/project.scss";
import { Tag } from "../../components/Tag";
import { AiFillHeart, AiOutlineGithub } from "react-icons/ai";
import { BiLogoFirebase, BiLogoReact } from "react-icons/bi";

import { TbWorld } from "react-icons/tb";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

import Monitor from "../../assets/img/testworms/monitor.png";
import One from "../../assets/img/testworms/1.png";
import Two from "../../assets/img/testworms/2.png";
import Three from "../../assets/img/testworms/3.png";
import Four from "../../assets/img/testworms/4.png";
import Five from "../../assets/img/testworms/5.png";
import Six from "../../assets/img/testworms/6.png";
import Seven from "../../assets/img/testworms/7.png";
import Eight from "../../assets/img/testworms/8.png";
import Nine from "../../assets/img/testworms/9.png";
import Ten from "../../assets/img/testworms/10.png";
import Eleven from "../../assets/img/testworms/11.png";

import AOS from "aos";
import { PreviousButton } from "../../components/PreviousButton";
import OpenWebsiteButton from "../../components/OpenWebsiteButton";
import { useEffect } from "react";
export const TestWorms = () => {
  useEffect(() => {
    AOS.init({ duration: 400 });
  }, []);
  return (
    <div className="project-container container-phonics-blue">
      <PreviousButton src="../test-generator" />
      <div className="project-main-container ">
        <div
          className="main-div-left"
          data-aos="fade-right"
          data-aos-duration="500"
        >
          <h1>TestWorms.</h1>
          <hr className="info-line" />
          <div className="div-info">
            <div className="div-tags">
              <Tag title="React TS" icon={<BiLogoReact />} />
              <Tag title="Firebase" icon={<BiLogoFirebase />} />
              <Tag title="Personal" icon={<AiFillHeart />} />
            </div>
            <div className="date">May 2023</div>
          </div>
          <p className="project-description">
            TestWorms marked the culmination of my recent projects. This
            engaging endeavor spanned approximately 3-4 months of casual coding,
            followed by 2 months of intense dedication.
          </p>

          <div className="link-buttons">
            <OpenWebsiteButton
              title="Live View"
              link="https://testworms-6af44.web.app/"
              icon={TbWorld}
            />

            <OpenWebsiteButton
              title="GitHub"
              link="https://github.com/DavidRozmetov/testworms"
              icon={AiOutlineGithub}
            />
          </div>
        </div>
        <div
          className="main-div-right"
          data-aos="fade-left"
          data-aos-duration="900"
          data-aos-delay="300"
        >
          <img src={Monitor} alt="TestWorms monitor " />
        </div>
      </div>
      <div className="overview-container">
        <div className="screenshots">
          <div className="div-grid">
            <img src={One} alt="Phonics Blue Template - resting" />
            <img src={Two} alt="Phonics Blue Template - resting" />
            <img src={Three} alt="Phonics Blue Template - resting" />
            <img src={Four} alt="Phonics Blue Template - resting" />
            <img src={Five} alt="Phonics Blue Template - resting" />
            <img src={Six} alt="Phonics Blue Template - resting" />
            <img src={Seven} alt="Phonics Blue Template - resting" />
            <img src={Eight} alt="Phonics Blue Template - resting" />
            <img src={Nine} alt="Phonics Blue Template - resting" />
            <img src={Ten} alt="Phonics Blue Template - resting" />
            <img src={Eleven} alt="Phonics Blue Template - resting" />
          </div>
        </div>
        <div className="overview-text">
          <h2>TestWorms: A Next-Level Test Generator</h2>

          <p>
            TestWorms represents a significant advancement from its predecessor,
            the Test Generator, offering a comprehensive and dynamic platform
            for creating customized quizzes and assessments. With an array of
            enhanced functionalities, TestWorms empowers both admins and users
            to tailor their testing experience according to their unique
            requirements.
          </p>

          <h3>Key Functionalities:</h3>

          <ol>
            <li>
              <strong>Admins' Question Upload:</strong> Admins are equipped with
              the ability to effortlessly upload questions to the cloud,
              ensuring a centralized and secure repository of quiz content.
            </li>
            <li>
              <strong>User-Generated Content:</strong> Users have the freedom to
              either load questions from the uploaded pool or contribute their
              own custom questions, fostering a collaborative and diverse
              question bank.
            </li>
            <li>
              <strong>Customizable Quiz Creation:</strong> TestWorms stands out
              for its unparalleled flexibility, enabling users to design quizzes
              that cater to their specific needs. Users can choose from various
              question types, such as Characters, Vocabulary, Plot, Dialogue,
              and Setting, and also determine the number of questions from each
              book.
            </li>
            <li>
              <strong>Online Quiz Storage and Edit:</strong> All quizzes are
              stored online, allowing users to access their creations from
              anywhere and conveniently edit their quizzes whenever necessary.
            </li>
            <li>
              <strong>Seamless Authentication with Firebase:</strong> TestWorms
              leverages the robust Firebase authentication, ensuring secure and
              reliable access for all users. From login to quiz creation,
              everything seamlessly integrates with Firebase's authentication
              services.
            </li>
          </ol>

          <p>
            With TestWorms, the process of creating personalized quizzes is
            elevated to new heights, facilitating engaging and insightful
            assessments. The platform's versatility and efficient cloud-based
            features enable educators, administrators, and learners to
            collaborate, interact, and optimize their testing experiences, all
            while benefiting from the streamlined authentication provided by
            Firebase. TestWorms emerges as a comprehensive solution for
            educational assessment needs, delivering a next-level testing
            experience with ease and effectiveness.
          </p>

          <h3>Project Status:</h3>
          <table className="table-status">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Admin Side - Uploading / Editing / Deleting</strong>
                </td>
                <td className="icon">
                  <span style={{ color: "green" }}>
                    <FaCheckCircle />
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>
                    User Account - Username / Email / Login with Google / Reset
                    Password / Create Account
                  </strong>
                </td>
                <td className="icon">
                  <span style={{ color: "green" }}>
                    <FaCheckCircle />
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>
                    User Side Actions - Create / Delete / Print / Save
                  </strong>
                </td>
                <td className="icon">
                  <span style={{ color: "green" }}>
                    <FaCheckCircle />
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Uploading Own Questions</strong>
                </td>
                <td className="icon">
                  <span style={{ color: "red" }}>
                    <FaTimesCircle />
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Verify You Are a Teacher</strong>
                </td>
                <td className="icon">
                  <span style={{ color: "red" }}>
                    <FaTimesCircle />
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>User Side Actions - Edit Quiz</strong>
                </td>
                <td className="icon">
                  <span style={{ color: "red" }}>
                    <FaTimesCircle />
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            While significant progress has been achieved, some features remain
            unfinished due to commitments to my main job. The TestWorms project
            has successfully implemented various admin and user-side
            functionalities, allowing admins to manage quizzes effectively,
            users to create accounts and access their quizzes conveniently.
          </p>

          <p>
            Despite the remaining features, the TestWorms project has already
            demonstrated its potential as a powerful educational tool, and
            future enhancements will further enrich its capabilities for
            educators and learners.
          </p>
        </div>
      </div>
    </div>
  );
};
