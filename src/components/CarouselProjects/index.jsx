import React from "react"

import { Typography } from "../../styles/styles"
import Carousel from "react-elastic-carousel"
import { TbExternalLink } from "react-icons/tb"
import { BsGithub } from "react-icons/Bs"

import * as C from "./style"

import Todo from "../../assets/Todo-list.png"
import Calculadora from "../../assets/calculadora.png"
import Lp from "../../assets/LP.png"
import { useState } from "react"

const InfoProjects = [
  {
    id: 1,
    name: "Lista de Tarefas",
    description: "Projeto feito em react",
    image: Todo,
    tecnologias: "Tecnologias usadas no Projeto: HTML5, CSS3, React, axios.",
    urlCode: "https://github.com/Viniciussilver/Todo_list_2.0",
    urlSite: "https://todo-list-2-0.vercel.app/",
  },
  {
    id: 2,
    name: "Landing Page",
    description: "Pagina nike, site responsivo, tecnologias HTML5 CSS5",
    image: Lp,
    tecnologias: "Tecnologias usadas no Projeto: HTML5, CSS3, React, axios.",
    urlCode: "https://github.com/Viniciussilver/LP_nike",
    urlSite: "https://viniciussilver.github.io/LP_nike/",
  },
  {
    id: 3,
    name: "Calculadora",
    description: "Calculadora, tecnologias javaScript, CSS e HTML",
    image: Calculadora,
    tecnologias: "Tecnologias usadas no Projeto: HTML5, CSS3, React, axios.",
    urlCode: "https://github.com/Viniciussilver/Calculator-JS",
    urlSite: "https://viniciussilver.github.io/Calculator-JS/calc/",
  },
]

const CarouselProjects = () => {
 

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 900, itemsToShow: 2 },
    { width: 1200, itemsToShow: 2 },

  ]

  return (
    <C.Container>
      <C.BoxTitle>
        <Typography
          align="center"
          size="15px"
          fontWeight="600"
          primary="#a2a2ad"
        >
          Portfolio
        </Typography>
        <Typography primary="#fff" size="25px" fontWeight="500">Meus Projetos</Typography>

      </C.BoxTitle>

      <Carousel  breakPoints={breakPoints} style={{ width: "87%" }}>
        {InfoProjects.map((item) => (
          <C.ContainerItens key={item.id}>
            <C.Image src={item.image} />
          <div className="description">
            <p className="title">{item.name}</p>
            {/* <Typography primary="#a2a2ad">{item.description}</Typography> */}
            <p className="texto-tecnologias" primary="#2f585e">{item.tecnologias}</p >

            <C.BoxLink>
              <C.LinkSite target="_blank" href={item.urlSite}>
                <TbExternalLink />
                Visite
              </C.LinkSite>
              <C.LinkGit target="_blank" href={item.urlCode}>
                <BsGithub />
                Code
              </C.LinkGit>
            </C.BoxLink>
            </div>
          </C.ContainerItens>
        ))}
      </Carousel>
    </C.Container>
  )
}

export default CarouselProjects
