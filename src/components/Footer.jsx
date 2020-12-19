import React from "react";

export const Footer = () => {
  return (
    <footer>
      <p className="footerContent">
        &copy; {new Date().getFullYear()} meubles.
      </p>
    </footer>
  );
};
