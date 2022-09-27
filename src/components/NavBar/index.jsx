import React, { useState } from "react"

import * as C from "./style"

const NavBar = ({ scrollForm, scrollProjetos, scrollTecnol, scrollInicio }) => {
  const [home, setHome] = useState(true)
  const [tecnol, setTecnol] = useState(false)
  const [project, setProject] = useState(false)
  const [contact, setContact] = useState(false)

  const resetBackground = (number) => {
    if (number === 1) {
      setHome(true)
      setContact(false)
      setProject(false)
      setTecnol(false)
      return
    }
    if (number === 2) {
      setHome(false)
      setContact(false)
      setProject(false)
      setTecnol(true)
      return
    }
    if (number === 3) {
      setHome(false)
      setContact(false)
      setProject(true)
      setTecnol(false)
      return
    }
    if (number === 4) {
      setHome(false)
      setContact(true)
      setProject(false)
      setTecnol(false)
    }
  }

  return (
    <C.Container>
      <C.Link1
        background={home}
        onClick={() => resetBackground(1)}
        href={scrollInicio}
      >
        <C.IconHome />
      </C.Link1>
      <C.Link2
        background={tecnol}
        onClick={() => resetBackground(2)}
        href={scrollTecnol}
      >
        {" "}
        <C.IconTecnologias />
      </C.Link2>
      <C.Link3
        background={project}
        onClick={() => resetBackground(3)}
        href={scrollProjetos}
      >
        <C.IconProjects />
      </C.Link3>
      <C.Link4
        background={contact}
        onClick={() => resetBackground(4)}
        href={scrollForm}
      >
        <C.IconContact />
      </C.Link4>
    </C.Container>
  )
}

export default NavBar
