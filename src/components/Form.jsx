import React, { useEffect, useState } from "react";
import { countries_url } from "../utils/helpers";
import { PageHero } from "./PageHero";
import { useCartContext } from "../context/cart_context";

const status = {
  IDLE: "IDLE",
  SUBMITTING: "SUBMITTING",
  COMPLETED: "COMPLETED",
};

export const Form = () => {
  const [err, setErr] = useState(null);
  const [countries, setCountries] = useState([]);
  const [formState, setFormState] = useState(status.IDLE);
  const { total_amount: amount, shipping_fee: shipping } = useCartContext();
  const [values, setValues] = useState({
    name: "",
    email: "",
    country: "",
    city: "",
    street: "",
    zip: "",
  });

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
    if (
      values.name !== "" &&
      values.email !== "" &&
      values.country !== "" &&
      values.street !== "" &&
      values.city !== "" &&
      values.zip !== ""
    ) {
      setFormState(status.COMPLETED);
    }
  }, [values]);

  const startSubmitting = (e) => {
    setFormState(status.SUBMITTING);
    let property = e.target.name;
    let value = e.target.value;

    setValues((oldValues) => {
      return {
        ...oldValues,
        [property]: value,
      };
    });
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
              pattern="^[a-zA-Z]{2,12}$"
              value={values.name}
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
              value={values.email}
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
              value={values.country}
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
              pattern="^[a-zA-Z]{2,}$"
              value={values.city}
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
              pattern="^[a-zA-Z0-9\.-]{3,}$"
              value={values.street}
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
              value={values.zip}
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
              <span className="subtotal">$ {amount / 100}</span>
            </h5>
            <h5>
              Shipping:
              <span className="shipping">$ {shipping / 100}</span>
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
          disabled={
            formState === status.IDLE || formState === status.SUBMITTING
          }
        >
          Place Order
        </button>
      </div>
    </>
  );
};
