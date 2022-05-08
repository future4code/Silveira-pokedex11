import React from 'react';

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





