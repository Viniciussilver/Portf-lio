import styled from "styled-components"

import { GrReactjs } from "react-icons/gr"
import { FaHtml5 } from "react-icons/fa"
import { TiCss3 } from "react-icons/ti"
import { SiJavascript } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"
import { FaGitAlt } from "react-icons/fa"
import { RiComputerLine } from "react-icons/ri"
import { BsPhone } from "react-icons/bs"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;

  .positionDiv1 {
    position: relative;
    top: 44px;
  }
  .positionDiv2 {
    position: relative;
    top: 23px;
  }
`
export const BoxTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

export const ContainerImg = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;

  div {
    display: flex;
    flex-wrap: wrap;
    margin: 12px;

    @media screen and (max-width: 840px){
        flex-direction:column;
        align-items: center;
    }
  }
`

export const BoxSkills = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 235px;
  height: 115px;
  border-radius: 3px;
  transition: 0.4s;

  background-color: #2f363e;

  &:hover {
    transform: scale(1.1);
    background-color: black;
  }
`

export const Services = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 300px;
  height: 115px;
  background-color: #2f363e;
  border-radius: 3px;

  transition: 0.4s;


&:hover {
  transform: scale(1.1);
  background-color: black;
}
`

export const IconPC = styled(RiComputerLine)`
  width: 40px;
  height: 40px;
  color: #ececec;
`
export const IconPhone = styled(BsPhone)`
  width: 40px;
  height: 40px;
  color: #ececec;
`

export const P = styled.p`
  color: #cecece;
  letter-spacing: 0.4px;
  font-size: 18px;
  font-family: Georgia, "Times New Roman", Times, serif;
`

export const Img = styled.img`
  width: 140px;
`

export const IconHtml = styled(FaHtml5)`
  width: 53px;
  height: 53px;
  color: #d84924;
`

export const IconReact = styled(GrReactjs)`
  width: 53px;
  height: 53px;
  color: #01febc;
`

export const IconNode = styled(FaNodeJs)`
  width: 53px;
  height: 53px;
  color: green;
`

export const IconJs = styled(SiJavascript)`
  width: 53px;
  height: 53px;
  color: yellow;
`

export const IconCss = styled(TiCss3)`
  width: 53px;
  height: 53px;
  color: #006bc0;
`

export const IconGit = styled(FaGitAlt)`
  width: 53px;
  height: 53px;
  color: #e44c30;
`
