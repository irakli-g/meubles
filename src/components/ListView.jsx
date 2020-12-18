import React from "react";
import { Link } from "react-router-dom";

export const ListView = (props) => {
  const { products } = props;

  return (
    <>
      {products.map((item) => {
        const { id, image, name, description, price } = item;
        return (
          <div className="productBox" key={id}>
            <img src={image} alt={name} />
            <div className="productBoxInfo">
              <div className="infoheading">
                <h2 className="name">{name}</h2>
                <span className="price">$ {price / 100}</span>
              </div>
              <p className="description">{description.substring(0, 200)}...</p>
              <button className="buttonView">
                <Link to={`/products/${id}`}>Details</Link>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};
