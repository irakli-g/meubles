import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { HiOutlineTrash } from "react-icons/hi";

export const CartItem = ({
  id,
  name,
  color,
  price,
  image,
  amount,
  removeFromCart,
  updateAmount,
}) => {
  return (
    <div className="cartItem">
      <div className="cartBox-one">
        <img src={image} alt={name} />
        <div className="cartItem-info">
          <h2 className="cartItem-name">{name}</h2>
          <span className="cartItem-price">Price: ${price / 100}</span>
          <div className="cartItem-color">
            <span className="cartItem-color-name">Color:</span>
            <button
              className="cartItem-color-btn"
              style={{ backgroundColor: color }}
            ></button>
          </div>
        </div>
      </div>
      <div className="cartBox-two">
        <div className="cartBox-amount">
          <button
            className="btn"
            onClick={() => {
              updateAmount(id, "decrease");
            }}
          >
            <FaMinus className="reactIcon minus" />
          </button>
          <p className="quantity">{amount}</p>
          <button
            className="btn"
            onClick={() => {
              updateAmount(id, "increase");
            }}
          >
            <FaPlus className="reactIcon plus" />
          </button>
        </div>
        <div className="cartBox-subtotal">
          <span className="subtotal">$ {(amount * price) / 100}</span>
        </div>
        <div className="cartBox-remove">
          <HiOutlineTrash
            className="reactIcon trash"
            onClick={() => {
              removeFromCart(id);
            }}
          />
        </div>
      </div>
    </div>
  );
};
