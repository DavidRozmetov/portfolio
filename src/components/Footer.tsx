import { LiaChevronCircleUpSolid } from "react-icons/lia";
const handleGoUpClick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const Footer = () => {
  return (
    <div className="footer-container">
      <a className="all-rights-reserved">
        {" "}
        &copy; All rights reserved. T-David, 2023
      </a>
      <div>
        <button
          className="button-go-up"
          onClick={() => {
            handleGoUpClick();
          }}
        >
          <LiaChevronCircleUpSolid className="icon-go-up" />
        </button>
      </div>
      <div className="footer-items">
        <a href="/about">About</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact Me</a>
        <a href="/portfolio">Portfolio</a>
      </div>
    </div>
  );
};
