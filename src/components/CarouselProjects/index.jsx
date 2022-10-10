import React from "react"

import { Typography } from "../../styles/styles"
import Carousel from "react-elastic-carousel"
import { TbExternalLink } from "react-icons/tb"
import { BsGithub } from "react-icons/bs"

import * as C from "./style"

import Todo from "../../assets/Todo-list.png"
import Calculadora from "../../assets/calculadora.png"
import Lp from "../../assets/LP.png"
import Cep from "../../assets/cep.png"
import Codeburger from "../../assets/codeburger.png"
import Conversor from "../../assets/conversor.png"
import Dark from "../../assets/darkmode.png"
import TelaInsta from "../../assets/insta.png"
import Jokenpo from "../../assets/jokenpo.png"
import ApiGit from "../../assets/api.png"
import Quiz from '../../assets/quiz1.png'


const InfoProjects = [
  {
    id: 1,
    name: "Lista de Tarefas - React",
    image: Todo,
    urlCode: "https://github.com/Viniciussilver/Todo_list_2.0",
    urlSite: "https://todo-list-2-0.vercel.app/",
  },
  {
    id: 2,
    name: "Landing Page - HTML CSS",
    image: Lp,
    urlCode: "https://github.com/Viniciussilver/LP_nike",
    urlSite: "https://viniciussilver.github.io/LP_nike/",
  },
  {
    id: 10,
    name: "Projeto api github - React",
    image: ApiGit,
    urlCode: "https://github.com/Viniciussilver/projeto-api-github",
    urlSite: "https://projeto-api-github-hyrc.vercel.app/",
  },
  {
    id: 11,
    name: "Quiz sobre Programação - React",
    image: Quiz,
    urlCode: "https://github.com/Viniciussilver/Quiz_parte1",
    urlSite: "https://quiz-sobre-programacao.vercel.app/",
  },
  {
    id: 3,
    name: "Calculadora - javaScript",
    image: Calculadora,
    urlCode: "https://github.com/Viniciussilver/Calculator-JS",
    urlSite: "https://viniciussilver.github.io/Calculator-JS/calc/",
  },
  {
  id: 4,
  name: "Buscador de Cep - React Axios",
  image: Cep,
  urlCode: "https://github.com/Viniciussilver/zip-code-finder",
  urlSite: "https://zip-code-finder-crpk.vercel.app/",
},
{
  id: 5,
  name: "Conversor de Moeda - JavaScript",
  image: Conversor,
  urlCode: "https://github.com/Viniciussilver/Currency-converter",
  urlSite: "https://viniciussilver.github.io/Currency-converter/Project/",
},
{
  id: 6,
  name: "Jokenpo - React",
  image: Jokenpo,
  urlCode: "https://github.com/Viniciussilver/Jokenpo",
  urlSite: "https://jokenpo-murex.vercel.app/",
},
{
  id: 7,
  name: "Modo escuro - HTML CSS",
  image: Dark,
  urlCode: "https://github.com/Viniciussilver/Dark_Mode",
  urlSite: "https://viniciussilver.github.io/Dark_Mode/",
},
{
  id: 8,
  name: "Tela de login - HTML CSS",
  image: TelaInsta,
  urlCode: "https://github.com/Viniciussilver/instagram-login-screen",
  urlSite: "https://viniciussilver.github.io/instagram-login-screen/project/",
},
{
  id: 9,
  name: "Em desenvolvimento :)",
  image: Codeburger,
  urlCode: "https://github.com/Viniciussilver/FrontEnd_codeburger",
  urlSite: null,
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
                {item.urlSite ? "Visite" : "Em breve"}
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
