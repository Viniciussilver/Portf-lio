import React, { useState } from "react"

import Foto from "./assets/Foto2.jpg"
import * as C from "./styles/styles"
import NavBar from "./components/NavBar/index"
import Carousel from "./components/CarouselProjects/index"
import ShowTecnologias from "./components/Tecnologias"
import ContactForm from "./components/Form"
import HeaderTelaResponsiva from "./components/NavBar-Responsivo"

function App() {
  return (
    <C.Container>
      <HeaderTelaResponsiva 
      scrollInicio="#home"
      scrollTecnol="#habilidades"
      scrollProjetos="#projetos"
      scrollForm="#formulario"
      />
      <span id="home"></span>
      <NavBar
        scrollInicio="#home"
        scrollTecnol="#habilidades"
        scrollProjetos="#projetos"
        scrollForm="#formulario"
      />

      <C.AboutMe>
        <C.Info>
          <C.Typography
            primary="#a2a2ad"
            fontWeight="500"
            size="18px"
            lineHeight="31px"
          >
            Olá eu sou
          </C.Typography>
          <C.Typography
          align="center"
            primary="#a2a2ad"
            lineHeight="42px"
            width="350px"
            fontWeight="900"
            size="40px"
          >
            Vinícius Simões da Silveira
          </C.Typography>
          <div className="box-textAnimation"><C.TextAnimation>Desenvolvedor Front-End</C.TextAnimation></div>

          <C.Text width="130px" size="18px">
            Bem-vindo ao meu portfólio, me chamo Vinícius, tenho 18 anos e sou
            programador Front-End. Iniciei minha jornada na programação em junho
            de 2022 por meio do curso DevClub, uma formação Full-Stack. No
            momento estou focando no desenvolvimento Front-end, estudando React,
            Context Api, aprimorando minhas habilidades com javaScript e
            iniciando os estudos em typeScript.
          </C.Text>
          <C.Div>
            <C.ButtonCv>
              Donlowad CV <C.Download />
            </C.ButtonCv>
            <C.LinkContact href="#formulario">
              Contate-me <C.Arrow />
            </C.LinkContact>
          </C.Div>
          <C.SocialNetwork>
            <a target="_blank" href="https://github.com/Viniciussilver">
              <C.IconGit />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/vin%C3%ADcius-sim%C3%B5es-da-silveira/"
            >
              <C.IconLinkedin />
            </a>
            <a target="_blank" href="mailto:viniciusimoes49@gmail.com">
              {" "}
              <C.IconEmail />
            </a>
          </C.SocialNetwork>
        </C.Info>
        <C.BordaImg>
          <img className="foto" src={Foto} alt="Foto minha" />
        </C.BordaImg>
      </C.AboutMe>
      <span id="habilidades"></span>
      <ShowTecnologias />
      <span id="projetos"></span>
      <Carousel />
      <sapn id="formulario"></sapn>
      <ContactForm />
      <C.Footer>
        <C.P>Portfólio - Vinícius Silveira</C.P>
        <C.LinksFooter>
          <a
            className="icon"
            target="_blank"
            href="https://github.com/Viniciussilver"
          >
            <C.IconGit />
          </a>
          <a
            className="icon"
            target="_blank"
            href="https://www.linkedin.com/in/vin%C3%ADcius-sim%C3%B5es-da-silveira/"
          >
            <C.IconLinkedin />
          </a>
          <a
            className="icon"
            target="_blank"
            href="mailto:viniciusimoes49@gmail.com"
          >
            {" "}
            <C.IconEmail />
          </a>
        </C.LinksFooter>
      </C.Footer>
    </C.Container>
  )
}

export default App
