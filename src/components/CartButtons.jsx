import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";

export const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  return (
    <div className="cartButtons">
      <span className="cartItems">5</span>
      <span className="cartText">Cart</span>
      <Link to="/cart" className="cartLink">
        <HiShoppingCart className="reactIcon cart" onClick={closeSidebar} />
      </Link>
      <span className="loginText">Login</span>
      <AiOutlineUserAdd className="reactIcon user" />
    </div>
  );
};