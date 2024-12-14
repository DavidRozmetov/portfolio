import img3 from "../../assets/img/about/7.jpeg";
import img4 from "../../assets/img/about/8.jpeg";

export const MyTeachingStyle = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-text" data-aos="fade-right">
        <h2>My Teaching Style</h2>
        <p>
          I believe learning should be engaging, practical, and tailored to each
          student’s needs. My teaching style focuses on creating an environment
          where students feel the <b>need</b> to speak, making language a
          natural part of their daily lives.
        </p>
        <div className="what-i-do">
          <ul>
            <li>
              <b>Creating a Need to Communicate:</b> I design lessons that
              encourage students to actively use English, focusing on real-world
              scenarios and meaningful interactions.
            </li>
            <li>
              <b>Custom Materials and Methods:</b> I develop personalized
              materials and adapt my teaching style to suit each student’s
              goals, pace, and learning preferences.
            </li>
            <li>
              <b>Bilingual Support:</b> For Thai-speaking learners, I offer
              bilingual assistance to build confidence and bridge language gaps.
            </li>
            <li>
              <b>Child-Centered Learning:</b> For young learners, I prioritize
              building a strong foundation in vocabulary, listening, and
              speaking over traditional grammar and reading-heavy methods.
            </li>
            <li>
              <b>Integrating Technology:</b> I incorporate modern tools and
              resources to make lessons interactive, engaging, and effective.
            </li>
            <li>
              <b>Cultural Connection:</b> My lessons link language to culture,
              offering deeper understanding and practical context.
            </li>
            <li>
              <b>Supportive Coaching:</b> I provide clear explanations,
              constructive feedback, and ongoing encouragement to keep students
              motivated and progressing.
            </li>
          </ul>
        </div>
      </div>
      <div className="about-me-image">
        <div className="img-main div-my-style-img">
          <img
            src={img3}
            alt="main photo, My teaching style"
            data-aos="fade-left"
            data-aos-delay="200"
          />
          <img
            src={img4}
            alt="second photo, My teaching style"
            data-aos="fade-left"
            data-aos-delay="500"
          />
        </div>
      </div>
    </div>
  );
};
