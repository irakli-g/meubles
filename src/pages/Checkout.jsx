import React, { lazy, Suspense } from "react";
import { Form } from "../components/Form";
import { Loading } from "../components/Loading";
const ThankYou = lazy(() => import("../components/ThankYouPopUp"));

export const Checkout = () => {
  return (
    <section id="checkout">
      <Form />
      <Suspense fallback={<Loading />}>
        <ThankYou />
      </Suspense>
    </section>
  );
};
