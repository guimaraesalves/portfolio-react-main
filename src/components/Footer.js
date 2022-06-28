import React from "react";
import "../styles/contato.css";

export function Footer() {
  return (
    <div className="footer" id="contato">
      <span>Contato</span>
      <a className="email">
        <i class="fas fa-envelope-square"></i> guimaraesalvesmateus@gmail.com
      </a>
      <div className="social">
        <a
          href="https://api.whatsapp.com/send?phone=5527996423636"
          className="media"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="" className="media">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <p>copyright guimaraesalves 2022</p>
    </div>
  );
}

export default Footer;
