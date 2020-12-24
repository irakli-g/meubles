import React from "react";
import { Link } from "react-router-dom";
import { HiEmojiSad } from "react-icons/hi";

const ListView = (props) => {
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
              <Link to={`/products/${id}`}>
                <button className="btn">Details</button>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ListView;
