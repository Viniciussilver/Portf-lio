import styled from 'styled-components'

import { MdArrowBackIosNew } from 'react-icons/md'

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
    opacity: 0.7;
  }

  .figCaption {
    width: 100%;
    height: 55%;

    @media screen and (max-width: 615px) {
      height: 45%;
    }
  }

  .containerRow-scroll {
    width: 100%;
    height: max-content;
    display: flex;
    gap: 14px;
    overflow: auto;
    white-space: nowrap;
    scroll-behavior: smooth;
  }
  .containerRow-scroll::-webkit-scrollbar {
    display: none;
  }

  .box-Row {
    width: 88%;
    display: flex;
    align-items: center;
    gap: 10px;

    @media screen and (max-width: 615px) {
      width: 93%;
    }
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
  margin: 35px 10px;
  width: 390px;
  height: 400px;
  padding: 22px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: none;

  border-radius: 34px;
  transition: 0.2s;
  background-color: #201f37;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.2);
  /* 201f37 */

  .title {
    padding-top: 15px;
    padding-left: 23px;
    font-weight: 300;
    color: #ececec;
    font-size: 20.3px;

    @media screen and (max-width: 615px) {
      padding-top: 8px;
      padding-left: 6px;
      font-weight: 400;
      color: #ececec;
      font-size: 14px;
      margin: 35px 0px;
    }
  }

  @media screen and (max-width: 615px) {
    width: 190px;
    height: 230px;
    padding: 10px;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 24px;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.3);

  transition: 0.5s;
`

export const BoxLink = styled.div`
  display: flex;
  gap: 40px;

  @media screen and (max-width: 615px) {
    gap: 10px;
    padding-bottom: 9px;
  }
`

export const IconArrow = styled(MdArrowBackIosNew)`
  color: #fff;
  width: 50px;
  height: 50px;
  transform: rotate(${props => props.rotate});
  cursor: pointer;

  &:active {
    opacity: 0.7;
  }
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
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  @media screen and (max-width: 615px) {
    padding: ${({ comingSoon }) => (comingSoon ? '7px 10px' : '7px 6px')};
    font-weight: 300;
    font-size: 12px;
    gap: 5px;
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

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  @media screen and (max-width: 615px) {
    padding: 7px;
    font-weight: 300;
    font-size: 12px;
    gap: 8px;
  }
`
