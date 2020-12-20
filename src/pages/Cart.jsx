import React from "react";
import { useCartContext } from "../context/cart_context";
import { CartItem } from "../components/CartItem";
import { CartTotals } from "../components/CartTotals";
import { PageHero } from "../components/PageHero";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, removeFromCart, updateAmount } = useCartContext();
  if (cart.length < 1) {
    return (
      <>
        <PageHero title={"Cart"} />
        <section id="emptyCart">
          <h1>Your Cart is empty.</h1>
          <Link to="/products">
            <button className="btn">Products</button>
          </Link>
        </section>
      </>
    );
  }
  return (
    <>
      <PageHero title={"Cart"} />
      <section id="cart">
        <div className="cartItems-container">
          {cart.map((item) => {
            return (
              <CartItem
                {...item}
                key={item.id}
                removeFromCart={removeFromCart}
                updateAmount={updateAmount}
              />
            );
          })}
        </div>
        <CartTotals />
      </section>
    </>
  );
};
