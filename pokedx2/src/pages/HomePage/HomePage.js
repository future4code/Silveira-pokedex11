import React from "react";
import Header from "../Header/Header";
import PokeCard from "../../components/PokeCard/PokeCard";
import Grid from "../../components/Grid/Grid";
import { HomeContainer } from "./style";

export default function HomePage() {

    return (
        <HomeContainer>
          <Header />
          <Grid>
            {<PokeCard />}

          </Grid>
        </HomeContainer>

    )
}

