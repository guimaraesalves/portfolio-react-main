import React from "react";
import "../styles/sobre.css";
import perfil from "../assets/borboleta.png";
import curriculo from "../assets/CV_MateusAlves_jun2022.pdf";
function Sobre() {
  return (
    <div className="sobre" id="sobre">
      <img src={perfil} className="perfil-img" />
      <div className="text">
        <h1>Sobre Mim</h1>
        <p>
          Desenvolvedor FullStack
          {" "}
        </p>
        <br />
        <p>
        Minha relação com a tecnologia começou nos anos 90 quando descobri
        as inúmeras possibilidades da computação, gosto da área porque é
        sempre desafiadora e nunca paramos de aprender coisas novas, meu
        objetivo é aplicar os meus conhecimentos e as minhas habilidades,
        adquiridas durante as diversas áreas em que atuei, na área de tecnologia.
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
