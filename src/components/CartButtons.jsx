import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";

export const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { total_items } = useCartContext();
  return (
    <div className="cartButtons">
      <span className="cartText">Cart</span>
      <Link to="/cart" className="cartLink">
        <span className="cartItems">{total_items}</span>
        <HiShoppingCart className="reactIcon cart" onClick={closeSidebar} />
      </Link>
    </div>
  );
};
