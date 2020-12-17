import React from "react";
import { MdStar, MdStarBorder, MdStarHalf } from "react-icons/md";

export const Reviews = ({ stars, reviews }) => {
  const arr = Array.from({ length: 5 }, (_, index) => {
    const num = index + 0.5;
    return (
      <span className="star" key={index}>
        {stars >= num + 1 ? (
          <MdStar />
        ) : stars >= num ? (
          <MdStarHalf />
        ) : (
          <MdStarBorder />
        )}
      </span>
    );
  });
  return (
    <div className="singleProductReviews">
      {arr}
      <span className="reviews">({reviews} customer reviews)</span>
    </div>
  );
};
