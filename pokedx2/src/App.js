import react from 'react';

// colocar os imports de libs
import styled from 'styled-components';
// import axios from 'axios';



// colocar as importacoes de todos os arquivos de codigos do projeto
import { MainContainer, GlobalStyled } from './styles/styles';
import Router from './routes/Router';


	export default function App() {


		return (
			<> 
        		<GlobalStyled />
				<Router /> 
			</>


		);
	}





