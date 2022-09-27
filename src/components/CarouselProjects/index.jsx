import React from "react"

import { Typography } from "../../styles/styles"
import Carousel from "react-elastic-carousel"
import { TbExternalLink } from "react-icons/tb"
import { BsGithub } from "react-icons/bs"

import * as C from "./style"

import Todo from "../../assets/Todo-list.png"
import Calculadora from "../../assets/calculadora.png"
import Lp from "../../assets/LP.png"

const InfoProjects = [
  {
    id: 1,
    name: "Lista de Tarefas",
    image: Todo,
    urlCode: "https://github.com/Viniciussilver/Todo_list_2.0",
    urlSite: "https://todo-list-2-0.vercel.app/",
  },
  {
    id: 2,
    name: "Landing Page",
    image: Lp,
    urlCode: "https://github.com/Viniciussilver/LP_nike",
    urlSite: "https://viniciussilver.github.io/LP_nike/",
  },
  {
    id: 3,
    name: "Calculadora",
    image: Calculadora,
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
            <div className="figCaption">
            <C.Image src={item.image} />
            <p className="title">{item.name}</p>
            </div>
           
          {/* <div className="description"> */}
            {/* <Typography primary="#a2a2ad">{item.description}</Typography> */}

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
            
          </C.ContainerItens>
        ))}
      </Carousel>
    </C.Container>
  )
}

export default CarouselProjects
