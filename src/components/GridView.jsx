import React from "react";
import { Link } from "react-router-dom";
import { HiEmojiSad } from "react-icons/hi";

export const GridView = (props) => {
  const { products } = props;
  if (products.length === 0) {
    return (
      <h2>
        No products matched your search <HiEmojiSad />
      </h2>
    );
  }
  return (
    <>
      {products.map((item) => {
        const { id, name, price, image } = item;
        return (
          <div className="productBox" key={id}>
            <img src={image} alt={name} />
            <div className="productBoxInfo">
              <span className="price">${price / 100}</span>
              <span className="name">{name}</span>
            </div>
            <button className="btn-grid">
              <Link to={`/products/${id}`}>Details</Link>
            </button>
          </div>
        );
      })}
    </>
  );
};
