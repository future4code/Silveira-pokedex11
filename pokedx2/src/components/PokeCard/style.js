import styled from 'styled-components'

export const Container = styled.div`
    
    width: 250px;
    height: 400px;
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
export const Img = styled.img`
  width: 200px;
  flex-grow: 1;
`
export const ContainerButton = styled.div`
  
  
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;


`
export const Button = styled.button`
  height: 100%;
  width: 100%;
   /* margin-top: -1.5vw; */
  /* padding-bottom: 65px; */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color:white;
  background-color:transparent;
  
  border: none;
  cursor: pointer;

  &:hover{
        transition: all 800ms;
        transform: scale(1.05);
        position:relative;
    }
`

export const PokemonNameCard = styled.button`
  background-color: #52af59;
    color: white;
    font-size: 1rem;
    text-shadow: 2px 2px 2px black;
    height: 30px;
    border-radius: 19px;
    padding-left: 50px;
    padding-right: 50px;
    align-self: flex-start;
    margin-left: 0px;
    width: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 2px 2px 2px #296b37;
`