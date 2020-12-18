import React from "react";
import { Link } from "react-router-dom";

export const GridView = (props) => {
  const { products } = props;
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
