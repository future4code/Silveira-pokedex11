import React from "react";
import { CardsContainer, HomePageContainer, MainContainer, SelectCategory } from "../../styles/styles";

export default function HomePage() {

    return (
        <MainContainer>
            <HomePageContainer>
                <h1>Pokémon</h1>
                <SelectCategory>
                    <option>Tipo De Pokémon</option>
                </SelectCategory>
                <CardsContainer>
 
                </CardsContainer>
            </HomePageContainer>
        </MainContainer>

    )
}

