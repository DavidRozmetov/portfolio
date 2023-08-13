import photoPortfolio from "../assets/img/portfolio.png";
export const PortfolioMain = () => {
  return (
    <div className="portfolio-main-container ">
      <div className="div-left" data-aos="fade-right" data-aos-duration="500">
        <h1>portfolio.</h1>
        <h3>
          Check out some of my personal projects I have done over the past 3
          years
        </h3>
        <p>
          Over the past 3 years I have done several projects for my teaching job
          and as a term project. Since these were not made for a company, most
          of the structure is not up with the industry standards.
        </p>
      </div>
      <div
        className="div-right"
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-delay="750"
      >
        <div className="img">
          <img src={photoPortfolio} alt="David at da beach" />
        </div>
      </div>
    </div>
  );
};
