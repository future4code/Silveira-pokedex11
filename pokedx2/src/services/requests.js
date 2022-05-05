import axios from "axios";
import { url } from "../constants/url";

export const getAllPokemons = async (setPokemons,limit,comeco  ) => {
    try {
        let diferenca = limit - comeco;
        if (limit>comeco && diferenca >= 20){
            
            const response = await axios.get(`${url}?limit=${limit}&offset=${comeco}`)
            setPokemons( response.data.results) 
            
        } else{

            return 'erro';
        }
        
    } catch (err) {
        console.log('deu erro no getAllPokemons');
        console.log(err.message);
    }

}

export const getPokemonsDetail = async (idDoPokemon,setPokeInfo) => {
    try {
        
        const response = await axios.get(`${url}/${idDoPokemon}`)
        console.log('deu certo o getPokemonDetail');
        console.log(response);

    } catch (err) {
        console.log('deu erro no getPokemonsDetail');
        console.log(err.message);
    }
}

export const getPokemonsTypes = (set) => {
    axios
    .get(`https://pokeapi.co/api/v2/type`)
    .then((res) => {
        set(res.data.results)
    })
    .catch((err) => {
        console.log(err)
    })
}