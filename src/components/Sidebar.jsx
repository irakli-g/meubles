import React from "react";
import { links } from "../utils/links";
import { AiFillCloseSquare } from "react-icons/ai";
import { CartButtons } from "./CartButtons";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useProductsContext } from "../context/products_context";

export const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();

  return (
    <div className={!isSidebarOpen ? "sidebarPanel" : "sidebarPanel show"}>
      <div className="sidebarHeader">
        <figure className="sidebarLogo">
          <img src={logo} alt="comfy sloth logo" />
        </figure>
        <AiFillCloseSquare className="reactIcon close" onClick={closeSidebar} />
      </div>
      <ul className="sidebar-links">
        {links.map((item) => {
          const { id, page, url } = item;
          return (
            <li key={id}>
              <Link to={url} className="sidebar-link" onClick={closeSidebar}>
                {page}
              </Link>
            </li>
          );
        })}
      </ul>
      <CartButtons />
    </div>
  );
};
