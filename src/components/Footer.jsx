import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p> created by Aki Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
