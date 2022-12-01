import React from 'react'
import Carousel from 'react-elastic-carousel'
import { Typography } from '../../styles/styles'
import { TbExternalLink } from 'react-icons/tb'
import { BsGithub } from 'react-icons/bs'

import * as C from './style'

import Todo from '../../assets/Todo-list.png'
import Calculadora from '../../assets/calculadora.png'
import Lp from '../../assets/LP.png'
import Cep from '../../assets/cep.png'
import Codeburger from '../../assets/codeburger.png'
import Conversor from '../../assets/conversor.png'
import Dark from '../../assets/darkmode.png'
import TelaInsta from '../../assets/insta.png'
import Jokenpo from '../../assets/jokenpo.png'
import ApiGit from '../../assets/api.png'
import Quiz from '../../assets/quiz1.png'
import Netflix from '../../assets/netflix.png'
import ControleFinanceiro from '../../assets/Cf.png'

const InfoProjects = [
  {
    name: 'Clone da página do Netflix',
    image: Netflix,
    urlCode: 'https://github.com/Viniciussilver/clone-netflix',
    urlSite: 'https://clone-netflix-nine.vercel.app/',
  },
  {
    name: 'Lista de Tarefas',
    image: Todo,
    urlCode: 'https://github.com/Viniciussilver/Todo_list_2.0',
    urlSite: 'https://todo-list-2-0.vercel.app/',
  },
  {
    name: 'Landing Page ',
    image: Lp,
    urlCode: 'https://github.com/Viniciussilver/LP_nike',
    urlSite: 'https://viniciussilver.github.io/LP_nike/',
  },
  {
    name: 'Projeto api github',
    image: ApiGit,
    urlCode: 'https://github.com/Viniciussilver/projeto-api-github',
    urlSite: 'https://projeto-api-github-hyrc.vercel.app/',
  },
  {
    name: 'Controle Financeiro',
    image: ControleFinanceiro,
    urlCode: 'https://github.com/Viniciussilver/App-Controle-Financeiro',
    urlSite: 'https://app-controle-financeiro.vercel.app/',
  },
  {
    name: 'Quiz sobre Programação',
    image: Quiz,
    urlCode: 'https://github.com/Viniciussilver/Quiz_parte1',
    urlSite: 'https://quiz-sobre-programacao.vercel.app/',
  },
  {
    name: 'Calculadora ',
    image: Calculadora,
    urlCode: 'https://github.com/Viniciussilver/Calculator-JS',
    urlSite: 'https://viniciussilver.github.io/Calculator-JS/calc/',
  },
  {
    name: 'Buscador de Cep',
    image: Cep,
    urlCode: 'https://github.com/Viniciussilver/zip-code-finder',
    urlSite: 'https://zip-code-finder-crpk.vercel.app/',
  },
  {
    name: 'Conversor de Moeda',
    image: Conversor,
    urlCode: 'https://github.com/Viniciussilver/Currency-converter',
    urlSite: 'https://viniciussilver.github.io/Currency-converter/Project/',
  },
  {
    name: 'Jokenpo ',
    image: Jokenpo,
    urlCode: 'https://github.com/Viniciussilver/Jokenpo',
    urlSite: 'https://jokenpo-murex.vercel.app/',
  },
  {
    name: 'Light e Dark mode',
    image: Dark,
    urlCode: 'https://github.com/Viniciussilver/Dark_Mode',
    urlSite: 'https://viniciussilver.github.io/Dark_Mode/',
  },
  {
    name: 'Tela de login do Instagram',
    image: TelaInsta,
    urlCode: 'https://github.com/Viniciussilver/instagram-login-screen',
    urlSite: 'https://viniciussilver.github.io/instagram-login-screen/project/',
  },
  {
    name: 'Em desenvolvimento :)',
    image: Codeburger,
    urlCode: 'https://github.com/Viniciussilver/FrontEnd_codeburger',
    urlSite: null,
  },
]

const CarouselProjects = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 600, itemsToShow: 1 },
    { width: 900, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ]

  return (
    <C.Container>
      <C.BoxTitle>
        <Typography
          align='center'
          size='15px'
          fontWeight='600'
          primary='#a2a2ad'
        >
          Portfolio
        </Typography>
        <Typography primary='#fff' size='25px' fontWeight='500'>
          Meus Projetos
        </Typography>
      </C.BoxTitle>

      <Carousel breakPoints={breakPoints} style={{ width: '87%' }}>
        {InfoProjects.map(item => (
          <C.ContainerItems key={item.id}>
            <div className='description'>
              <C.Image src={item.image} />
              <p className='title'>{item.name}</p>
            </div>

            <C.BoxLink>
              <C.LinkSite target='_blank' href={item.urlSite}>
                <TbExternalLink />
                Visite
              </C.LinkSite>
              <C.LinkGit target='_blank' href={item.urlCode}>
                <BsGithub />
                Code
              </C.LinkGit>
            </C.BoxLink>
          </C.ContainerItems>
        ))}
      </Carousel>
    </C.Container>
  )
}

export default CarouselProjects
