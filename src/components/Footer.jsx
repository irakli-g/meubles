import React from "react";

export const Footer = () => {
  return (
    <footer>
      <p className="footerContent">
        &copy; {new Date().getFullYear()} Comfy Sloth.
      </p>
    </footer>
  );
};
