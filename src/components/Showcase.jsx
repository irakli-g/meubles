import React from "react";
import { Link } from "react-router-dom";
import heroBg1 from "../assets/hero-bcg-2.jpeg";
import heroBg2 from "../assets/hero-bcg.jpeg";

export const Showcase = () => {
  return (
    <section id="showcase">
      <div className="showcaseBoxOne">
        <h1 className="showcaseHeading">
          Design Your <br />
          Comfort Zone
        </h1>
        <p className="showcaseText">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          odit vel quasi soluta dicta. Aliquam sit veritatis natus iure ut.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          architecto aspernatur saepe facere repellat deleniti enim facilis
          nostrum, tempore perspiciatis?
        </p>
        <button className="btn">
          <Link to="/products">Shop Now</Link>
        </button>
      </div>
      <figure className="showcaseBoxTwo">
        <img src={heroBg1} alt="comfy sloth" />
        <img src={heroBg2} alt="comfy sloth" />
        <div className="background"></div>
      </figure>
    </section>
  );
};
