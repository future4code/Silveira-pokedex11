
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route 
                    path="/pokedex" 
                    element={
                        <PokedexPage />}
                    />
                <Route 
                    path="/details/:poke" 
                    element={
                        <DetailsPage />}
                />
            </Routes>
        </BrowserRouter>
    )
}
export default Router



