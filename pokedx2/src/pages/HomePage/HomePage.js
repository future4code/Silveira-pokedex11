import React from "react";

import {useNavigate} from 'react-router-dom';

import { goToPage } from '../../routes/coordinator';
import { Button, CardsContainer, HomePageContainer, MainContainer, SelectCategory, H1 } from "../../styles/styles";

export default function HomePage() {
    const navigate = useNavigate();
    return (
        <MainContainer>
            <HomePageContainer>
                <H1>Pokémon</H1>
                <SelectCategory>
                    <option>Tipo De Pokémon</option>
                </SelectCategory>
                <CardsContainer>
 
                </CardsContainer>
            </HomePageContainer>
            <Button onClick={ () => { goToPage(navigate,'/details') }}>
                detalhes do pokemon
            </Button>
        </MainContainer>

    )
}

