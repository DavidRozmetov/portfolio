import main from "../../assets/img/schedule.webp";
import { ScheduleTableFull } from "./ScheduleTableFull";

import "./Schedule.css";
import { PriceBox, PriceBoxWithTitle } from "../about/Prices";
import { translation } from "../../utils/translation";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
export const Schedule = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [type, setType] = useState<string>("");

  useEffect(() => {
    setType(
      searchParams
        .toString()
        .split("type")
        [searchParams.toString().split("type").length - 1].replace("=", "")
        .replaceAll("+", " ")
    );
  }, [searchParams]);

  return (
    <div className="about-container schedule-container">
      <div className="about-me-container">
        <div className="about-me-text" data-aos="fade-right">
          <h1 className="schedule-title">{type}.</h1>
          <h2>
            {type === "weekdays"
              ? "Monday to Friday"
              : type === "weekends"
              ? "Saturday and Sunday"
              : type === "business hours"
              ? "Monday to Friday, 08.00 - 17.00"
              : type === "after-school hours"
              ? "Monday to Friday, 17.00 - 19.00"
              : type === "evenings"
              ? "Monday to Friday, 19.00-21.00"
              : type === "late hours"
              ? "Every Day, 21:00 - 22:00"
              : type === "weekend mornings"
              ? "Saturday and Sunday, 08.00 - 12.00"
              : type === "power hours"
              ? "Saturday and Sunday, 13.00 - 20.00"
              : "Monthly Payments – pay at the end of the month, not the beginning!"}
          </h2>
          <p>
            {type === "weekdays"
              ? "Our weekday classes are designed for students who prefer a fixed, consistent schedule during the workweek. With flexible options tailored to different times of day, students can choose from morning, afternoon, or evening sessions to best suit their availability. To offer convenience and affordability, we provide a monthly payment plan with payments due at the end of each month."
              : type === "weekends"
              ? "Our weekend classes offer flexible options for students who prefer to study during their days off. Choose from morning, afternoon, or evening sessions to fit your weekend plans.  With a convenient monthly payment plan, payments are made at the end of each month, and pricing depends on the time of day. This structure allows students to maintain a consistent schedule while enjoying flexibility."
              : type === "business hours"
              ? "Our business hours offer the best value for your investment. Available Monday to Friday from 08:00 to 17:00, these sessions are ideal for students seeking a consistent and productive schedule during the workweek. With competitive pricing, this option provides the best balance of affordability and convenience for those looking to maximize their learning experience."
              : type === "after-school hours"
              ? "Our after-school classes are perfect for students looking to continue their learning once the school day ends. Available in the late afternoon and early evening, these sessions offer flexibility while fitting seamlessly into students' schedules. With affordable pricing, after-school hours provide a great opportunity to balance education and other activities."
              : type === "evenings"
              ? "Our evening classes, available Monday to Friday from 19:00 to 21:00, are perfect for students who prefer to study after their daytime commitments. These sessions offer flexibility and convenience, allowing students to continue their learning in a relaxed, focused environment. With affordable pricing, evening hours are an ideal choice for those seeking a balance between education and other evening activities."
              : type === "late hours"
              ? "Our late hours, available every day from 21:00 to 22:00, offer the most affordable option for students. These sessions are perfect for those who prefer to study late in the evening or have other daytime commitments. As the most budget-friendly course, late hours provide an excellent opportunity to continue learning at a lower cost while maintaining a consistent study routine."
              : type === "weekend mornings"
              ? "Start your weekends productively with our morning classes, available from 08:00 to 12:00. These sessions are perfect for early risers who want to dedicate their mornings to learning while keeping the rest of the day free. With flexible options and competitive pricing, weekend mornings are an excellent choice for motivated students."
              : type === "power hours"
              ? "Make the most of your weekend afternoons and evenings with our Power Hours, available from 13:00 to 21:00. These extended sessions are perfect for students looking to maximize their learning time in a single day. With flexible scheduling and great value, Power Hours are ideal for those seeking focused and productive study sessions."
              : "Our classes are designed for students with fixed schedules, offering a convenient monthly payment plan where payments are made at the end of the month. Pricing depends on the time of day and whether classes are on weekdays or weekends, ensuring students can choose a consistent schedule that works best for them."}
          </p>
        </div>
        <div
          className="about-me-image"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <div className="img-main">
            <img src={main} alt="main photo about me" />
          </div>
        </div>
      </div>
      <ScheduleTableFull type={type} />
      <div className="requirements-terms">
        <h3 className="special-h2">Requirements and Terms</h3>
        <ul>
          <li>
            <strong>Fixed Weekly Schedule:</strong> Students must select an
            available time slot that adds up to a total of 3 hours per week.
          </li>
          <li>
            <strong>Rescheduling Policy:</strong> Missed classes can be
            rescheduled within the same month, subject to availability, but
            cannot be carried over to the following month.
          </li>
          <li>
            <strong>Monthly Hour Limit:</strong> If a month exceeds 12 scheduled
            hours of classes, students only pay for the 12 hours. Any additional
            hours are treated as free classes or holidays.
          </li>
        </ul>
      </div>

      <div className="prices-container schedule-prices-container">
        <h1> {translation.tr_monthly_subscriptions.en} </h1>
        <h3>{translation.tr_all_classes_are.en}</h3>
        <div className="price-box-grid">
          {![
            "weekends",
            "after-school hours",
            "late hours",
            "weekend mornings",
            "evenings",
            "power hours",
          ].includes(type) && (
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
          )}

          {![
            "after-school hours",
            "business hours",
            "weekend mornings",
            "evenings",
            "power hours",
          ].includes(type) && (
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
          )}

          {![
            "weekends",
            "business hours",

            "late hours",
            "evenings",
            "weekend mornings",
            "power hours",
          ].includes(type) && (
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
          )}

          {![
            "weekends",
            "after-school hours",
            "late hours",
            "business hours",
            "weekend mornings",
            "power hours",
          ].includes(type) && (
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
          )}

          {![
            "weekdays",
            "after-school hours",
            "late hours",
            "evenings",
            "power hours",
            "business hours",
          ].includes(type) && (
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
          )}

          {![
            "weekdays",
            "after-school hours",
            "late hours",
            "evenings",
            "weekend mornings",
            "business hours",
          ].includes(type) && (
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
          )}
        </div>
      </div>
    </div>
  );
};
