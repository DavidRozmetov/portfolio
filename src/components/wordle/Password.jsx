import { FaCat } from "react-icons/fa6";
import { FaDog } from "react-icons/fa";
import { FaCrow } from "react-icons/fa";
import { FaFishFins } from "react-icons/fa6";
import { GiRabbit } from "react-icons/gi";
import { PiBugDroidFill } from "react-icons/pi";

// food
import { GiCoffeeCup } from "react-icons/gi";
import { SiBuymeacoffee } from "react-icons/si";
import { FaCakeCandles } from "react-icons/fa6";
import { GiShinyApple } from "react-icons/gi";
import { GiBananaPeeled } from "react-icons/gi";
import { GiStrawberry } from "react-icons/gi";

// transport

import { FaCarSide } from "react-icons/fa";
import { RiMotorbikeFill } from "react-icons/ri";
import { PiAirplaneTiltFill } from "react-icons/pi";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { FaSailboat } from "react-icons/fa6";
import { FaVanShuttle } from "react-icons/fa6";

//Nature

import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaCloudSun } from "react-icons/fa";

import { GiSpottedMushroom } from "react-icons/gi";
import { BiSolidLeaf } from "react-icons/bi";
import { useEffect, useState } from "react";

export const Password = (props) => {
  const setPassword = props.setPassword;

  const [passwordArray, setPasswordArray] = useState([]);

  const handleClick = (e, i) => {
    e.preventDefault();
    let tempArray = [...passwordArray];

    if (tempArray.includes(i)) {
      tempArray = tempArray.filter((a) => a !== i);
    } else {
      if (tempArray.length >= 3) {
        tempArray.shift();
      }
      tempArray.push(i);
    }

    setPasswordArray(tempArray);
  };
  useEffect(() => {
    let sum = 0;
    passwordArray.map((i) => {
      sum = sum + 2 ** i;
    });
    let res =
      sum * parseFloat(process.env.REACT_APP_HASH) +
      parseFloat(process.env.REACT_APP_SALT);

    if (passwordArray.length > 0) {
      setPassword(res.toString(36));
    }
  }, [passwordArray]);
  return (
    <div className="passwords-container">
      <button
        onClick={(e) => {
          handleClick(e, 0);
        }}
        className={passwordArray.includes(0) ? "btn-password-active" : ""}
      >
        <FaDog />
      </button>
      <button
        onClick={(e) => {
          handleClick(e, 1);
        }}
        className={passwordArray.includes(1) ? "btn-password-active" : ""}
      >
        <FaCat />
      </button>

      <button
        onClick={(e) => {
          handleClick(e, 2);
        }}
        className={passwordArray.includes(2) ? "btn-password-active" : ""}
      >
        <GiRabbit />
      </button>
      <button
        onClick={(e) => {
          handleClick(e, 3);
        }}
        className={passwordArray.includes(3) ? "btn-password-active" : ""}
      >
        <FaCrow />
      </button>
      <button
        onClick={(e) => {
          handleClick(e, 4);
        }}
        className={passwordArray.includes(4) ? "btn-password-active" : ""}
      >
        <FaFishFins />
      </button>

      <button
        onClick={(e) => {
          handleClick(e, 5);
        }}
        className={passwordArray.includes(5) ? "btn-password-active" : ""}
      >
        <PiBugDroidFill />
      </button>

      <button
        onClick={(e) => {
          handleClick(e, 6);
        }}
        className={passwordArray.includes(6) ? "btn-password-active" : ""}
      >
        <GiShinyApple />
      </button>
      <button
        onClick={(e) => {
          handleClick(e, 7);
        }}
        className={passwordArray.includes(7) ? "btn-password-active" : ""}
      >
        <GiBananaPeeled />
      </button>
      <button
        onClick={(e) => {
          handleClick(e, 8);
        }}
        className={passwordArray.includes(8) ? "btn-password-active" : ""}
      >
        <GiStrawberry />
      </button>
      <button
        onClick={(e) => {
          handleClick(e, 9);
        }}
        className={passwordArray.includes(9) ? "btn-password-active" : ""}
      >
        <GiCoffeeCup />
      </button>
      <button
        onClick={(e) => {
          handleClick(e, 10);
        }}
        className={passwordArray.includes(10) ? "btn-password-active" : ""}
      >
        <SiBuymeacoffee />
      </button>
      <button
        onClick={(e) => {
          handleClick(e, 11);
        }}
        className={passwordArray.includes(11) ? "btn-password-active" : ""}
      >
        <FaCakeCandles />
      </button>

      <button
        onClick={(e) => {
          handleClick(e, 12);
        }}
        className={passwordArray.includes(12) ? "btn-password-active" : ""}
      >
        {" "}
        <RiMotorbikeFill />
      </button>
      <button
        onClick={(e) => {
          handleClick(e, 13);
        }}
        className={passwordArray.includes(13) ? "btn-password-active" : ""}
      >
        <FaCarSide />{" "}
      </button>
      <button
        onClick={(e) => {
          handleClick(e, 14);
        }}
        className={passwordArray.includes(14) ? "btn-password-active" : ""}
      >
        {" "}
        <FaVanShuttle />
      </button>
      <button
        onClick={(e) => {
          handleClick(e, 15);
        }}
        className={passwordArray.includes(15) ? "btn-password-active" : ""}
      >
        {" "}
        <FaSailboat />
      </button>

      <button
        onClick={(e) => {
          handleClick(e, 16);
        }}
        className={passwordArray.includes(16) ? "btn-password-active" : ""}
      >
        {" "}
        <PiAirplaneTiltFill />
      </button>

      <button
        onClick={(e) => {
          handleClick(e, 17);
        }}
        className={passwordArray.includes(17) ? "btn-password-active" : ""}
      >
        {" "}
        <BsFillRocketTakeoffFill />
      </button>

      <button
        onClick={(e) => {
          handleClick(e, 18);
        }}
        className={passwordArray.includes(18) ? "btn-password-active" : ""}
      >
        <FaSun />
      </button>
      <button
        onClick={(e) => {
          handleClick(e, 19);
        }}
        className={passwordArray.includes(19) ? "btn-password-active" : ""}
      >
        <FaMoon />
      </button>
      <button
        onClick={(e) => {
          handleClick(e, 20);
        }}
        className={passwordArray.includes(20) ? "btn-password-active" : ""}
      >
        <FaStar />
      </button>

      <button
        onClick={(e) => {
          handleClick(e, 21);
        }}
        className={passwordArray.includes(21) ? "btn-password-active" : ""}
      >
        <FaCloudSun />
      </button>

      <button
        onClick={(e) => {
          handleClick(e, 22);
        }}
        className={passwordArray.includes(22) ? "btn-password-active" : ""}
      >
        <GiSpottedMushroom />
      </button>
      <button
        onClick={(e) => {
          handleClick(e, 23);
        }}
        className={passwordArray.includes(23) ? "btn-password-active" : ""}
      >
        <BiSolidLeaf />
      </button>
    </div>
  );
};

