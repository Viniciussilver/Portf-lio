import React, { useState } from "react"

import * as C from "./style"

const NavBar = ({ scrollForm, scrollProjetos, scrollTecnol, scrollInicio }) => {
  
  const [ resetBackground, setResetBackground] = useState(0)

 

  return (
    <C.Container>
      <abbr title="Sobre"><C.Link1
        isActive={resetBackground === 0}
        onClick={() => setResetBackground(0)}
        href={scrollInicio}
      >
        <C.IconHome />
      </C.Link1>
      </abbr>
      <abbr title="Habilidades">
      <C.Link2
              isActive={resetBackground === 1}

        onClick={() => setResetBackground(1)}
        href={scrollTecnol}
      >
        {" "}
        <C.IconTecnologias />
      </C.Link2>
      </abbr>
      <abbr title="Projetos">
      <C.Link3
              isActive={resetBackground === 2}

        onClick={() => setResetBackground(2)}
        href={scrollProjetos}
      >
        <C.IconProjects />
      </C.Link3>
      </abbr>
      <abbr title="Contato">
      <C.Link4
              isActive={resetBackground === 3}

        
        onClick={() => setResetBackground(3)}
        href={scrollForm}
      >
        <C.IconContact />
      </C.Link4>
      </abbr>
    </C.Container>
  )
}

export default NavBar
