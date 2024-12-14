import { ProjectCard } from "./Card";

import { getFile } from "../firebase/storage";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { PriceBox } from "./about/Prices";

export const PopularCourses = () => {
  return (
    <div className="latest-work-container popular-courses-container">
      <div className="title-container">
        <p className="title">Popular Courses</p>
      </div>

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
