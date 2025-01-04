import { useEffect, useState } from "react";
import carrot from "../../../assets/img/wordle/carrot.png";
import jump0 from "../../../assets/img/wordle/rabbit jump/0.png";
import jump1 from "../../../assets/img/wordle/rabbit jump/1.png";
import jump2 from "../../../assets/img/wordle/rabbit jump/2.png";
import jump3 from "../../../assets/img/wordle/rabbit jump/3.png";
import jump4 from "../../../assets/img/wordle/rabbit jump/4.png";
import jump5 from "../../../assets/img/wordle/rabbit jump/5.png";
import jump6 from "../../../assets/img/wordle/rabbit jump/6.png";
import jump7 from "../../../assets/img/wordle/rabbit jump/7.png";

import idle0 from "../../../assets/img/wordle/rabbit idle/0.png";
import idle1 from "../../../assets/img/wordle/rabbit idle/1.png";
import idle2 from "../../../assets/img/wordle/rabbit idle/2.png";
import idle3 from "../../../assets/img/wordle/rabbit idle/3.png";
import idle4 from "../../../assets/img/wordle/rabbit idle/4.png";
import idle5 from "../../../assets/img/wordle/rabbit idle/5.png";
import idle6 from "../../../assets/img/wordle/rabbit idle/6.png";
import idle7 from "../../../assets/img/wordle/rabbit idle/7.png";
import idle8 from "../../../assets/img/wordle/rabbit idle/8.png";
import idle9 from "../../../assets/img/wordle/rabbit idle/9.png";
import idle10 from "../../../assets/img/wordle/rabbit idle/10.png";
import idle11 from "../../../assets/img/wordle/rabbit idle/11.png";
import idle12 from "../../../assets/img/wordle/rabbit idle/12.png";
import idle13 from "../../../assets/img/wordle/rabbit idle/13.png";
import idle14 from "../../../assets/img/wordle/rabbit idle/14.png";
import idle15 from "../../../assets/img/wordle/rabbit idle/15.png";
import idle16 from "../../../assets/img/wordle/rabbit idle/16.png";
import idle17 from "../../../assets/img/wordle/rabbit idle/17.png";
import idle18 from "../../../assets/img/wordle/rabbit idle/18.png";
import idle19 from "../../../assets/img/wordle/rabbit idle/19.png";
import idle20 from "../../../assets/img/wordle/rabbit idle/20.png";
import idle21 from "../../../assets/img/wordle/rabbit idle/21.png";
import idle22 from "../../../assets/img/wordle/rabbit idle/22.png";
import idle23 from "../../../assets/img/wordle/rabbit idle/23.png";
import idle24 from "../../../assets/img/wordle/rabbit idle/24.png";
import idle25 from "../../../assets/img/wordle/rabbit idle/25.png";
import idle26 from "../../../assets/img/wordle/rabbit idle/26.png";
import idle27 from "../../../assets/img/wordle/rabbit idle/27.png";
import idle28 from "../../../assets/img/wordle/rabbit idle/28.png";
import idle29 from "../../../assets/img/wordle/rabbit idle/29.png";
import idle30 from "../../../assets/img/wordle/rabbit idle/30.png";
import idle31 from "../../../assets/img/wordle/rabbit idle/31.png";
import idle32 from "../../../assets/img/wordle/rabbit idle/32.png";
import idle33 from "../../../assets/img/wordle/rabbit idle/33.png";
import idle34 from "../../../assets/img/wordle/rabbit idle/34.png";
import idle35 from "../../../assets/img/wordle/rabbit idle/35.png";
import idle36 from "../../../assets/img/wordle/rabbit idle/36.png";
import idle37 from "../../../assets/img/wordle/rabbit idle/37.png";
import idle38 from "../../../assets/img/wordle/rabbit idle/38.png";
import idle39 from "../../../assets/img/wordle/rabbit idle/39.png";
import idle40 from "../../../assets/img/wordle/rabbit idle/40.png";
import idle41 from "../../../assets/img/wordle/rabbit idle/41.png";
import idle42 from "../../../assets/img/wordle/rabbit idle/42.png";
import idle43 from "../../../assets/img/wordle/rabbit idle/43.png";
import idle44 from "../../../assets/img/wordle/rabbit idle/44.png";
import idle45 from "../../../assets/img/wordle/rabbit idle/45.png";
import idle46 from "../../../assets/img/wordle/rabbit idle/46.png";
import idle47 from "../../../assets/img/wordle/rabbit idle/47.png";
import idle48 from "../../../assets/img/wordle/rabbit idle/48.png";

