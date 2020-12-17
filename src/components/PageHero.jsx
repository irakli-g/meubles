import React from "react";
import { Link } from "react-router-dom";

export const PageHero = ({ title, product }) => {
  return (
    <section id="pagehero">
      <h2 className="pageheroLink">
        <Link to="/">Home /</Link>
        {product && <Link to="/products">Products /</Link>} {title}
      </h2>
    </section>
  );
};
