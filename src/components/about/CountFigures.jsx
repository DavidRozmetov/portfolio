import CountUp from "react-countup";
import useIsVisible from "../../hooks/useIsVisible";
import { useRef } from "react";
export const CountFigures = () => {
  const targetParagraph = useRef();

  // Pass it into our useIsVisible hook to determine if it's in view. The hook will return true or false which we will use for conditional styling
  const targetParagraphVisible = useIsVisible(targetParagraph);

  return (
    <div className="count-figures-container" ref={targetParagraph}>
      <div className="count-figures-grid">
        <div className="div-count-figure">
          <div className="count-figure-top">
            <h1>
              {targetParagraphVisible && (
                <CountUp end={7} duration={1} delay={0.25} />
              )}
              +{" "}
            </h1>
            <p>Years of teaching experience</p>
          </div>
        </div>
        <div className="div-count-figure">
          <div className="count-figure-top">
            <h1>
              {targetParagraphVisible && (
                <CountUp end={138} duration={1} delay={0.25} />
              )}
            </h1>
            <p>Online Private Students</p>
          </div>
        </div>
        <div className="div-count-figure">
          <div className="count-figure-top">
            <h1>
              {targetParagraphVisible && (
                <CountUp end={5000} duration={1} delay={0.25} />
              )}
              +{" "}
            </h1>
            <p>Hours of Online Private Lessons</p>
          </div>
        </div>

        <div className="div-count-figure">
          <div className="count-figure-top">
            <h1>
              {targetParagraphVisible && (
                <CountUp end={83} duration={1} delay={0.25} />
              )}{" "}
            </h1>
            <p>Professionals Coached</p>
          </div>
        </div>

        <div className="div-count-figure">
          <div className="count-figure-top">
            <h1>
              {targetParagraphVisible && (
                <CountUp end={50} duration={1} delay={0.25} />
              )}
              +{" "}
            </h1>
            <p>Teaching Materials</p>
          </div>
        </div>
      </div>
    </div>
  );
};
