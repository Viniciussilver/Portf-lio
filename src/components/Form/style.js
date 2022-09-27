import styled from "styled-components"

import { AiOutlineMail } from "react-icons/ai"

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin-left: 50px;

  @media screen and (max-width:880px){
    margin-left: 0;
  }
  @media screen and (max-width:555px){
    width: 360px;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 100px 0;
`

export const Input = styled.input`
  font-weight: 400;
  font-size: 15px;
  color: #ececec;
  margin-bottom: 12px;
  border-radius: 6px;
  padding: 20px;
  width: 100%;
  border: 2px solid #2e666b;
  outline: none;
  background: transparent;
`

export const Button = styled.button`
  font-weight: 500;
  font-size: 16px;
  color: #2e666b;
  background: transparent;
  border: 2px solid #2e666b;
  border-radius: 4px;
  width: 6.5rem;
  height: 37px;
  margin-top: 15px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #ececec;
    color: #2e666b;
  }

  &:active {
    opacity: 0.7;
  }
`

export const BoxTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 55px;
`

export const ContainerItem = styled.div`
  display: flex;
  gap: 15px;

  @media screen and (max-width:880px){
    flex-direction: column-reverse;
    gap: 30px;
  }
 
`

export const TextArea = styled.textarea`
  width: 100%;
  color: #ececec;

  font-weight: 400;
  font-size: 15px;
  padding: 17px;
  border-radius: 6px;

  height: 145px;
  border: 2px solid #2e666b;
  outline: none;
  background: transparent;
`

export const IconEmail = styled(AiOutlineMail)`
  width: 36px;
  height: 36px;
  color: #01febc;
  margin-top: 6px;
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
/* 
  @media screen and (max-width:880px){
    display: none;
  } */
`

export const BoxSocial = styled.div`
  display: flex;
  gap: 10px;
`
