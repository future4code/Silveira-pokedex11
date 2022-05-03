import React from 'react'
import {Container, Img, ContainerButton, Button} from "./style"

import {goToPage} from "../../routes/coordinator"
import { useNavigate } from 'react-router-dom'



const PokeCard = () => {

  const navigate = useNavigate()

  return (
    <Container>
      <Img src="https://picsum.photos/96/96" alt="teste" />
      <ContainerButton>
        <Button>Adicionar a Pokédex</Button>
        <Button onClick={() => goToPage(navigate, "/details")} >Ver detalhes</Button>
      </ContainerButton>
      
    </Container>
  )
}

export default PokeCard