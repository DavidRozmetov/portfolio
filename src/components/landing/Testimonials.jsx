import { useEffect, useRef, useState } from "react";

import { toast } from "react-toastify";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./testimonials.css";
import bow from "../../assets/img/students/bow.png";
import Nodd from "../../assets/img/students/Nodd.jpg";
import bam from "../../assets/img/students/bam.png";
import brook from "../../assets/img/students/brook.png";
import frank from "../../assets/img/students/frank.png";
import khim from "../../assets/img/students/khim.png";
import kwan from "../../assets/img/students/kwan.jpg";
import ploy from "../../assets/img/students/ploy.png";
import pukan from "../../assets/img/students/pukan.png";

export const Testimonials = (props) => {
  const containerRef = useRef(null); // Ref for the product-cards-container

  const [arrowDisable, setArrowDisable] = useState(true);

  const images = {
    bow: bow,
    Nodd: Nodd,
    bam: bam,
    brook: brook,
    frank: frank,
    khim: khim,
    kwan: kwan,
    ploy: ploy,
    pukan: pukan,
  };

  const reviews = [
    {
      name: "Miss Bow",
      job: "Regional Manager, Pharmaceutical Trials Company",
      img: "bow",
      review:
        "David has been my English teacher for over three years. His lessons are practical and focused on improving my professional communication. I feel much more confident speaking with international colleagues thanks to his support.",
      rating: 5,
    },
    {
      name: "Miss Ploy",
      job: "TV Show Host",
      img: "ploy",
      review:
        "Working with David has been a game-changer for my English. He helped me refine my speaking skills, making me more polished and confident during high-stakes interviews like those with Miss Universe candidates.",
      rating: 5,
    },
    {
      name: "Miss Kwan",
      job: "Business Owner",
      img: "kwan",
      review:
        "David guided me through the process of selecting the right classes for my studies in Singapore and continues to support me as I navigate my coursework. His expertise and encouragement have been invaluable.",
      rating: 5,
    },
    {
      name: "Mr Brook and Miss Nee",
      job: "programmers",
      img: "brook",
      review:
        "David prepared us for our move to New Zealand, helping us improve our English skills and cultural understanding. Thanks to his practical lessons, we felt ready to communicate and adapt in a new country.",
      rating: 5,
    },
    {
      name: "Nodd",
      img: "Nodd",
      job: "student",
      review:
        "Teacher David has been my teacher for the past 5 years, and I’ve learned so much! He makes every lesson fun and exciting. I really like how he explains things clearly and helps me improve step by step.",
      rating: 5,
    },

    {
      name: "Mr Frank",
      job: "Lawyer",
      img: "frank",
      review:
        "David's refreshment courses have been perfect for keeping my conversational English sharp. As a lawyer, I need clarity and confidence in communication, and his lessons always deliver.",
      rating: 5,
    },
    {
      name: "Miss Bam",
      job: "Nodd's mother",
      img: "bam",
      review:
        "David has been a fantastic teacher for my daughter, Nodd. His dedication and patience over the years have really helped Nodd grow, not just in language skills but also in confidence. We’re so grateful for his guidance.",
      rating: 5,
    },
    {
      name: "Pugan",
      job: "Student",
      img: "pukan",
      review:
        "Teacher David is super kind and fun! I’ve been learning with him for a year, and I love the games and stories he uses to help me learn English.",
      rating: 5,
    },
    {
      name: "Khim",
      job: "Student",
      img: "khim",
      review:
        "Teacher David’s lessons are always engaging and helpful. He explains everything so well, and I’ve seen great improvement in my English. I even invited my friend to join because I enjoy learning with him so much!",
      rating: 5,
    },
  ];

  const handleHorizantalScroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 1100; // Adjust this value as needed
      if (direction === "left") {
        containerRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      } else {
        containerRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="landing-categories-container landing-reviews-container">
      <div className="title-container">
        <p className="title">What People Say About Teacher David</p>
      </div>
      <div className="btn-horizontal-scroll left-scroll">
        <FaAngleLeft
          onClick={() => handleHorizantalScroll("left")}
          disabled={arrowDisable}
        />
      </div>
      <div className="btn-horizontal-scroll right-scroll">
        <FaAngleRight
          onClick={() => handleHorizantalScroll("right")}
          disabled={arrowDisable}
        />
      </div>
      <div className="review-cards-scroller" ref={containerRef}>
        <div className="product-cards-container review-cards-container">
          {reviews?.map((review) => (
            <div className="review-card-container" key={review.id}>
              <div className="div-img-review-student">
                <img
                  src={images[review.img]}
                  alt={review.name + " review on Teacher David"}
                />
              </div>
              <div className="review-card-author">
                <p>
                  - {review?.name}, {review?.job}
                </p>
              </div>
              <div className="review-card-message">
                <p>{review?.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
