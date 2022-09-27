import styled from "styled-components"

export const Container = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;


  .rec.rec-arrow {
    background: #201f37;
   
    color: #fff;
    border: none;
    filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.25));

  }
  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }
  

  .rec.rec-arrow:active {
    opacity:0.7;
  }
`

export const BoxTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`

export const ContainerItens = styled.div`
margin: 35px 12px;
width: 380px;
height: 440px;
padding: 18px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
 
  border-radius: 32px;
  transition: 0.6s;
  background-color: #201f37;

  /* &:hover {
    transform: scale(1.1);
  } */

  .description {
    display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;
  }

  @media screen and (max-width: 615px){
    width:200px;
    height: 260px;
    padding: 10px;
  }
`

export const Image = styled.img`
 width: 100%;
 height: 50%;
  border-radius: 23px;
  
  transition: 0.5s;


`

export const BoxLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export const LinkSite = styled.a`
  font-weight: 500;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 11px;
  color: #cecece;
  text-decoration: none;
  padding: 15px 22px;
  background-color: #000;
  border-radius: 10px;
  color: #fff;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

  @media screen and (max-width: 615px){
    padding: 7px;
    font-weight: 400;
  font-size: 13px;
  }
`

export const LinkGit = styled.a`
  font-weight: 500;
  font-size: 19px;
  display: flex;
  align-items: center;
  gap: 9px;
  color: #cecece;
  text-decoration: none;
  padding: 15px 22px;
  background-color: #000;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

  @media screen and (max-width: 615px){
    padding: 7px;
    font-weight: 400;
  font-size: 13px;
  }
`
