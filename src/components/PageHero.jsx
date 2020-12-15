import React from "react";
import { Link } from "react-router-dom";

export const PageHero = ({ title }) => {
  return (
    <section id="pagehero">
      <h2 className="pageheroLink">
        <Link to="/">Home</Link> / {title}
      </h2>
    </section>
  );
};
