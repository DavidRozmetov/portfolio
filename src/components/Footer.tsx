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
        &copy; <strong>t-david.com</strong> 2025
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
        <a href="/wordle">Wordle</a>
        <a href="/contact">Contact Me</a>
      </div>
    </div>
  );
};
