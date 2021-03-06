import styled from 'styled-components'

export const Container = styled.div`
  border: dotted 1px black;
  background-color: #c52018;
  height: 8vw;
  display: flex;
  align-items: center;
`
export const Title = styled.p`
  font-weight: bold;
  margin: auto 20vw;
  `
export const Button = styled.button`
  position: absolute;
  margin: 15px;
  padding: 1px 3px;
`

export const IrParaPokedex = styled.a`
    width: auto;
    margin: auto 2vw;
    cursor: pointer;

    &:hover {
    img{
        transition: all 600ms;
        transform: scale(1.1);
    }
}
    &:active {
    position:relative;
    top:1px;
}
`
