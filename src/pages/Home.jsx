import React from "react";
import { Showcase } from "../components/Showcase";
import { FeaturedProducts } from "../components/FeaturedProducts";
import { Services } from "../components/Services";
import { Contact } from "../components/Contact";

const Home = () => {
  return (
    <>
      <Showcase />
      <FeaturedProducts />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
