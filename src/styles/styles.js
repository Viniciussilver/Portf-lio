import styled, { createGlobalStyle } from "styled-components"

import { FaLinkedin } from "react-icons/fa"
import { BsGithub } from "react-icons/bs"
import { MdAlternateEmail } from "react-icons/md"
import { FiDownload } from "react-icons/fi"
import { BsArrowRightShort } from "react-icons/bs"

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;

    }

    html {
      scroll-behavior: smooth;
    }
`

export const Container = styled.div`
  background-color: #1a1c1d;
  min-height: 100vh;
  .foto {
    border-radius: 50%;
    width: 355px;
    position: relative;
    top: 2px;
    
  }
  .box-textAnimation {
    width: 275px;
  }
`

export const AboutMe = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: 1080px){
    flex-direction: column-reverse;
    height: 100%;
    padding-top:60px;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1080px){
    align-items: center;
    text-align: center;
  }
`

export const Typography = styled.p`
  font-weight: ${(props) => props.fontWeight || "500"};
  font-size: ${(props) => props.size || "18px"};
  line-height: ${(props) => props.lineHeight || "27px"};
  color: ${(props) => props.primary || "#ececec"};
  text-align: ${(props) => props.align || "none"};
  width: ${(props) => props.width || "auto"};
  padding: ${(props) => props.padding || "0"};
`


export const TextAnimation = styled.p`
  margin-top: 5px;
  letter-spacing: 0.2px;
  font-weight: 400;
  font-size: 22px;
  color: #01febc;

  white-space: nowrap;
        overflow: hidden;
        animation: typewriter 3.5s steps(23) infinite alternate,
          blink 800ms steps(13) infinite normal;
        border-right: 3.4px solid #ececec;
      
      @keyframes typewriter {
        from {
          width: 0%;
        }
        to {
          width: 98%;
        }
      }
      @keyframes blink {
        from {
          border-color: #ececec;
        }
        to {
          border-color: transparent;
        }
}
  
`

export const P = styled.p`
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 18px;
  color: #ececec;
  font-weight: 500;
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;
  padding: 20px;
  height: 120px;
  background-color: #201f37;
  transition: 0.9s;
  .icon {
    &:hover {
      transform: scale(1.1);
    }
  }
`

export const Text = styled.p`
  margin: 10px 0;
  color: #a2a2ad;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  width: 559px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;

  @media screen and (max-width: 620px){
    width: 90%;
  }
`

export const LinksFooter = styled.div`
  display: flex;
  gap: 15px;
`

export const BordaImg = styled.div`
  border-radius: 50%;
  border: 1px solid #ececec;
  margin: 45px 0;
`

export const IconLinkedin = styled(FaLinkedin)`
  width: 30px;
  height: 30px;
  color: #ececec;
  margin-right: 25px;

  &:hover {
    opacity: 0.9;
  }
`

export const IconGit = styled(BsGithub)`
  margin-right: 25px;
  width: 30px;
  height: 30px;
  color: #ececec;

  &:hover {
    opacity: 0.9;
  }
`

export const IconEmail = styled(MdAlternateEmail)`
  width: 31px;
  height: 31px;
  color: #ececec;

  &:hover {
    opacity: 0.9;
  }
`

export const SocialNetwork = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44px;
  position: absolute;
  top: 36%;
  right: 3.5%;

  @media screen and (max-width: 1200px){
    display: none;
  }
`

export const Download = styled(FiDownload)`
  width: 23px;
  height: 23px;
`

export const Arrow = styled(BsArrowRightShort)`
  height: 23px;
  width: 23px;
`

export const Div = styled.div`
  display: flex;
  gap: 14px;
  margin: 20px 0;
`
export const LinkContact = styled.a`
  font-weight: 400;
  font-size: 17px;
  color: #a2a2ad;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #a2a2ad;
  gap: 4px;
  padding: 12px;
  background-color: transparent;
  border-radius: 2px;
  cursor: pointer;
  transition: 0.2s;
  text-decoration: none;

  &:hover {
   
    gap: 7px;
  }

  &:active {
    opacity: 0.6;
  }
`

export const ButtonCv = styled.button`
  font-weight: 400;
  font-size: 17px;
  color: #ececec;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 9.5px;
  background-color: green;
  border-radius: 2px;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.8;
  }
`

// export const Contact = styled.a`

//     display: flex;
//     align-items:center;
//     gap:7px;
//     margin-top: 9px;
//     border: none;
//     border-radius: 6px;
//     color: #01febc;
//     font-weight: 600;
//     font-size: 20px;
//     text-decoration: none;

//     &:hover {
//         color: #ececec;
//     }
// `

// export const Arrow = styled(BiArrowBack)`
//     transform: rotateY(180deg);
//     width: 30px;
//     height: 30px;
//     position: relative;
// `
