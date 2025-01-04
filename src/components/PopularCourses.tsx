import { ProjectCard } from "./Card";

import { getFile } from "../firebase/storage";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { PriceBox } from "./about/Prices";
import { translation } from "../utils/translation";

export const PopularCourses = () => {
  return (
    <div className="latest-work-container popular-courses-container">
      <div className="title-container">
        <p className="title">{translation.tr_popular_courses.en}</p>
      </div>

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