import cheer0 from "../../../assets/img/wordle/rabbit cheer/0 .png";
import cheer1 from "../../../assets/img/wordle/rabbit cheer/1 .png";
import cheer2 from "../../../assets/img/wordle/rabbit cheer/2 .png";
import cheer3 from "../../../assets/img/wordle/rabbit cheer/3 .png";
import cheer4 from "../../../assets/img/wordle/rabbit cheer/4 .png";
import cheer5 from "../../../assets/img/wordle/rabbit cheer/5 .png";
import cheer6 from "../../../assets/img/wordle/rabbit cheer/6 .png";
import cheer7 from "../../../assets/img/wordle/rabbit cheer/7 .png";
import cheer8 from "../../../assets/img/wordle/rabbit cheer/8 .png";
import cheer9 from "../../../assets/img/wordle/rabbit cheer/9 .png";
import cheer10 from "../../../assets/img/wordle/rabbit cheer/10 .png";
import cheer11 from "../../../assets/img/wordle/rabbit cheer/11 .png";
import cheer12 from "../../../assets/img/wordle/rabbit cheer/12 .png";
import cheer13 from "../../../assets/img/wordle/rabbit cheer/13 .png";
import cheer14 from "../../../assets/img/wordle/rabbit cheer/14 .png";
import cheer15 from "../../../assets/img/wordle/rabbit cheer/15 .png";
import cheer16 from "../../../assets/img/wordle/rabbit cheer/16 .png";
import cheer17 from "../../../assets/img/wordle/rabbit cheer/17 .png";
import cheer18 from "../../../assets/img/wordle/rabbit cheer/18 .png";
import cheer19 from "../../../assets/img/wordle/rabbit cheer/19 .png";
import cheer20 from "../../../assets/img/wordle/rabbit cheer/20 .png";
import cheer21 from "../../../assets/img/wordle/rabbit cheer/21 .png";
import cheer22 from "../../../assets/img/wordle/rabbit cheer/22 .png";
import cheer23 from "../../../assets/img/wordle/rabbit cheer/23 .png";
import cheer24 from "../../../assets/img/wordle/rabbit cheer/24 .png";
import cheer25 from "../../../assets/img/wordle/rabbit cheer/25 .png";
import cheer26 from "../../../assets/img/wordle/rabbit cheer/26 .png";
import cheer27 from "../../../assets/img/wordle/rabbit cheer/27 .png";
import cheer28 from "../../../assets/img/wordle/rabbit cheer/28 .png";
import cheer29 from "../../../assets/img/wordle/rabbit cheer/29 .png";
import cheer30 from "../../../assets/img/wordle/rabbit cheer/30 .png";
import cheer31 from "../../../assets/img/wordle/rabbit cheer/31 .png";
import cheer32 from "../../../assets/img/wordle/rabbit cheer/32 .png";
import cheer33 from "../../../assets/img/wordle/rabbit cheer/33 .png";
import cheer34 from "../../../assets/img/wordle/rabbit cheer/34 .png";
import cheer35 from "../../../assets/img/wordle/rabbit cheer/35 .png";
import cheer36 from "../../../assets/img/wordle/rabbit cheer/36 .png";
import cheer37 from "../../../assets/img/wordle/rabbit cheer/37 .png";
import cheer38 from "../../../assets/img/wordle/rabbit cheer/38 .png";
import cheer39 from "../../../assets/img/wordle/rabbit cheer/39 .png";
import cheer40 from "../../../assets/img/wordle/rabbit cheer/40 .png";
import cheer41 from "../../../assets/img/wordle/rabbit cheer/41 .png";
import cheer42 from "../../../assets/img/wordle/rabbit cheer/42 .png";
import cheer43 from "../../../assets/img/wordle/rabbit cheer/43 .png";
import cheer44 from "../../../assets/img/wordle/rabbit cheer/44 .png";
import cheer45 from "../../../assets/img/wordle/rabbit cheer/45 .png";
import { toast } from "react-toastify";

interface Rabbit {
  track: number;

