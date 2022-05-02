import react, {useState, useEffect}from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";

export const Router = (props) => {
    const [pokedex, setPokedex] = useState([])
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route 
                    path="/pokedex" 
                    element={
                        <PokedexPage  
					        Pokedex={pokedex}
					        setPokedex={setPokedex}	
				        />}
                    />
                <Route 
                    path="/details" 
                    element={
                        <DetailsPage  
                            Pokedex={pokedex}
                            setPokedex={setPokedex}	
                        />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default Router


