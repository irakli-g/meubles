import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

export const FeaturedProduct = (props) => {
  const { id, image, name, price } = props;
  return (
    <div className="featuredProduct">
      <figure className="featuredProductImage">
        <img src={image} alt={name} />
        <Link to={`/products/${id}`}>
          <RiSearch2Line className="reactIcon search" />
        </Link>
      </figure>
      <div className="featuredPorductInfo">
        <h3 className="productName">{name}</h3>
        <span className="productPrice">${price / 100}</span>
      </div>
    </div>
  );
};
