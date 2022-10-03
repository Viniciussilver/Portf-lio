import React from "react"
import Aos from "aos"
import "aos/dist/aos.css"

import { Typography } from "../../styles/styles"

import * as C from "./style"
import { useEffect } from "react"

const ShowTecnologias = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  },[])


  return (
    <C.Container 
   
    >
      <C.BoxTitle>
        <Typography
          align="center"
          size="15px"
          fontWeight="600"
          primary="#a2a2ad"
        >
          Tecnologias
        </Typography>
        <Typography primary="#fff" size="25px" fontWeight="500">
          Habilidades
        </Typography>
      </C.BoxTitle>
      <C.ContainerImg >
        <div data-aos="fade-up" className="positionDiv1">
          <C.BoxSkills>
            <C.IconHtml />
            <C.P>HTML</C.P>
          </C.BoxSkills>

          <C.BoxSkills>
            <C.IconCss />
            <C.P>CSS</C.P>
          </C.BoxSkills>

          <C.BoxSkills>
            <C.IconJs />
            <C.P>JAVASCRIPT</C.P>
          </C.BoxSkills>
        </div>
        <div data-aos="fade-up"  className="positionDiv2">
          <C.BoxSkills>
            <C.IconReact />
            <C.P>REACT</C.P>
          </C.BoxSkills>

          <C.BoxSkills>
            <C.IconNode />
            <C.P>NODE</C.P>
          </C.BoxSkills>

          <C.BoxSkills>
            <C.IconGit />
            <C.P>GIT</C.P>
          </C.BoxSkills>
        </div>
        <div data-aos="fade-up">
          <C.Services>
            <C.IconPC />
            <C.P>CRIAÇÃO DE SITES</C.P>
          </C.Services>
          <C.Services>
            <C.IconPhone />
            <C.P>SITES RESPONSIVOS</C.P>
          </C.Services>
        </div>
      </C.ContainerImg>

      {/* <C.ContainerServices> */}

      {/* </C.ContainerServices> */}
    </C.Container>
  )
}

export default ShowTecnologias
