import CountUp from "react-countup";
import useIsVisible from "../../hooks/useIsVisible";
import { useRef } from "react";
import { translation } from "../../utils/translation";
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
            <p>{translation.tr_years_of_teaching.en}</p>
          </div>
        </div>
        <div className="div-count-figure">
          <div className="count-figure-top">
            <h1>
              {targetParagraphVisible && (
                <CountUp end={138} duration={1} delay={0.25} />
              )}
            </h1>
            <p>{translation.tr_online_private_students.en}</p>
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
            <p>{translation.tr_hours_of_online.en}</p>
          </div>
        </div>

        <div className="div-count-figure">
          <div className="count-figure-top">
            <h1>
              {targetParagraphVisible && (
                <CountUp end={83} duration={1} delay={0.25} />
              )}{" "}
            </h1>
            <p>{translation.tr_professionals_coached.en}</p>
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
            <p>{translation.tr_teaching_materials.en}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
