import React, { useCallback, useEffect, useState } from "react";
import "./review.css";
import NextArrow from "../../scroll/nextArrow";
import PrevArrow from "../../scroll/prevArrow";
import Slider from "react-slick";

import AVTR1 from "../../../assets/profile1.jpg";
import AVTR2 from "../../../assets/profile3.jpg";
import apiCall from "../../../helpers/api";
import { toast } from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const reviewsList = [
  {
    id: 1,
    name: "Kevin",
    review: "I really like the service and the variety in their menu",
    icon: AVTR1,
  },
  {
    id: 2,
    name: "Leo",
    review: "Best Pizza ive had in a very long time, highly recommend",
    icon: AVTR2,
  },
];

const Review = (props) => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const user = useAuth();

  const somethingWentWrongToast = () =>
    toast.error("Apologies. Something went wrong on our end");
  const successMessage = () =>
    toast.success("Your feedback has been successfully submitted");

  const clearForm = () => {
    setName("");
    setReview("");
  };

  const onFormSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const response = await apiCall("post", "/api/review", {
        user: user._id,
        restaurant: props.id,
        review: review,
        name: name,
      });

      if (response && response.data) {
        successMessage();
        clearForm();
      } else {
        somethingWentWrongToast();
      }
    },
    [user, review, name]
  );

  return (
    <div className="review-form">
      <div className="review-title">
        <h2>Reviews</h2>
      </div>

      <Slider {...settings}>
        {props.reviews.map((review) => {
          return (
            <div>
              <div className="reviews">
                <div className="reviewer-icon absolute-center">
                  <p></p>
                  <img
                    src={review.icon}
                    alt={review.id}
                    className="review.icon"
                  />
                </div>
                <div className="reviewer">{review.name}</div>
                <div className="review-post">{review.review}</div>
              </div>
            </div>
          );
        })}
      </Slider>

      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Full Name"
          required
          onChange={(e) => {
            e.preventDefault();
            setName(e.target.value);
          }}
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your Review"
          required
          onChange={(e) => {
            e.preventDefault();
            setReview(e.target.value);
          }}
        />
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
};

export default Review;
