import styled from 'styled-components'

export const Container = styled.div`
 width: 250px;
    height: 300px;
    background-color: #292929;
    border-radius: 30px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    margin-left: 2vw;
    color: white;
    font-size: 16px;
    box-shadow: 5px 5px 10px 2px #1C3144;
    text-transform: capitalize;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    a{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 210px;
    height: 38px;
    cursor:pointer;
    }
    &:hover{
        transition: all 800ms;
        transform: scale(1.05);
        position:relative;
        box-shadow: 5px 5px 10px 2px #e3293b;
    }
`
export const Img = styled.img`
  width: 100%;
  flex-grow: 1;
`
export const ContainerButton = styled.div`
  display: flex;
`
export const Button = styled.button`
  height: 30px;
  width: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`

export const PokemonNameCard = styled.button`
  color: white;
`