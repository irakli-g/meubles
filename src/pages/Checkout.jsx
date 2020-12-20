import React from "react";
import { Form } from "../components/Form";
import { ThankYou } from "../components/ThankYouPopUp";

export const Checkout = () => {
  return (
    <section id="checkout">
      <Form />
      <ThankYou />
    </section>
  );
};
