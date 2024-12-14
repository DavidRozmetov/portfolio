import { FaBahtSign } from "react-icons/fa6";
import "./About.css";
import { FaLine } from "react-icons/fa";
interface PriceBox {
  price: string;
  hours: number;
  color: string;
  pointers: string[];
}

export const PriceBox = (props: PriceBox) => {
  return (
    <div
      className="price-box-container"
      style={{ backgroundColor: "white", border: "solid 1px " + props.color }}
    >
      <div className="hours-container">
        <h3 style={{ backgroundColor: props.color, color: "white" }}>
          {props.hours} hours
        </h3>
      </div>

      <div
        className="price-container"
        style={{ color: "white", backgroundColor: props.color }}
      >
        <h3>
          <FaBahtSign />
          {props.price}
        </h3>
      </div>

      <ul style={{ color: props.color }}>
        {props.pointers.map((text) => {
          return <li key={props.price + "-" + text}>{text}</li>;
        })}
      </ul>
      <div
        className="div-link"
        style={{ backgroundColor: props.color, color: "white" }}
      >
        <a href="https://line.me/ti/p/Jq_GQiOr3e">
          <FaLine /> <p>Free trial</p>
        </a>
      </div>
    </div>
  );
};

export const Prices = () => {
  return (
    <div className="prices-container">
      <h1>Monthly Subscriptions</h1>
      <h3>All Classes are private lessons. Students only share course fees.</h3>
      <div className="price-box-grid">
        <PriceBox
          price={"3,500"}
          hours={8}
          color="#545454"
          pointers={["2 hours / week", "One-Time Payment", "1 student"]}
        />

        <PriceBox
          price={"6,500"}
          hours={16}
          color="#6257e3"
          pointers={[
            "4 hours / week",
            "2 payment installments",
            "Up to 2  students",
          ]}
        />

        <PriceBox
          price={"8,500"}
          hours={24}
          color="#a359a0"
          pointers={[
            "6 hours / week + 1 hr",
            "2 payment installments",
            "Up to 3 students",
          ]}
        />

        <PriceBox
          price={"11,000"}
          hours={32}
          color="#ef3a5d"
          pointers={[
            "8 hours / week + 1 hr",
            "3 payment installments",
            "Up to 4 students",
          ]}
        />

        <PriceBox
          price={"13,000"}
          hours={40}
          color="#00bf63"
          pointers={[
            "10 hours / week + 2 hr",
            "3 payment installments",
            "Up to 5 students",
          ]}
        />

        <PriceBox
          price={"18,500"}
          hours={60}
          color="#1d4856"
          pointers={[
            "15 hours / week + 3 hr",
            "4 payment installments",
            "Up to 6 students",
            "2 dedicated teachers",
          ]}
        />

        <PriceBox
          price={"23,500"}
          hours={80}
          color="#ff914d"
          pointers={[
            "20 hours / week + 3 hr",
            "4 payment installments",
            "Up to 7 students",
            "4 dedicated teachers",
          ]}
        />

        <PriceBox
          price={"28,500"}
          hours={100}
          color="#c6b79b"
          pointers={[
            "25 hours / week + 4 hr",
            "4 payment installments",
            "Up to 15 students",
            "5 dedicated teachers",
          ]}
        />
      </div>

      <h1>Popular Private Courses</h1>

      <div className="price-box-grid">
        <PriceBox
          price={"3,500"}
          hours={10}
          color="#545454"
          pointers={[
            "1 hour free trial",
            "Pay on Salary",
            "Free Digital Book",
            "Postpone up to 3 times",
          ]}
        />

        <PriceBox
          price={"6,500"}
          hours={20}
          color="#6257e3"
          pointers={[
            "1 hour free trial",
            "Pay on Salary",
            "2 payment installments",
            "Postpone up to 3 times",
          ]}
        />

        <PriceBox
          price={"12,000"}
          hours={40}
          color="#a359a0"
          pointers={[
            "1 hour free trial",
            "Pay on Salary",
            "Postpone up to 3 times",
            "2 payment installments",
          ]}
        />

        <PriceBox
          price={"25,000"}
          hours={100}
          color="#c6b79b"
          pointers={[
            "1 hour free trial",
            "Pay on Salary",
            "Free Digital Book",
            "3 payment installments",
          ]}
        />
      </div>

      <div className="quote-button-container">
        <h3>Looking for something else?</h3>
        <a href="/quote">Get a Quote</a>
      </div>
    </div>
  );
};
