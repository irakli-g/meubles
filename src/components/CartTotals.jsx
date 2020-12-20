import React from "react";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

export const CartTotals = () => {
  const {
    total_amount: total,
    shipping_fee: shipping,
    clearCart,
  } = useCartContext();
  return (
    <section id="cartTotals">
      <Link to="/products">
        <button className="btn">Continue Shopping</button>
      </Link>
      <button className="btn remove" onClick={clearCart}>
        Clear Cart
      </button>
      <div className="carTotalsInfo">
        <h5>
          Subtotal:
          <span className="subtotal">$ {(total / 100).toFixed(2)}</span>
        </h5>
        <h5>
          Shipping:
          <span className="shipping">$ {(shipping / 100).toFixed(2)}</span>
        </h5>
        <hr />
        <h5>
          Total:
          <span className="total">
            $ {((total + shipping) / 100).toFixed(2)}
          </span>
        </h5>
      </div>
    </section>
  );
};
