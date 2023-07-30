import "../../SCSS/project.scss";
import { Tag } from "../../components/Tag";
import { AiFillHeart, AiFillAndroid, AiOutlineGithub } from "react-icons/ai";
import { BiLogoJavascript, BiLogoFirebase, BiLogoReact } from "react-icons/bi";
import { HiAcademicCap } from "react-icons/hi";
import { TbWorld } from "react-icons/tb";
import Rest from "../../assets/img/phonics-blue/rest.png";
import Correct from "../../assets/img/phonics-blue/correct.png";
import Incorrect from "../../assets/img/phonics-blue/incorrect.png";
import MyClassroom from "../../assets/img/phonics-blue/my-classroom.png";
import CreateClassroom from "../../assets/img/phonics-blue/create-classroom.png";

import PhonicsBlueMonitor from "../../assets/img/phonics-blue/phonics-blue-monitor-yellow-bg.png";
import { NextButton } from "../../components/NextButton";
import { PreviousButton } from "../../components/PreviousButton";
import OpenWebsiteButton from "../../components/OpenWebsiteButton";
import AOS from "aos";
import { useEffect } from "react";
export const PhonicsBlue = () => {
  useEffect(() => {
    AOS.init({ duration: 400 });
  }, []);
  return (
    <div className="project-container container-phonics-blue">
      <NextButton src="../snappylike" />
      <PreviousButton src="../phonics-pink" />
      <div className="project-main-container ">
        <div
          className="main-div-left"
          data-aos="fade-right"
          data-aos-duration="500"
        >
          <h1>Phonics Blue.</h1>
          <hr className="info-line" />
          <div className="div-info">
            <div className="div-tags">
              <Tag title="React JS" icon={<BiLogoReact />} />
              <Tag title="Firebase" icon={<BiLogoFirebase />} />
              <Tag title="University" icon={<HiAcademicCap />} />
            </div>
            <div className="date">July 2022</div>
          </div>
          <p className="project-description">
            This was a project I did for the university. This time I solely
            focused on the functionality. The UI clearly suffered due to that.
          </p>

          <div className="link-buttons">
            <OpenWebsiteButton
              title="Live View"
              link="https://phonicsproject-9da80.web.app/"
              icon={TbWorld}
            />

            <OpenWebsiteButton
              title="GitHub"
              link="https://github.com/DavidRozmetov/phonicsBlue"
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
          <img src={PhonicsBlueMonitor} alt="Phonics blue monitor " />
        </div>
      </div>
      <div className="overview-container">
        <div className="screenshots">
          <div className="div-grid">
            <img src={Rest} alt="Phonics Blue Template - resting" />
            <img src={Correct} alt="Phonics Blue Template - correct answer" />
            <img
              src={Incorrect}
              alt="Phonics Blue Template - incorrect answer"
            />
            <img
              src={CreateClassroom}
              alt="Phonics Blue Template - create classroom"
            />
            <img src={MyClassroom} alt="Phonics Blue Template - my classroom" />
          </div>
        </div>
        <div className="overview-text">
          <h1>Project Overview: Phonics Blue</h1>
          <p>
            Phonics Blue was an exciting university project that I worked on to
            create an interactive web application focused on phonics learning.
            Using my knowledge of HTML, CSS, and JavaScript, I took on the
            challenge of building Phonics Blue from the ground up, exploring new
            territory with React JS and Firebase.
          </p>
          <h2>Development Process:</h2>
          <p>
            Throughout the development process, I poured my dedication and
            passion into Phonics Blue, spending less than 300 hours to bring the
            project to life. Being new to React JS, I embraced the opportunity
            to learn and experiment with the powerful library, applying it to
            create a dynamic and engaging user interface.
          </p>
          <p>
            The project also marked my first encounter with Firebase, and I
            found it to be an excellent choice for managing data storage and
            user authentication. Integrating Firebase into Phonics Blue was a
            valuable learning experience that expanded my skill set.
          </p>
          <h2>Tools:</h2>
          <p>
            With React JS as the primary front-end technology, I harnessed its
            capabilities to craft a user-friendly interface, ensuring a smooth
            and intuitive learning experience for young users. Firebase played a
            crucial role as the back-end infrastructure, allowing me to
            implement features like user authentication and real-time data
            management with ease.
          </p>
          <h2>Functionality:</h2>
          <p>
            In Phonics Blue, I strived to provide a range of functionality to
            cater to different user roles:
          </p>
          <ul>
            <li>
              As an administrator, I created, managed, and updated various
              levels and questions to ensure engaging content for learners.
            </li>
            <li>
              Teachers were equipped with the ability to manage classrooms and
              students, including adding or removing students and tracking their
              progress closely.
            </li>
            <li>
              For students, the application offered interactive phonics games,
              akin to those found in Phonics Pink, along with the opportunity to
              join classrooms and collaborate with peers.
            </li>
            <li>
              Parents had their section in the app, enabling them to add their
              children as students and monitor their learning progress
              throughout the journey.
            </li>
          </ul>
          <h2>Weaknesses:</h2>
          <p>
            While Phonics Blue was a remarkable project, I acknowledge that
            there were areas where improvements could be made. The user
            interface, in particular, has room for enhancement to make it more
            visually appealing and user-friendly. To further motivate and engage
            learners, I considered the implementation of a reward or prize
            system for completing levels or achieving significant milestones
            within the app.
          </p>
          <p>
            Phonics Blue remains an essential stepping stone in my learning
            journey, reflecting both my successes and opportunities for growth
            in the realm of web development. It has inspired me to continue
            exploring new technologies and refining my skills, as I strive to
            create even more impactful and user-centric projects in the future.
          </p>
        </div>
      </div>
    </div>
  );
};
