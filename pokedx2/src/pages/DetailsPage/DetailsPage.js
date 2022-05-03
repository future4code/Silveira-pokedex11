import React from 'react';
import Header from "./Header/Header"
// colocar os imports de libs
import {useNavigate} from 'react-router-dom';
// import axios from 'axios';

// colocar as importacoes de todos os arquivos de codigos do projeto
// import { goBack } from '../../routes/coordinator';
// import {MainContainer, Button, InfoContainer, Img, Stats, Type, Moves } from '../../styles/styles';
import {Container, ContainerImg, ContainerPowers, ContainerDetails, ContainerType, ContainerAttack} from "./styled"

const DetailPage = (props) => {
    const navigate = useNavigate();


    return(
        <>

          <Header />

          <Container>
            <ContainerImg>
              <img src="http://3.bp.blogspot.com/_M82AcW40FFc/SwrH0Cci3cI/AAAAAAAAAEQ/guCMPwYawwo/s1600/mr+burns.jpg" alt="" />
              <img src="http://3.bp.blogspot.com/_M82AcW40FFc/SwrH0Cci3cI/AAAAAAAAAEQ/guCMPwYawwo/s1600/mr+burns.jpg" alt="" />
            </ContainerImg>

            <ContainerPowers>
              <h3>Poderes</h3>
              <p>hp: 00</p>
              <p>attack: 00</p>
              <p>defense: 00</p>
              <p>special-attack: 00</p>
              <p>special-defense: 00</p>
              <p>speed: 00</p>
            </ContainerPowers>

            <ContainerDetails>
              <ContainerType>
                <p>type1</p>
                <p>type2</p>
              </ContainerType>
              
              <ContainerAttack>
                <h3>Principais ataques</h3>
                <p>ataque 1</p>
                <p>ataque 2</p>
                <p>ataque 3</p>
                <p>ataque 4</p>
                <p>ataque 5</p>
              </ContainerAttack>

            </ContainerDetails>
          </Container>

        </>
    )
    
}

export default DetailPage;