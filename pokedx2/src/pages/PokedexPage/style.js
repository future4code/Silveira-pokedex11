import styled from "styled-components";

export const PokedexPageContainer = styled.div `
    height: auto;
    min-height: 100vh;
    background-color: #f6e652;
`

export const HeaderContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #c52018;

    a:hover {
        cursor: pointer;
        transition: all 800ms;
        transform: scale(1.1);
    }
`

export const NumContainer = styled.div `
    display: flex;
    width: 80px;
    height: 3vw;
    align-items: center;
    justify-content: space-evenly;
    background-color: #696969;
    border-radius: 25px;

    p {
        color: whitesmoke;
    }

    img {
        width: 30%;
    }
`

export const MainContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
`

export const PokemonContainer = styled.div `
    height: 100%;
    display: flex;
    flex-direction: column;
    ;
    align-self: flex-start;
    margin-top: 7%;
    
    img {
        max-height: 320px;
    }

    div {
        display: flex;
        flex-direction: column;
    }
`

export const ListContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 100%;
    padding-top: 10px;
    align-self: flex-start;
    margin-top: 1.5%;
`

export const ListPokedexContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 500px;
    background-color: aliceblue;
    border-radius: 32px;
    padding: 0px 5px;
    margin-right: 1%;
    margin-bottom: 7px;
    text-transform: capitalize;
    font-weight: bold;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    :hover {
        transition: all 800ms;
        box-shadow: -15px 5px 5px 3px #c52018;
        transform: scale(1.03)
    }
`

export const DetailContainerList = styled.div `
    background-color: blue;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    justify-content: space-between;
    img:nth-of-type(1) {
        margin-bottom: 10px;
    }
    img:nth-of-type(2) {
        width: 40px;
    }
`

export const CartPokedex = styled.div `
    display: flex;
    img:hover {
        transition: all 800ms;
        transform: scale(1.05);
    }
`

export const Buttons = styled.a `
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
    
    &:hover{
        transition: all 800ms;
        transform: scale(1.05);
        position: relative;
        box-shadow: none;
    }
`

export const ImagePoke = styled.img `
    width: 50vw;
`