import React from "react";
import { Container, Title, IrParaPokedex } from "./styled";
import Pokedex from "../../imgs/Pokedex.png";
import IrPokedex from "../../imgs/IrPokedex.png";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../../routes/coordinator";

const Header = () => {
  const navigate = useNavigate();
  
  return (
    <Container>
        <IrParaPokedex onClick={() => goToPage(navigate, "/pokedex")}>
          <img src={IrPokedex} />
        </IrParaPokedex>
      <Title>
        <img src={Pokedex} />
      </Title>
    </Container>
  );
};

export default Header;
