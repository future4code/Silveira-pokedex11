import React from 'react';
import Header from "./Header/Header"
// colocar os imports de libs
import {useNavigate} from 'react-router-dom';
// import styled from 'styled-components';
// import axios from 'axios';

// colocar as importacoes de todos os arquivos de codigos do projeto
import { goBack } from '../../routes/coordinator';
import {MainContainer, Button, InfoContainer, Img, Stats, Type, Moves } from '../../styles/styles';


const DetailPage = (props) => {
    const navigate = useNavigate();


    return(
        <>

          <Header />
            {/* <Header>

                <Button 
                    onClick={() => {goBack(navigate)}}
                >BOTÃO VOLTAR</Button>
                <h2>NOME DO POKEMON</h2>
                <Button>BOTÃO ADICIONAR/REMOVER DA POKEDEX</Button>

            </Header> */}
            <InfoContainer>
                <InfoContainer>
                    <Img
                        src="http://3.bp.blogspot.com/_M82AcW40FFc/SwrH0Cci3cI/AAAAAAAAAEQ/guCMPwYawwo/s1600/mr+burns.jpg" 
                    /> 
                    <Img 
                        src="http://3.bp.blogspot.com/_M82AcW40FFc/SwrH0Cci3cI/AAAAAAAAAEQ/guCMPwYawwo/s1600/mr+burns.jpg" 
                    /> 
                </InfoContainer>
                

                <Stats>status do pokemon</Stats>
                <Type> TIPO DO POKEMON </Type>
                <Moves> MOVES DO POKEMON </Moves>

            </InfoContainer>
            

        </>
    )
    
}

export default DetailPage;