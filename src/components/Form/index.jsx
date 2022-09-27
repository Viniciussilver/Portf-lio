import React from "react"
import { Typography } from "../../styles/styles"

import * as C from "./style"

const ContactForm = () => {
  return (
    <C.Container>
      <C.BoxTitle>
        <Typography
          align="center"
          size="14.5px"
          fontWeight="600"
          primary="#a2a2ad"
        >
          Entre em contato
        </Typography>
        <Typography primary="#fff" size="25px" fontWeight="500">
          Contate-me
        </Typography>
      </C.BoxTitle>

      <C.ContainerItem>
        <C.BoxSocial>
          <C.IconEmail />
          <C.Info>
            <Typography lineHeight="31px" size="20px">
              Meu E-mail
            </Typography>
            <Typography
              lineHeight="15px"
              size="16px"
              fontWeight="300"
              primary="#a2a2ad"
            >
              viniciusimoes49@gmail.com
            </Typography>
          </C.Info>
        </C.BoxSocial>
        
        <C.Form
          action="https://formsubmit.co/viniciusimoes49@gmail.com"
          method="POST"
        >
          <C.Input placeholder="Nome" type="text" name="name" required />
          <C.Input placeholder="Email" type="email" name="email" required />
          <C.TextArea
            name="message"
            placeholder="Digite sua mensagem..."
            required
          ></C.TextArea>
          <C.Button type="submit">Enviar</C.Button>
        </C.Form>
      </C.ContainerItem>
    </C.Container>
  )
}

export default ContactForm
