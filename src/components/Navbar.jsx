import React from "react";
import { CartButtons } from "./CartButtons";
import { links } from "../utils/links";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useProductsContext } from "../context/products_context";
import logo from "../assets/meubles.png";

export const Navbar = () => {
  const { openSidebar } = useProductsContext();
  return (
    <header>
      <nav id="navigation">
        <figure className="navigation-logo">
          <Link to="/">
            <img src={logo} alt="meubles logo" />
          </Link>
        </figure>
        <ul className="navigation-links">
          {links.map((item) => {
            const { id, page, url } = item;
            return (
              <li key={id}>
                <Link to={url} className="navigation-link">
                  {page}
                </Link>
              </li>
            );
          })}
        </ul>
        <CartButtons />
        <div className="sidebar">
          <GiHamburgerMenu
            className="reactIcon sidebar"
            onClick={openSidebar}
          />
        </div>
      </nav>
    </header>
  );
};
