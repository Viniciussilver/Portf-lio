import styled from 'styled-components'

import { HiMenu } from 'react-icons/hi'

export const Menu = styled(HiMenu)`
  height: 40px;
  width: 40px;
  color: #fff;
  cursor: pointer;
  transition: 0.1s;
  transform: ${props => (props.open ? 'rotate(90deg)' : 'none')};
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  background-color: #201f37;
  position: fixed;
  top: 0;
  z-index: 2;
  box-shadow: 0.5px 0.5px 10px 0.5px #000;

  @media screen and (min-width: 1200px) {
    display: none;
  }
`

export const ContainerItem = styled.div`
  display: ${props => (props.open ? 'flex' : 'none')};
  flex-direction: column;
  gap: 22px;
  margin-top: 23px;
  margin-left: 5px;
`

export const Links = styled.a`
  color: #ececec;
  font-weight: 400;
  font-size: 17.5px;
  text-decoration: none;
  cursor: pointer;

  &:active {
    color: black;
  }
  &:hover {
    opacity: 0.8;
  }
`
