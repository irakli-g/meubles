import React from "react";
import { GiCompass, GiDiamondHard } from "react-icons/gi";
import { SiOpenstreetmap } from "react-icons/si";

export const Services = () => {
  return (
    <section id="services">
      <div className="servicesBoxOne">
        <h2 className="boxOneHeading">
          Custom Furniture <br />
          Built Only For You
        </h2>
        <p className="boxOneText">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
          dolorem consequuntur cupiditate. Laborum, est ex?
        </p>
      </div>
      <div className="servicesBoxTwo">
        <div className="boxTwoCard">
          <div className="cardIcon">
            <GiCompass className="reactIcon compass" />
          </div>
          <h2 className="cardHeading">Mission</h2>
          <p className="cardText">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
            reiciendis deleniti quas, dolores ducimus fuga magni quia ea
            asperiores quisquam!
          </p>
        </div>
        <div className="boxTwoCard">
          <div className="cardIcon">
            <GiDiamondHard className="reactIcon diamond" />
          </div>
          <h2 className="cardHeading">Vision</h2>
          <p className="cardText">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
            ipsa nam molestias pariatur perferendis modi iure! Itaque asperiores
            quidem ea?
          </p>
        </div>
        <div className="boxTwoCard">
          <div className="cardIcon">
            <SiOpenstreetmap className="reactIcon map" />
          </div>
          <h2 className="cardHeading">History</h2>
          <p className="cardText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            optio maiores eum sunt ipsa iusto minima aliquid eos, rerum
            sapiente.
          </p>
        </div>
      </div>
    </section>
  );
};
