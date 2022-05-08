import React, { useEffect } from 'react';
import Header from "./Header/Header"

import {useNavigate, useParams} from 'react-router-dom';

import {MainContainer,Container, ContainerImg, ContainerPowers, ContainerDetails, ContainerType, ContainerAttack} from "./styled"
import { useGlobal } from '../../context/GlobalStateContext';

const DetailPage = () => {
    
	const {states,setters,requests} = useGlobal()
	const { poke } = useParams();
	
	useEffect(() => {
		requests.getPokemonsDetail(poke, setters.setPokeInfo)
	},[setters.setPokeInfo])

	const ability = states.pokeInfo.name && states.pokeInfo.abilities.map((abilite) => {
		return(
			<p key={abilite.ability.name}>
				{abilite.ability.name}
			</p>
		)
	})

	const type = states.pokeInfo.name && states.pokeInfo.types.map((tiple) => {
		return(
			<p key={tiple.type.name}>
				{tiple.type.name}
			</p>
		)
	})	
	const principalAttack = states.pokeInfo.name && states.pokeInfo.moves.map((mov) => {
		return(
			<p key={mov.move.name}>
				{mov.move.name}
			</p>
		)
	})

    return(
        <MainContainer>
			<Header
				poke={poke}
				Pokemon={states.pokeInfo}
			/>
{
	states.pokeInfo.name &&
			<Container>
				<ContainerImg>
					<img 
						src={states.pokeInfo.sprites.front_default}
					 	alt={`imagem do ${poke} de frente`} 
					/>
					<img 
						src={states.pokeInfo.sprites.back_default }
						alt={`imagem do ${poke} de costas`} 
					/>
				</ContainerImg>
				<ContainerDetails>
					<ContainerPowers>
						<h3>Poderes</h3>
						{ability}
					</ContainerPowers>
					<ContainerType>
						<h3>Tipo: </h3>
						{type}
					</ContainerType>
				</ContainerDetails>
					<ContainerAttack>
						<h3>Principais ataques</h3>
						{principalAttack}
					</ContainerAttack>
			</Container>
}
        </MainContainer>
    )
    
}

export default DetailPage;