  playerData: {
    userName: string;
    uid: string;
    averageSpeed: number;
    steps: number;
    totalSteps: number;
    rank: number;
  };
}
export const Rabbit = (props: Rabbit) => {
  const jumpSequence = [jump0, jump1, jump2, jump3, jump4, jump5, jump6, jump7];
  const idleSequence = [
    idle0,
    idle1,
    idle2,
    idle3,
    idle4,
    idle5,
    idle6,
    idle7,
    idle8,
    idle9,
    idle10,
    idle11,
    idle12,
    idle13,
    idle14,
    idle15,
    idle16,
    idle17,
    idle18,
    idle19,
    idle20,
    idle21,
    idle22,
    idle23,
    idle24,
    idle25,
    idle26,
    idle27,
    idle28,
    idle29,
    idle30,
    idle31,
    idle32,
    idle33,
    idle34,
    idle35,
    idle36,
    idle37,
    idle38,
    idle39,
    idle40,
    idle41,
    idle42,
    idle43,
    idle44,
    idle45,
    idle46,
    idle47,
    idle48,
  ];
  const cheerSequence = [
    cheer0,
    cheer1,
    cheer2,
    cheer3,
    cheer4,
    cheer5,
    cheer6,
    cheer7,
    cheer8,
    cheer9,
    cheer10,
    cheer11,
    cheer12,
    cheer13,
    cheer14,
    cheer15,
    cheer16,
    cheer17,
    cheer18,
    cheer19,
    cheer20,
    cheer21,
    cheer22,
    cheer23,
    cheer24,
    cheer25,
    cheer26,
    cheer27,
    cheer28,
    cheer29,
    cheer30,
    cheer31,
    cheer32,
    cheer33,
    cheer34,
    cheer35,
    cheer36,
    cheer37,
    cheer38,
    cheer39,
    cheer40,
    cheer41,
    cheer42,
    cheer43,
    cheer44,
    cheer45,
  ];
  const [position, setPosition] = useState<
    "idle" | "jump" | "cheer" | "hidden"
  >("jump");
  const [imgIndex, setImgIndex] = useState(0);

  const [currentStep, setCurrentStep] = useState<number>(-5);
  const totalSteps = props?.playerData?.totalSteps || 33;
  const steps = props?.playerData?.steps || 33;
  const [xAxis, setXAxis] = useState(0);
  const speedArray = [1.5, 1.4, 1.3, 1.2, 1.1];

  useEffect(() => {
    let frameId: number;
    let lastFrameTime = performance.now();
    const frameDuration =
      position === "jump" || position === "cheer" ? 75 : 125;

    // Time per frame in milliseconds

    const animateFrames = (time: number) => {
      if (time - lastFrameTime >= frameDuration) {
        setImgIndex((prevIndex) => {
          const sequenceLength =
            position === "idle"
              ? idleSequence.length
              : position === "jump"
              ? jumpSequence.length
              : cheerSequence.length;
          return (prevIndex + 1) % sequenceLength;
        });
        lastFrameTime = time;
      }
      frameId = requestAnimationFrame(animateFrames);
    };

    frameId = requestAnimationFrame(animateFrames);
    return () => cancelAnimationFrame(frameId);
  }, [position]);

  useEffect(() => {
    if (props?.playerData?.steps && props?.playerData?.averageSpeed) {
      let frameId: number;

      const stepDuration =
        600 / speedArray[props?.playerData.rank] - props?.track * 20; // Adjust step duration based on speed
      let lastStepTime = performance.now();
      let stepsTaken = 0;

      const updatePosition = (time: number) => {
        if (time - lastStepTime >= stepDuration && stepsTaken < steps) {
          stepsTaken++;
          setCurrentStep(stepsTaken);
          setXAxis((stepsTaken / totalSteps) * 100 - 50 / totalSteps);
          lastStepTime = time;
        }

        if (stepsTaken === totalSteps - 1 && steps === totalSteps) {
          setTimeout(() => {
            setPosition("cheer");
          }, 500);

          setTimeout(() => {
            setPosition("hidden");
          }, 2500);
          frameId = requestAnimationFrame(updatePosition);
        } else if (stepsTaken < steps) {
          frameId = requestAnimationFrame(updatePosition);
        } else {
          setPosition("idle");
        }
      };

      frameId = requestAnimationFrame(updatePosition);
      return () => cancelAnimationFrame(frameId);
    }
  }, [
    props?.playerData?.steps,
    props?.playerData?.averageSpeed,
    steps,
    totalSteps,
  ]);

  return (
    <div
      className={
        "rabbit-container " +
        "rabbit-container-" +
        position +
        " rabbit-container-track-" +
        props.track
      }
      style={{
        left: `${position === "idle" ? xAxis - 100 / totalSteps : xAxis}%`,
        opacity: position === "hidden" ? 0 : 1,
        transition: "left 0.5s ease-in-out", // Smoothly animate position changes
      }}
    >
      {/* <button
        onClick={() => {
          setPosition("idle");
        }}
      >
        idle
      </button>
      <button
        onClick={() => {
          setPosition("jump");
        }}
      >
        jump
      </button>
      <button
        onClick={() => {
          setPosition("cheer");
        }}
      >
        cheer
      </button> */}
      <img
        src={
          position === "idle"
            ? idleSequence[imgIndex]
            : position === "jump"
            ? jumpSequence[imgIndex]
            : cheerSequence[imgIndex]
        }
      />
      <div className="div-carrot">
        <img src={carrot} alt="" />
        <div className="div-carrot-score">{currentStep}</div>
      </div>
    </div>
  );
};
