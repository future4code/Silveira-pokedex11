// esse arquivo estao os codigos de css que serao usados

import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
  }
`
export const MainContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const InfoContainer = styled.div ` 
  display: flex;

`
export const ImgContainer = styled.div`
  display: flex;
  
`
export const H1 = styled.h1 `  `
export const HomePageContainer = styled.div ` display: flex; `
export const SelectCategory = styled.div ` display: flex; `
export const CardsContainer = styled.div ` display: flex; `
export const Header = styled.header `
  display: flex;
  align-items:center;
`
export const Button = styled.button `
  display: flex;
  align-items: center;
  
`

export const Img = styled.img `
  width: 300px;
  height: 300px;
`
export const Stats = styled.div ` display: flex; `
export const Type = styled.div ` display: flex; `
export const Moves = styled.div ` display: flex; `