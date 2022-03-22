import React from "react";
import "../styles/sobre.css";
import perfil from "../assets/borboleta.png";
import curriculo from "../assets/CurrículoMateusAlves_fev2022.pdf";
function Sobre() {
  return (
    <div className="sobre" id="sobre">
      <img src={perfil} className="perfil-img" />
      <div className="text">
        <h1>Sobre Mim</h1>
        <p>
          Aluno do Curso FullStack da Kenzie Academy, atualmente no Q3 Back End
          - Python, Flask, MongoDB, SQL.{" "}
        </p>
        <br />
        <p>
          Migrante da área da construção civil, com vasta experiência em
          gerência de projetos em obras com grande valia para as Soft Skills de
          comunicação, resiliência, empatia e colaboração.
        </p>
        <div className="botoes">
          <a
            className="button"
            href="https://www.linkedin.com/in/mateus-guimar%C3%A3es-alves-b49008190/"
          >
            <i className="fab fa-linkedin"></i>Linkedin
          </a>
          <a className="button" href={curriculo}>
            <i className="fas fa-file-download"></i>Curriculo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
