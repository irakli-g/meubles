import React from "react";
import { Link } from "react-router-dom";
import { ImSad2 } from "react-icons/im";

export const Error = () => {
  return (
    <section id="errorPage">
      <div className="errorHeadingBox">
        <h1 className="errorHeading">404</h1>
        <h2 className="errorSubheading">
          Page not found <ImSad2 className="reactIcon sad" />
        </h2>
      </div>
      <button className="btn error">
        <Link to="/">Go Back</Link>
      </button>
    </section>
  );
};
