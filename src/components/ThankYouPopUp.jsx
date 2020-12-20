import React from "react";
import { useFormContext } from "../context/form_context";
import { order_id } from "../utils/helpers";
import { useCartContext } from "../context/cart_context";

export const ThankYou = () => {
  const { country, city, street, zip, status, clearForm } = useFormContext();
  const { clearCart } = useCartContext();

  const reload = () => {
    setTimeout(() => {
      window.location.reload();
      window.location.assign("http://localhost:3000/");
    }, 1000);
  };

  return (
    <section className={status === "COMPLETE" ? "popup" : "popup hide"}>
      <div className="popup-content">
        <h2>Thank you for shopping with us!</h2>
        <h3>Your order ID is {order_id}</h3>
        <h4>Shipping Details</h4>
        <hr />
        <div className="shipping">
          <h5>
            Country: <span>{country}</span>{" "}
          </h5>
          <h5>
            City: <span>{city}</span>
          </h5>
          <h5>
            Street: <span>{street}</span>
          </h5>
          <h5>
            Zip Code: <span>{zip}</span>
          </h5>
        </div>
        <button
          className="btn"
          onClick={() => {
            clearForm();
            clearCart();
            reload();
          }}
        >
          Continue Shopping
        </button>
      </div>
    </section>
  );
};
