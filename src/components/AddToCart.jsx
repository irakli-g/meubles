import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

export const AddToCart = ({ product }) => {
  const { colors, id, stock } = product;
  const { addToCart } = useCartContext();
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(colors[0]);

  const increase = () => {
    setQuantity((oldValues) => {
      const newValues = oldValues + 1;
      if (newValues > stock) {
        return oldValues;
      } else {
        return newValues;
      }
    });
  };

  const decrease = () => {
    setQuantity((oldValues) => {
      const newValues = oldValues - 1;
      if (newValues < 1) {
        return 1;
      } else {
        return newValues;
      }
    });
  };

  return (
    <div id="singleProductAddToCart">
      <p className="colors">
        Colors:
        {colors.map((item, index) => {
          return (
            <button
              className={item === color ? `btn active` : `btn`}
              style={{ background: item }}
              key={index}
              onClick={() => {
                setColor(colors[index]);
              }}
            >
              {item === color ? (
                <AiOutlineCheck className="reactIcon check" />
              ) : null}
            </button>
          );
        })}
      </p>
      <div className="btn-container">
        <button
          className="btn"
          onClick={() => {
            decrease();
          }}
        >
          <FaMinus className="reactIcon minus" />
        </button>
        <p className="quantity">{quantity}</p>
        <button
          className="btn"
          onClick={() => {
            increase();
          }}
        >
          <FaPlus className="reactIcon plus" />
        </button>
      </div>
      <Link to="/cart">
        <button
          className="btn addToCart"
          onClick={() => {
            addToCart(id, quantity, color, product);
          }}
        >
          Add To Cart
        </button>
      </Link>
    </div>
  );
};
