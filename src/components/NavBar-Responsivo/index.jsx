import React, { useState } from "react"

import * as C from './style'

const HeaderTelaResponsiva = ({ scrollInicio, scrollTecnol, scrollProjetos, scrollForm}) => {
    const [open, setOpen] = useState(false)

    const openMenu = () => {
        setOpen(!open)
    }
    return (
        <C.Container>
            <C.Menu open={open} onClick={() => openMenu()}/>
            <C.ContainerItem open={open}>
                <C.Links onClick={() => setOpen(false)} href={scrollInicio}>Sobre</C.Links>
                <C.Links onClick={() => setOpen(false)} href={scrollTecnol}>Habilidades</C.Links>
                <C.Links onClick={() => setOpen(false)}  href={scrollProjetos}>Projetos</C.Links>
                <C.Links onClick={() => setOpen(false)} href={scrollForm}>Contato</C.Links>

            </C.ContainerItem>
        </C.Container>
    )
}

export default HeaderTelaResponsiva