import styled from 'styled-components';

export const MainContainer = styled.div`
  background-color: yellow;
`
export const Container = styled.div`
  
  display: flex;
  justify-content: space-evenly;
  margin: 100px;
`
export const ContainerImg = styled.div`
background-color: lightgray;
  border: dotted black 1px;
  height: 100%;
  display: flex;
  flex-direction: column;
    img{
      width: 200px;
    }
`
export const ContainerPowers = styled.div`
  border: dotted black 1px;
  background-color: lightgray;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const ContainerDetails = styled.div`
  display: flex;
  flex-direction: column;
   /* width: 100%; */
  height: 100%;
`
export const ContainerType = styled.div`
  border: dotted black 1px;
  background-color: lightgray;
  padding: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-grow: 1; 
`
export const ContainerAttack = styled.div`
  border: dotted black 1px;
  /* */
  background-color: lightgray;
    width: 20%;
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`