export const GamePassPassCode = (props) => {
  const setPassword = props.setPassword;

  const [passwordArray, setPasswordArray] = useState([]);

  const handleClick = (e, i) => {
    e.preventDefault();
    let tempArray = [...passwordArray];

    if (tempArray.includes(i)) {
      tempArray = tempArray.filter((a) => a !== i);
    } else {
      if (tempArray.length >= props.total) {
        tempArray.shift();
      }
      tempArray.push(i);
    }

    setPasswordArray(tempArray);
    props.setPassArray(tempArray);
  };
  useEffect(() => {
    let sum = 0;
    passwordArray.map((i) => {
      sum = sum + 2 ** i;
    });
    let res =
      sum * parseFloat(process.env.REACT_APP_HASH) +
      parseFloat(process.env.REACT_APP_SALT);

    if (passwordArray.length > 0) {
      setPassword(res.toString(36));
    }
  }, [passwordArray]);
  return (
    <div className="passwords-container">
      <button
        onClick={(e) => {
          handleClick(e, 0);
        }}
        className={passwordArray.includes(0) ? "btn-password-active" : ""}
      >
        <FaDog />
      </button>
      <button
        onClick={(e) => {
          handleClick(e, 1);
        }}
        className={passwordArray.includes(1) ? "btn-password-active" : ""}
      >
        <FaCat />
      </button>

      <button
        onClick={(e) => {
          handleClick(e, 2);
        }}
        className={passwordArray.includes(2) ? "btn-password-active" : ""}
      >
        <GiRabbit />
      </button>
      <button
        onClick={(e) => {
          handleClick(e, 3);
        }}
        className={passwordArray.includes(3) ? "btn-password-active" : ""}
      >
        <FaCrow />
      </button>
      <button
        onClick={(e) => {
          handleClick(e, 4);
        }}
        className={passwordArray.includes(4) ? "btn-password-active" : ""}
      >
        <FaFishFins />
      </button>

      <button
        onClick={(e) => {
          handleClick(e, 5);
        }}
        className={passwordArray.includes(5) ? "btn-password-active" : ""}
      >
        <PiBugDroidFill />
      </button>

      <button
        onClick={(e) => {
          handleClick(e, 6);
        }}
        className={passwordArray.includes(6) ? "btn-password-active" : ""}
      >
        <GiShinyApple />
      </button>
      <button
        onClick={(e) => {
          handleClick(e, 7);
        }}
        className={passwordArray.includes(7) ? "btn-password-active" : ""}
      >
        <GiBananaPeeled />
      </button>
      <button
        onClick={(e) => {
          handleClick(e, 8);
        }}
        className={passwordArray.includes(8) ? "btn-password-active" : ""}
      >
        <GiStrawberry />
      </button>
      <button
        onClick={(e) => {
          handleClick(e, 9);
        }}
        className={passwordArray.includes(9) ? "btn-password-active" : ""}
      >
        <GiCoffeeCup />
      </button>
      <button
        onClick={(e) => {
          handleClick(e, 10);
        }}
        className={passwordArray.includes(10) ? "btn-password-active" : ""}
      >
        <SiBuymeacoffee />
      </button>
      <button
        onClick={(e) => {
          handleClick(e, 11);
        }}
        className={passwordArray.includes(11) ? "btn-password-active" : ""}
      >
        <FaCakeCandles />
      </button>

      <button
        onClick={(e) => {
          handleClick(e, 12);
        }}
        className={passwordArray.includes(12) ? "btn-password-active" : ""}
      >
        {" "}
        <RiMotorbikeFill />
      </button>
      <button
        onClick={(e) => {
          handleClick(e, 13);
        }}
        className={passwordArray.includes(13) ? "btn-password-active" : ""}
      >
        <FaCarSide />{" "}
      </button>
      <button
        onClick={(e) => {
          handleClick(e, 14);
        }}
        className={passwordArray.includes(14) ? "btn-password-active" : ""}
      >
        {" "}
        <FaVanShuttle />
      </button>
      <button
        onClick={(e) => {
          handleClick(e, 15);
        }}
        className={passwordArray.includes(15) ? "btn-password-active" : ""}
      >
        {" "}
        <FaSailboat />
      </button>

      <button
        onClick={(e) => {
          handleClick(e, 16);
        }}
        className={passwordArray.includes(16) ? "btn-password-active" : ""}
      >
        {" "}
        <PiAirplaneTiltFill />
      </button>

      <button
        onClick={(e) => {
          handleClick(e, 17);
        }}
        className={passwordArray.includes(17) ? "btn-password-active" : ""}
      >
        {" "}
        <BsFillRocketTakeoffFill />
      </button>

      <button
        onClick={(e) => {
          handleClick(e, 18);
        }}
        className={passwordArray.includes(18) ? "btn-password-active" : ""}
      >
        <FaSun />
      </button>
      <button
        onClick={(e) => {
          handleClick(e, 19);
        }}
        className={passwordArray.includes(19) ? "btn-password-active" : ""}
      >
        <FaMoon />
      </button>
      <button
        onClick={(e) => {
          handleClick(e, 20);
        }}
        className={passwordArray.includes(20) ? "btn-password-active" : ""}
      >
        <FaStar />
      </button>

      <button
        onClick={(e) => {
          handleClick(e, 21);
        }}
        className={passwordArray.includes(21) ? "btn-password-active" : ""}
      >
        <FaCloudSun />
      </button>

      <button
        onClick={(e) => {
          handleClick(e, 22);
        }}
        className={passwordArray.includes(22) ? "btn-password-active" : ""}
      >
        <GiSpottedMushroom />
      </button>
      <button
        onClick={(e) => {
          handleClick(e, 23);
        }}
        className={passwordArray.includes(23) ? "btn-password-active" : ""}
      >
        <BiSolidLeaf />
      </button>
    </div>
  );
};

export const UniqueIconById = (props) => {
  const icons = [
    <FaDog />,
    <FaCat />,
    <GiRabbit />,
    <FaCrow />,
    <FaFishFins />,
    <PiBugDroidFill />,
    <GiShinyApple />,
    <GiBananaPeeled />,
    <GiStrawberry />,
    <GiCoffeeCup />,
    <SiBuymeacoffee />,
    <FaCakeCandles />,
    <RiMotorbikeFill />,
    <FaCarSide />,
    <FaVanShuttle />,
    <FaSailboat />,
    <PiAirplaneTiltFill />,
    <BsFillRocketTakeoffFill />,
    <FaSun />,
    <FaMoon />,
    <FaStar />,
    <FaCloudSun />,
    <GiSpottedMushroom />,
    <BiSolidLeaf />,
  ];
  return icons[props.id];
};
