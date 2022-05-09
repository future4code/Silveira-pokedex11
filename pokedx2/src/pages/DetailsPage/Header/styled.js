import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #c52018;
  height: 6.5vw;

  a:hover {
    cursor: pointer;
    transition: all 800ms;
    transform: scale(1.1);
  }
`;

export const Title = styled.p`
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin: auto;
`;

export const Buttons = styled.div`
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
`;

export const NomePokemon = styled.div`
  color: white;
  font-size: 30px;
  font-weight: bold;
`;


