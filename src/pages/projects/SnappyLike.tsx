import "../../SCSS/project.scss";

import { Tag } from "../../components/Tag";
import { AiOutlineGithub, AiFillDollarCircle } from "react-icons/ai";

import { TbBrandWix } from "react-icons/tb";

import { TbWorld } from "react-icons/tb";
import Laptop from "../../assets/img/snappy-like/laptop.png";
import One from "../../assets/img/snappy-like/1.png";
import Two from "../../assets/img/snappy-like/2.png";
import Three from "../../assets/img/snappy-like/3.png";
import Four from "../../assets/img/snappy-like/4.png";
import { NextButton } from "../../components/NextButton";
import { PreviousButton } from "../../components/PreviousButton";
import OpenWebsiteButton from "../../components/OpenWebsiteButton";
import AOS from "aos";
import { useEffect } from "react";
export const SnappyLike = () => {
  useEffect(() => {
    AOS.init({ duration: 400 });
  }, []);
  return (
    <div className="project-container container-phonics-blue">
      <NextButton src="../who-wants-to-be-a-mil.." />
      <PreviousButton src="../phonics-blue" />
      <div className="project-main-container ">
        <div
          className="main-div-left"
          data-aos="fade-right"
          data-aos-duration="500"
        >
          <h1>SnappyLike.</h1>
          <hr className="info-line" />
          <div className="div-info">
            <div className="div-tags">
              <Tag title="Wix" icon={<TbBrandWix />} />
              <Tag title="Client" icon={<AiFillDollarCircle />} />
            </div>
            <div className="date">July 2021</div>
          </div>
          <p className="project-description">
            SnappyLike holds a special place in my journey as it marked my first
            paid project in the field of web design. Tasked with creating a
            basic yet impactful landing page, I collaborated closely with the
            client to deliver an efficient and streamlined solution.
          </p>

          <div className="link-buttons">
            <OpenWebsiteButton
              title="Live View"
              link="https://www.snappylike.net/"
              icon={TbWorld}
            />
            <button className="btn-git btn-disabled">
              GitHub{" "}
              <span className="icon">
                <AiOutlineGithub />
              </span>
            </button>
          </div>
        </div>
        <div
          className="main-div-right"
          data-aos="fade-left"
          data-aos-duration="900"
          data-aos-delay="300"
        >
          <img src={Laptop} alt="Phonics blue monitor " />
        </div>
      </div>
      <div className="overview-container">
        <div className="screenshots">
          <div className="div-grid">
            <img src={One} alt="Phonics Blue Template - resting" />
            <img src={Two} alt="Phonics Blue Template - correct answer" />
            <img src={Three} alt="Phonics Blue Template - incorrect answer" />
            <img src={Four} alt="Phonics Blue Template - create classroom" />
          </div>
        </div>
        <div className="overview-text">
          <p>
            To kickstart the project, I recommended the easiest and fastest
            approach to meet the client's requirements effectively. Emphasizing
            simplicity and user-friendliness, I crafted a landing page design
            that conveyed the essence of the brand and its message concisely.
          </p>
          <p>
            Putting my web development skills to work, I seamlessly brought the
            website to life. From structuring the layout to optimizing the user
            experience, I ensured that the landing page resonated with the
            target audience and fulfilled the client's vision.
          </p>
          <p>
            Additionally, I played an integral role in securing the project's
            visual elements. By assisting the client in acquiring copyrighted
            photos, I ensured that the landing page exuded professionalism and
            uniqueness. Moreover, I aided in procuring the perfect domain name,
            enhancing the online identity of the brand.
          </p>
          <p>
            Even after the initial launch, my dedication to SnappyLike persisted
            as I took on the responsibility of website maintenance. Regularly
            updating and refining the content, I ensured that the landing page
            remained relevant and appealing to visitors.
          </p>
          <p>
            SnappyLike serves as a testament to my growth as a web designer and
            developer, representing the start of my professional journey in the
            realm of web design. This project not only allowed me to explore my
            creativity but also honed my skills in client collaboration and
            website maintenance. As I continue to expand my portfolio, I cherish
            the lessons learned from SnappyLike and remain committed to
            delivering exceptional and seamless web solutions for my clients.
          </p>
        </div>
      </div>
    </div>
  );
};
