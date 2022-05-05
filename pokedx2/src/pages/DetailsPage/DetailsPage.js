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

	// sprites.front_default
	// const imgFunc = type => {
	// 	if (states.pokeInfo.sprites == undefined){
	// 		return "http://3.bp.blogspot.com/_M82AcW40FFc/SwrH0Cci3cI/AAAAAAAAAEQ/guCMPwYawwo/s1600/mr+burns.jpg"
	// 	} else {
	// 		return states.pokeInfo.sprites.type
	// 	}		
	// }
	

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
}
        </>
    )
    
}

export default DetailPage;