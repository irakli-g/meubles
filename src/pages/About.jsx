import React from "react";
import { PageHero } from "../components/PageHero";
import aboutImg from "../assets/hero-bcg.jpeg";

export const About = () => {
  return (
    <section id="about">
      <PageHero title={"About"} />
      <div className="aboutGrid">
        <figure className="aboutImage">
          <img src={aboutImg} alt="" />
        </figure>
        <div className="aboutContent">
          <h1 className="aboutContentHeading">Our Story</h1>
          <div className="underline"></div>
          <p className="aboutContentText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quod laboriosam veniam, illum sit harum sunt perferendis impedit
            voluptatum explicabo quasi deserunt omnis consequatur reprehenderit
            vero possimus numquam voluptates! Incidunt dolore inventore quo fuga
            ipsa omnis nisi voluptas, ullam voluptate. Lorem ipsum dolor sit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nobis
            tempora, quos possimus perferendis quisquam? Ut sit rerum nemo,
            reiciendis esse iure itaque, nobis sequi porro delectus explicabo
            nihil voluptas.
          </p>
        </div>
      </div>
    </section>
  );
};
