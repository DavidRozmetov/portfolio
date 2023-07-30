import "../../SCSS/project.scss";

import { Tag } from "../../components/Tag";
import { AiOutlineGithub, AiFillHeart, AiFillYoutube } from "react-icons/ai";

import { BiLogoJavascript } from "react-icons/bi";

import One from "../../assets/img/wwtbam/1.png";
import BgMain from "../../assets/img/wwtbam/bg-main.png";
import Two from "../../assets/img/wwtbam/2.png";
import Three from "../../assets/img/wwtbam/3.png";
import Four from "../../assets/img/wwtbam/4.png";
import Five from "../../assets/img/wwtbam/5.png";
import Six from "../../assets/img/wwtbam/6.png";
import Seven from "../../assets/img/wwtbam/7.png";
import Eight from "../../assets/img/wwtbam/8.png";
import { NextButton } from "../../components/NextButton";
import { PreviousButton } from "../../components/PreviousButton";
import OpenWebsiteButton from "../../components/OpenWebsiteButton";
import AOS from "aos";
import { useEffect } from "react";
export const WWTABM = () => {
  useEffect(() => {
    AOS.init({ duration: 400 });
  }, []);
  return (
    <div className="project-container container-phonics-blue">
      <NextButton src="../test-generator" />
      <PreviousButton src="../snappylike" />
      <div className="project-main-container ">
        <div
          className="main-div-left"
          data-aos="fade-right"
          data-aos-duration="500"
        >
          <h1>Who Wants to Be a Millionaire?</h1>
          <hr className="info-line" />
          <div className="div-info">
            <div className="div-tags">
              <Tag title="Vanilla JS" icon={<BiLogoJavascript />} />
              <Tag title="Personal" icon={<AiFillHeart />} />
            </div>
            <div className="date">Feb 2023</div>
          </div>
          <p className="project-description">
            Who Wants to Be a Millionaire was a very niche app that I created
            for my students. It is more of a presentation tool than an
            interactive game
          </p>

          <div className="link-buttons">
            <OpenWebsiteButton
              title="Watch On"
              link="https://www.youtube.com/watch?v=T8Cze3-cjqQ&list=PLDMiiZFmmO7IFebbm0Tbx6zO9n3nerGuu"
              icon={AiFillYoutube}
            />

            <OpenWebsiteButton
              title="GitHub"
              link="https://github.com/DavidRozmetov/wwbam"
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
            src={BgMain}
            alt="Who wants to be a millionaire on a projector "
          />
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
            <img src={Six} alt="Phonics Blue Template - correct answer" />
            <img src={Seven} alt="Phonics Blue Template - incorrect answer" />
            <img src={Eight} alt="Phonics Blue Template - create classroom" />
          </div>
        </div>
        <div className="overview-text">
          <h2>Documentation for "Who Wants to Be a Millionaire" Game</h2>
          <h3>Overview:</h3>
          <p>
            Who Wants to Be a Millionaire" is an interactive web-based game
            designed to facilitate a fun and engaging experience for my
            audience. The game is controlled entirely through buttons, emulating
            the excitement of a TV show. Both the audience and the players were
            thoroughly impressed with the immersive gameplay.
          </p>
          <h3>Game Flow:</h3>
          <ul>
            <li>
              The game consists of a single-page application, index.html, which
              serves as the main interface for the game.
            </li>
            <li>
              Students can be added to the game by visiting the "/addstudents"
              route.
            </li>
            <li>
              Questions specific to each student can be added through the
              "/addquestions" route. The questions are saved on localhost.
            </li>
          </ul>
          <h3>Button Controls:</h3>
          <p>
            The game utilizes event listeners to respond to keyboard inputs
            (button presses) and execute specific actions based on the keys
            pressed. The following buttons control different aspects of the
            game:
          </p>
          <ul>
            <li>
              <strong>'N' Key: Next Question</strong>
            </li>
            <p>
              Pressing the 'N' key moves the game to the next question,
              advancing the student to the next challenge.
            </p>

            <li>
              <strong>'O', 'P', '[', ']': Selecting Answers</strong>
            </li>
            <p>
              The keys 'O', 'P', '[', ']' correspond to answer options 'A', 'B',
              'C', and 'D', respectively. Pressing these keys allows the student
              to select their chosen answer.
            </p>

            <li>
              <strong>'M' Key: Music Control</strong>
            </li>
            <p>
              Pressing the 'M' key toggles the background music on and off. If
              the music is playing, pressing 'M' will stop it and mute the game.
              Pressing 'M' again will resume playing the music.
            </p>

            <li>
              <strong>'T' Key: Phone a Friend</strong>
            </li>
            <p>
              Pressing the 'T' key allows the student to use the "Phone a
              Friend" lifeline to seek help with the question. If the "Phone a
              Friend" lifeline has not been used, pressing 'T' will activate it.
              If the student has already used "Phone a Friend," pressing 'T'
              will initiate a phone call. If the phone call is active, pressing
              'F' will end the call.
            </p>

            <li>
              <strong>'R' Key: Fifty-Fifty</strong>
            </li>
            <p>
              Pressing the 'R' key allows the student to use the "Fifty-Fifty"
              lifeline to eliminate two incorrect answer options, leaving one
              correct and one incorrect answer. If the "Fifty-Fifty" lifeline
              has not been used, pressing 'R' will activate it.
            </p>

            <li>
              <strong>'Y' Key: Ask the Audience</strong>
            </li>
            <p>
              Pressing the 'Y' key allows the student to use the "Ask the
              Audience" lifeline to get a collective audience vote on the
              correct answer. If the "Ask the Audience" lifeline has not been
              used, pressing 'Y' will activate it.
            </p>

            <li>
              <strong>'K' Key: Start the Game</strong>
            </li>
            <p>
              Pressing the 'K' key initiates the start of the game, kicking off
              the gameplay and questions for the selected student.
            </p>
          </ul>
          <p>
            Note: Ensure that all buttons are appropriately styled and placed
            within the index.html page to provide a visually appealing and
            intuitive user interface.
          </p>
          <h3>Conclusion:</h3>
          <p>
            "Who Wants to Be a Millionaire" game serves as an engaging and
            interactive learning tool for students, offering exciting challenges
            and lifelines to enhance their educational experience. With its
            button-controlled functionality, the game encourages participation
            and provides a unique and enjoyable learning environment for
            players.
          </p>
        </div>
      </div>
    </div>
  );
};
