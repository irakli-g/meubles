import React, { useEffect, useState } from "react";
import { countries_url } from "../utils/helpers";
import { PageHero } from "./PageHero";
import { useCartContext } from "../context/cart_context";
import { useFormContext } from "../context/form_context";

export const Form = () => {
  const [err, setErr] = useState(null);
  const [countries, setCountries] = useState([]);
  const { total_amount: amount, shipping_fee: shipping } = useCartContext();
  const {
    name,
    email,
    country,
    city,
    street,
    zip,
    startSubmitting,
    status,
    submitForm,
  } = useFormContext();

  const fetchCountries = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const countries = data.map((item) => {
        return item.name;
      });
      setCountries(countries);
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    fetchCountries(countries_url);
  }, []);

  return (
    <>
      <PageHero title="Checkout" />
      <form onSubmit={(e) => e.preventDefault()}>
        <fieldset>
          <legend>Contact Info:</legend>
          <div className="form-control">
            <input
              type="text"
              placeholder="Name"
              id="name"
              name="name"
              pattern="^[a-zA-Z\s]{2,15}$"
              value={name}
              onChange={(e) => startSubmitting(e)}
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="form-control">
            <input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              pattern="^[a-zA-Z\.-_0-9]+@[a-zA-Z0-9]+\.[a-z{2,6}]+(\.[a-zA-Z{2,6}]+)?$"
              value={email}
              onChange={(e) => startSubmitting(e)}
            />
            <label htmlFor="email">Email</label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Shipping Info:</legend>
          <div className="form-control">
            <select
              name="country"
              id="country"
              value={country}
              onChange={(e) => startSubmitting(e)}
            >
              {!err &&
                countries.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="City"
              id="city"
              name="city"
              pattern="^[a-zA-Z\s]{2,}$"
              value={city}
              onChange={(e) => startSubmitting(e)}
            />
            <label htmlFor="city">City</label>
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Street"
              id="street"
              name="street"
              pattern="^[a-zA-Z0-9\.-\s]{3,}$"
              value={street}
              onChange={(e) => startSubmitting(e)}
            />
            <label htmlFor="street">Street</label>
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Zip Code"
              id="zip"
              name="zip"
              value={zip}
              onChange={(e) => startSubmitting(e)}
            />
            <label htmlFor="zip">Zip Code</label>
          </div>
        </fieldset>
      </form>
      <div className="orderDetails">
        <div className="orderInfo">
          <h2>Order Details:</h2>
          <div className="info">
            <h5>
              Subtotal:
              <span className="subtotal">$ {(amount / 100).toFixed(2)}</span>
            </h5>
            <h5>
              Shipping:
              <span className="shipping">$ {(shipping / 100).toFixed(2)}</span>
            </h5>
            <hr />
            <h5>
              Total:
              <span className="total">$ {(amount + shipping) / 100}</span>
            </h5>
          </div>
        </div>
        <button
          className="btn"
          disabled={status === "IDLE"}
          onClick={submitForm}
        >
          Place Order
        </button>
      </div>
    </>
  );
};
