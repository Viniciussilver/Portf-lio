import React from 'react'
import { Typography } from '../../styles/styles'

import * as C from './style'

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
          <C.Info>
            <C.IconEmail />
            <div className="informacoes-contato">
              <Typography lineHeight="34px" size="19px">
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
            </div>
          </C.Info>
          <C.Info>
            <C.IconWhatsapp />
            <div className="informacoes-contato">
              <Typography lineHeight="34px" size="19px">
                Meu número
              </Typography>
              <Typography
                lineHeight="15px"
                size="16px"
                fontWeight="300"
                primary="#a2a2ad"
              >
                (51)980193821
              </Typography>
            </div>
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
