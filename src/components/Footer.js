import React from "react";
import "../styles/contato.css";

export function Footer() {
  return (
    <div className="footer" id="contato">
      <span>Contato</span>
      <a className="email" href="mailto:mateusgalves@outlook.com">
        <i class="fa fa-envelope">  mateusgalves@outlook.com</i> 
      </a>
      <div className="social">
        <a
          href="http://api.whatsapp.com/send?1=pt_BR&phone=55027996423636"
          className="media"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
        
      </div>
      <p>copyright guimaraesalves 2022</p>
    </div>
  );
}

export default Footer;
