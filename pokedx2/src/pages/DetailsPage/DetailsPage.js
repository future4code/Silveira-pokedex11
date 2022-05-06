

import React, { useEffect } from 'react';
import Header from "./Header/Header"
// colocar os imports de libs
import {useNavigate, useParams} from 'react-router-dom';
// import axios from 'axios';

// colocar as importacoes de todos os arquivos de codigos do projeto
// import { goBack } from '../../routes/coordinator';
// import {MainContainer, Button, InfoContainer, Img, Stats, Type, Moves } from '../../styles/styles';
import {Container, ContainerImg, ContainerPowers, ContainerDetails, ContainerType, ContainerAttack} from "./styled"
import { useGlobal } from '../../context/GlobalStateContext';

const DetailPage = () => {
    
	const {states,setters,requests} = useGlobal()

	const navigate = useNavigate();
	const { poke } = useParams();
	
	useEffect(() => {
		requests.getPokemonsDetail(poke, setters.setPokeInfo)
	},[setters.setPokeInfo])
	
	console.log('pokemon info');
	console.log(states.pokeInfo);
	console.log(states.pokeInfo.name);
	console.log('kkkkkkk');

	const ability = states.pokeInfo.abilities.map((abilite) => {
		return(
			<p key={abilite.ability.name}>
				{abilite.ability.name}
			</p>
		)
		
	})

	const type = states.pokeInfo.types.map((tiple) => {
		return(
			<p key={tiple.type.name}>
				{tiple.type.name}
			</p>
		)
		
	})	
	
	const principalAttack = states.pokeInfo.moves.map((mov) => {
		return(
			<p key={mov.move.name}>
				{mov.move.name}
			</p>
			
		)
		
	})

    return(
        <>

			<Header />
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

				<ContainerPowers>
					<h3>Poderes</h3>
					{ability}
				</ContainerPowers>

				<ContainerDetails>
					<ContainerType>

						{type}
					</ContainerType>
				
					<ContainerAttack>
						<h3>Principais ataques</h3>
						{principalAttack}
					</ContainerAttack>

				</ContainerDetails>
			</Container>
}
        </>
    )
    
}

export default DetailPage;
