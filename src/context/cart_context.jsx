import React, { useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducers/cart_reducer";

const fetchFromStorage = () => {
  let cartItems = localStorage.getItem("cart");
  if (cartItems !== null) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const initialState = {
  cart: fetchFromStorage(),
  total_amount: 0,
  total_items: 0,
  shipping_fee: 500,
};

const CartContext = React.createContext();

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "UPDATE_CART_TOTALS" });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  const addToCart = (id, amount, color, product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id,
        amount,
        color,
        product,
      },
    });
  };

  const updateAmount = (id, update) => {
    dispatch({
      type: "UPDATE_CART_AMOUNT",
      payload: {
        id,
        update,
      },
    });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };
  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeFromCart, updateAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
