import React from 'react';

// colocar os imports de libs

// colocar as importacoes de todos os arquivos de codigos do projeto
import { GlobalStyled } from './styles/styles';
import Router from './routes/Router';
import GlobalState from './context/GlobalState';


	export default function App() {


		return (
			<> 
        		<GlobalStyled />

        		<GlobalState>
				  	<Router /> 
        		</GlobalState>
			</>


		);
	}





