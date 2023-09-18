import { useEffect, useState } from "react";
import one from "../assets/img/spinning-portfolio/01.jpeg";
import two from "../assets/img/spinning-portfolio/02.jpeg";
import three from "../assets/img/spinning-portfolio/03.jpeg";
import four from "../assets/img/spinning-portfolio/04.jpeg";
import five from "../assets/img/spinning-portfolio/05.jpeg";
import six from "../assets/img/spinning-portfolio/06.jpeg";
import seven from "../assets/img/spinning-portfolio/07.jpeg";
import eight from "../assets/img/spinning-portfolio/08.jpeg";
import nine from "../assets/img/spinning-portfolio/09.jpeg";
import ten from "../assets/img/spinning-portfolio/10.jpeg";
import eleven from "../assets/img/spinning-portfolio/11.jpeg";
import twelve from "../assets/img/spinning-portfolio/12.jpeg";
import thirteen from "../assets/img/spinning-portfolio/13.jpeg";
import fourteen from "../assets/img/spinning-portfolio/14.jpeg";
import fifteen from "../assets/img/spinning-portfolio/15.jpeg";
import sixteen from "../assets/img/spinning-portfolio/16.jpeg";
import seventeen from "../assets/img/spinning-portfolio/17.jpeg";
import eighteen from "../assets/img/spinning-portfolio/18.jpeg";
import nineteen from "../assets/img/spinning-portfolio/19.jpeg";

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
