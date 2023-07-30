import "../../SCSS/project.scss";

import { Tag } from "../../components/Tag";
import { AiOutlineGithub, AiFillHeart } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";

import { BiLogoJavascript } from "react-icons/bi";

import One from "../../assets/img/test-generator/1.png";
import BgMain from "../../assets/img/test-generator/laptop.png";
import Two from "../../assets/img/test-generator/2.png";
import Three from "../../assets/img/test-generator/3.png";
import Four from "../../assets/img/test-generator/4.png";
import Five from "../../assets/img/test-generator/5.png";

import { NextButton } from "../../components/NextButton";
import { PreviousButton } from "../../components/PreviousButton";
import OpenWebsiteButton from "../../components/OpenWebsiteButton";
import AOS from "aos";
import { useEffect } from "react";
export const TestGenerator = () => {
  useEffect(() => {
    AOS.init({ duration: 400 });
  }, []);
  return (
    <div className="project-container container-phonics-blue">
      <NextButton src="../testworms" />
      <PreviousButton src="../who-wants-to-be-a-mil.." />
      <div className="project-main-container ">
        <div
          className="main-div-left"
          data-aos="fade-right"
          data-aos-duration="500"
        >
          <h1>Test Generator.</h1>
          <hr className="info-line" />
          <div className="div-info">
            <div className="div-tags">
              <Tag title="Vanilla JS" icon={<BiLogoJavascript />} />
              <Tag title="Personal" icon={<AiFillHeart />} />
            </div>
            <div className="date">Oct 2022</div>
          </div>
          <p className="project-description">
            "Test Generator" is a straightforward app with the primary purpose
            of importing questions from Oxford Bookworms, selecting questions
            randomly from the imported pool, and then exporting the questions as
            PDF files, along with an answer key.
          </p>

          <div className="link-buttons">
            <OpenWebsiteButton
              title="Live View"
              link="https://testgenerator-c862e.web.app/"
              icon={TbWorld}
            />

            <OpenWebsiteButton
              title="GitHub"
              link="https://github.com/DavidRozmetov/testGenerator"
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
          <img src={BgMain} alt="Phonics blue monitor " />
        </div>
      </div>
      <div className="overview-container">
        <div className="screenshots">
          <div className="div-grid">
            <img src={One} alt="Phonics Blue Template - resting" />
            <img src={Two} alt="Phonics Blue Template - correct answer" />
            <img src={Three} alt="Phonics Blue Template - incorrect answer" />
            <img src={Four} alt="Phonics Blue Template - create classroom" />
            <img src={Five} alt="Phonics Blue Template - resting" />
          </div>
        </div>
        <div className="overview-text">
          <h2>
            <em>Test Generator</em> - Overview
          </h2>

          <p>
            The <strong>Test Generator</strong> is a customized application that
            simplifies the process of creating multiple versions of reading
            tests for a competitive reading program. Designed to meet specific
            needs, the app streamlines the generation of test materials from a
            vast collection of over 50 books provided by{" "}
            <em>Oxford Discover Features</em>.
          </p>

          <h3>Challenges Faced:</h3>

          <p>
            The reading competition required at least 5 versions of each test
            from the extensive selection of <em>Oxford Discover Features</em>{" "}
            books. However, there was no direct way to export the answer keys to
            the chosen testing tool, <em>ZipGrade</em>. This presented a
            significant obstacle in efficiently managing and assessing the
            competition.
          </p>

          <h3>App Functionality:</h3>

          <p>
            The <strong>Test Generator</strong> app ingeniously utilizes the{" "}
            <code>.txt</code> files provided by <strong>Oxford</strong>,
            containing 50 multiple-choice questions (MCQs) along with
            corresponding answer keys. Users are required to export the{" "}
            <code>.docx</code> files from <strong>Oxford</strong> to{" "}
            <code>.txt</code> format, preparing them for further processing by
            the Test Generator. This approach ensures flexibility and allows
            users to have direct control over the content they wish to utilize
            in the app. The Test Generator then takes these <code>.txt</code>{" "}
            files, picks random questions, adds an exam header, and generates
            different versions based on the user's input.
          </p>

          <h3>Key Features:</h3>

          <ol>
            <li>
              <strong>Random Question Selection:</strong> The{" "}
              <em>Test Generator</em> smartly picks random questions from the
              imported <code>.txt</code> files, ensuring each test version's
              uniqueness and fairness.
            </li>
            <li>
              <strong>Exam Header Addition:</strong> The app automatically adds
              an exam header to each test version, providing essential details
              and identification for organized management.
            </li>
            <li>
              <strong>Customizable Test Versions:</strong> Users can specify the
              number of test versions they require, and the app generates
              diverse versions based on the provided input.
            </li>
            <li>
              <strong>PDF Export:</strong> The <em>Test Generator</em> allows
              users to export the generated test versions as PDF files, making
              it convenient for printing and distribution.
            </li>
            <li>
              <strong>Seamless Integration with ZipGrade:</strong> To overcome
              the challenge of exporting answer keys, the app seamlessly
              integrates with <em>ZipGrade</em>. Users can scan the answer keys
              directly into <em>ZipGrade</em>, facilitating efficient grading
              and analysis.
            </li>
          </ol>
          <h3>Conclusion:</h3>
          <p>
            While the Test Generator may not have been revolutionary in terms of
            cutting-edge technology or boasting an impressive UI, its
            significance and impact cannot be understated. The app proved to be
            a valuable asset, providing substantial assistance in the
            competitive reading program. Its ability to efficiently generate
            multiple versions of reading tests, despite its simple interface,
            significantly streamlined the entire competition process. The Test
            Generator's practicality and usefulness overshadowed any limitations
            in aesthetics, making it an indispensable tool for organizing and
            managing the competition effectively. Its reliability and
            contribution made it an invaluable aid, elevating the learning
            experience for participants and organizers alike.
          </p>
        </div>
        <div className="overview-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/R5P8QweX0GA?autoplay=1&mute=1&controls=0&loop=1"
            title="Flourish in real life"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
