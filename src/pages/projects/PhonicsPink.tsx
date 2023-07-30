import "../../SCSS/project.scss";
import { Tag } from "../../components/Tag";
import { AiFillHeart, AiFillAndroid, AiOutlineGithub } from "react-icons/ai";
import { BiLogoJavascript } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import Rest from "../../assets/img/phonics-pink/rest.png";
import Correct from "../../assets/img/phonics-pink/correct.png";
import Incorrect from "../../assets/img/phonics-pink/incorrect.png";
import Landscape from "../../assets/img/phonics-pink/landscape.png";
import Prizes from "../../assets/img/phonics-pink/prizes.png";

import PhonicsPinkTemplateWithPhone from "../../assets/img/phonics-pink/phonics-pink-on-phone.png";
import { NextButton } from "../../components/NextButton";
import OpenWebsiteButton from "../../components/OpenWebsiteButton";

import { useEffect } from "react";
import AOS from "aos";
export const PhonicsPink = () => {
  useEffect(() => {
    AOS.init({ duration: 400 });
  }, []);

  return (
    <div className="project-container">
      <NextButton src="../phonics-blue" />
      <div className="project-main-container">
        <div
          className="main-div-left"
          data-aos="fade-right"
          data-aos-duration="500"
        >
          <h1>Phonics Pink.</h1>
          <hr className="info-line" />
          <div className="div-info">
            <div className="div-tags">
              <Tag title="Vanilla JS" icon={<BiLogoJavascript />} />
              <Tag title="Android" icon={<AiFillAndroid />} />
              <Tag title="Personal" icon={<AiFillHeart />} />
            </div>
            <div className="date">June 2021</div>
          </div>
          <p className="project-description">
            Back in 2021, I created a lovely HTML5 and VanillaJs app, where
            students can play a basic MCQ hame with top 100 phonics words. My
            goal was to create my first app.
          </p>

          <div className="link-buttons">
            <OpenWebsiteButton
              title="Live View"
              link="https://phonics-1192f.web.app/"
              icon={TbWorld}
            />

            <OpenWebsiteButton
              title="GitHub"
              link="https://github.com/DavidRozmetov/Phonics"
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
          <img
            src={PhonicsPinkTemplateWithPhone}
            alt="Phonics Pink Template with a Phone"
          />
        </div>
      </div>
      <div className="overview-container">
        <div className="screenshots">
          <div className="div-grid">
            <img src={Rest} alt="Phonics Pink Template - resting" />
            <img src={Correct} alt="Phonics Pink Template - correct answer" />
            <img
              src={Incorrect}
              alt="Phonics Pink Template - incorrect answer"
            />
            <img src={Prizes} alt="Phonics Pink Template - prizes" />
          </div>
          <img src={Landscape} alt="Phonics Pink Template - landscape" />
        </div>
        <div className="overview-text">
          <p>
            Phonics Pink is an educational web application and Android app
            designed to help young learners develop their reading and phonics
            skills in a fun and interactive way. Built using HTML, CSS, and
            JavaScript, this project aims to provide a simple yet effective
            learning platform for children.
          </p>
          <h2>Features and Technologies:</h2>
          <ul>
            <li>
              <strong>Phonics Learning:</strong> Phonics Pink focuses on
              teaching phonics, the relationship between sounds and letters. It
              presents a range of phonetic sounds and common words, enabling
              children to associate sounds with written letters and build their
              foundational reading skills.
            </li>
            <li>
              <strong>HTML, CSS, and JS:</strong> The project was developed
              using standard web technologies like HTML, CSS, and JavaScript.
              This ensures compatibility across various devices and browsers,
              making it accessible to a wide audience.
            </li>
            <li>
              <strong>Local Storage:</strong> To store user data and progress,
              Phonics Pink utilizes Local Storage. This approach allows the
              application to retain user activity and enables learners to
              continue from where they left off during subsequent visits.
            </li>
            <li>
              <strong>Cordova and Android App:</strong> Using Cordova, the
              project was transformed into an Android app, making it available
              on the Google Play Store. This decision allows for a broader
              reach, as Android users can easily access the app on their mobile
              devices.
            </li>
          </ul>
          <h2>Limitations:</h2>
          <ul>
            <li>
              <strong>No User Profiles:</strong> Phonics Pink currently lacks
              user profiles. While Local Storage preserves progress for
              individual sessions, there is no personalization for multiple
              users. Future enhancements could incorporate user profiles to
              track progress and create personalized learning paths.
            </li>
            <li>
              <strong>Limited Activities:</strong> The application's activities
              are relatively limited. While it provides a solid foundation for
              phonics learning, expanding the range of activities and
              interactive elements could further engage young learners.
            </li>
            <li>
              <strong>Limited Word Set:</strong> Phonics Pink offers a set of
              100 words for practice. It was not built for expanding the
              database.
            </li>
          </ul>
          <h2>Conclusion:</h2>
          <p>
            Phonics Pink is a valuable educational tool for young learners
            seeking to improve their phonics and reading abilities. Built with
            HTML, CSS, and JS, the project provides a solid learning experience
            accessible to a wide range of users. Its availability as an Android
            app on the Play Store enables seamless learning on mobile devices.
          </p>
          <p>
            To further enhance the project, future updates may include
            implementing user profiles for personalized learning journeys,
            introducing additional activities, and expanding the word
            repertoire. Phonics Pink aims to be a stepping stone for children on
            their reading journey and promotes a positive and engaging learning
            environment.
          </p>
        </div>
      </div>
    </div>
  );
};
