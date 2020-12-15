import React from "react";

export const Contact = () => {
  return (
    <section id="contact">
      <div className="contactBoxOne">
        <h3 className="boxOneHeading">Join our newsletter and get 20% off</h3>
        <p className="boxOneText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          provident totam dolore consequuntur, ratione quibusdam ut hic. Iure,
          quos corrupti!
        </p>
      </div>
      <div className="contactBoxTwo">
        <form action="#">
          <input type="email" placeholder="Enter Email" />
          <button className="btn" type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};
