import { FaBahtSign } from "react-icons/fa6";
import "./About.css";
import { FaLine } from "react-icons/fa";
import { translation } from "../../utils/translation";
interface PriceBox {
  price: string;
  hours: number;
  color: string;
  pointers: string[];
}
interface PriceBoxWithTitle {
  price: string;
  title: string;
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
          {props.hours} {translation.tr_hours.en}
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
          <FaLine /> <p>{translation.tr_free_trial.en}</p>
        </a>
      </div>
    </div>
  );
};

export const PriceBoxWithTitle = (props: PriceBoxWithTitle) => {
  return (
    <div
      className="price-box-container"
      style={{ backgroundColor: "white", border: "solid 1px " + props.color }}
    >
      <div className="hours-container">
        <h3 style={{ backgroundColor: props.color, color: "white" }}>
          {props.title}
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
          <FaLine /> <p>{translation.tr_free_trial.en}</p>
        </a>
      </div>
    </div>
  );
};

export const Prices = () => {
  return (
    <div className="prices-container">
      <h1> {translation.tr_monthly_subscriptions.en} </h1>
      <h3>{translation.tr_all_classes_are.en}</h3>

      <div className="prices-container schedule-prices-container">
        <div className="price-box-grid">
          <PriceBoxWithTitle
            price="3,000"
            title="Business Hours"
            pointers={[
              "Weekdays 08.00 - 17.00",
              "3 hours a week",
              "Min 12 hours a month",
              "Study first, pay next",
            ]}
            color="#1d4856"
          />

          <PriceBoxWithTitle
            price="2,000"
            title="Night Owl"
            pointers={[
              "Everyday 21.00 - 22.00",
              "2 hours a week",
              "Min 8 hours a month",
              "Study first, pay next",
            ]}
            color="#545454"
          />

          <PriceBoxWithTitle
            price="2,400"
            title="After School"
            pointers={[
              "Weekdays 17.00 - 19.00",
              "2 hours a week",
              "Min 8 hours a month",
              "Study first, pay next",
            ]}
            color="#a359a0"
          />

          <PriceBoxWithTitle
            price="2,800"
            title="After Work"
            pointers={[
              "Weekdays 19.00 - 21.00",
              "2 hours a week",
              "Min 8 hours a month",
              "Study first, pay next",
            ]}
            color="#ef3a5d"
          />

          <PriceBoxWithTitle
            price="3,600"
            title="Weekend Bird"
            pointers={[
              "Weekends 08.00 - 12.00",
              "3 hours a week",
              "Min 12 hours a month",
              "Study first, pay next",
            ]}
            color="#00bf63"
          />

          <PriceBoxWithTitle
            price="4,200"
            title="Power Hours"
            pointers={[
              "Weekends 13.00 - 21.00",
              "3 hours a week",
              "Min 12 hours a month",
              "Study first, pay next",
            ]}
            color="#6257e3"
          />
        </div>
      </div>

      <h1> {translation.tr_popular_private_courses.en}</h1>
      <h3>
        These classes are for flexible-hour students. Students can decide the
        time and day.
      </h3>
      <div className="price-box-grid">
        <PriceBox
          price={"3,500"}
          hours={10}
          color="#545454"
          pointers={[
            translation.tr_1_hour_free.en,
            translation.tr_pay_on_salary.en,
            translation.tr_free_digital_book.en,
            translation.tr_postpone_up_to.en,
          ]}
        />

        <PriceBox
          price={"6,500"}
          hours={20}
          color="#6257e3"
          pointers={[
            translation.tr_1_hour_free.en,
            translation.tr_pay_on_salary.en,
            translation.tr_2_payment_installments.en,
            translation.tr_postpone_up_to.en,
          ]}
        />

        <PriceBox
          price={"12,000"}
          hours={40}
          color="#a359a0"
          pointers={[
            translation.tr_1_hour_free.en,
            translation.tr_pay_on_salary.en,
            translation.tr_postpone_up_to.en,
            translation.tr_2_payment_installments.en,
          ]}
        />

        <PriceBox
          price={"25,000"}
          hours={100}
          color="#c6b79b"
          pointers={[
            translation.tr_1_hour_free.en,
            translation.tr_pay_on_salary.en,
            translation.tr_free_digital_book.en,
            translation.tr_3_payment_installments.en,
          ]}
        />
      </div>

      <div className="quote-button-container">
        <h3>{translation.tr_looking_for_something.en}</h3>
        <a href="/quote">{translation.tr_get_a_quote.en}</a>
      </div>
    </div>
  );
};
