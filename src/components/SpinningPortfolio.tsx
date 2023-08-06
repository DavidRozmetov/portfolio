import { useEffect, useState } from "react";
import one from "../assets/img/spinning-portfolio/01.png";
import two from "../assets/img/spinning-portfolio/02.png";
import three from "../assets/img/spinning-portfolio/03.png";
import four from "../assets/img/spinning-portfolio/04.png";
import five from "../assets/img/spinning-portfolio/05.png";
import six from "../assets/img/spinning-portfolio/06.png";
import seven from "../assets/img/spinning-portfolio/07.png";
import eight from "../assets/img/spinning-portfolio/08.png";
import nine from "../assets/img/spinning-portfolio/09.png";
import ten from "../assets/img/spinning-portfolio/10.png";
import eleven from "../assets/img/spinning-portfolio/11.png";
import twelve from "../assets/img/spinning-portfolio/12.png";
import thirteen from "../assets/img/spinning-portfolio/13.png";
import fourteen from "../assets/img/spinning-portfolio/14.png";
import fifteen from "../assets/img/spinning-portfolio/15.png";
import sixteen from "../assets/img/spinning-portfolio/16.png";
import seventeen from "../assets/img/spinning-portfolio/17.png";
import eighteen from "../assets/img/spinning-portfolio/18.png";
import nineteen from "../assets/img/spinning-portfolio/19.png";

const images = [
  one,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
  thirteen,
  fourteen,
  fifteen,
  sixteen,
  seventeen,
  eighteen,
  nineteen,
];

interface SpinningPortfolioProps {
  i: number;
}
export const SpinningPortfolio: React.FC<SpinningPortfolioProps> = ({ i }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(Math.max(0, Math.min(19, i)));
  }, [i]);

  return (
    <img
      className="img-regular"
      src={images[images.length - index - 1]}
      alt="spinning portfolio"
    />
    // <p>src={images[index]}</p>
  );
};
