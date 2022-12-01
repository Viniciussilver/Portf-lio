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

    @media screen and (max-width: 615px) {
      display: none;
    }
  }
  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }

  .rec.rec-arrow:active {
    opacity: 0.7;
  }
`

export const BoxTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`

export const ContainerItems = styled.div`
  margin: 35px 10px;
  width: 390px;
  height: 390px;
  padding: 22px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 34px;
  transition: 0.2s;
  background-color: #201f37;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.2);

  .description {
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media screen and (max-width: 615px) {
      gap: 14px;
    }
  }

  .title {
    padding-left: 23px;
    font-weight: 300;
    color: #ececec;
    font-size: 20.3px;

    @media screen and (max-width: 615px) {
      padding-left: 6px;
      font-weight: 400;
      color: #ececec;
      font-size: 15px;
    }
  }

  @media screen and (max-width: 615px) {
    width: 270px;
    height: 260px;
    padding: 10px;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 200px;

  border-radius: 24px;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.3);

  transition: 0.5s;

  @media screen and (max-width: 615px) {
    width: 100%;
    height: 130px;
  }
`

export const BoxLink = styled.div`
  display: flex;
  justify-content: center;
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
    padding: 10px 16px;
    font-weight: 300;
    font-size: 12.8px;
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
    padding: 10px 16px;
    font-weight: 300;
    font-size: 12.8px;
    gap: 8px;
  }
`
