import styled from "styled-components"
import { VscHome } from "react-icons/vsc"
import {
  AiOutlineComment,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai"
import { GoProject } from "react-icons/go"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 69px;
  height: 300px;
  border-radius: 32px;
  position: fixed;
  top: 25%;
  left: 13px;

  @media screen and (max-width: 1200px){
    
    display: none;
  }
  /* background-color: rgba(0, 0, 0, 0.7); */
`

export const Link1 = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 51px;
  width: 51px;
  border-radius: 14px;
  transition: 0.5s;
  background-color: ${(props) => (props.background ? "#201f37" : "none")};

  &:hover {
    background-color: #201f37;
  }
`

export const Link2 = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 51px;
  width: 51px;
  border-radius: 14px;
  transition: 0.5s;
  background-color: ${(props) => (props.background ? "#201f37" : "none")};

  &:hover {
    background-color: #201f37;
  }
`

export const Link3 = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 51px;
  width: 51px;
  border-radius: 14px;
  transition: 0.5s;
  background-color: ${(props) => (props.background ? "#201f37" : "none")};

  &:hover {
    background-color: #201f37;
  }
`

export const Link4 = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 51px;
  width: 51px;
  border-radius: 14px;
  transition: 0.5s;
  background-color: ${(props) => (props.background ? "#201f37" : "none")};

  &:hover {
    background-color: #201f37;
  }
`

export const IconHome = styled(VscHome)`
  width: 21px;
  height: 21px;
  color: #01febc;
`

export const IconProjects = styled(GoProject)`
  width: 21px;
  height: 21px;
  color: #01febc;
`

export const IconContact = styled(AiOutlineComment)`
  width: 21px;
  height: 21px;
  color: #01febc;
`

export const IconTecnologias = styled(AiOutlineFundProjectionScreen)`
  width: 21px;
  height: 21px;
  color: #01febc;
`
