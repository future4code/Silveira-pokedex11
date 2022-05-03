import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 100px;
`
export const ContainerImg = styled.div`
  border: dotted black 1px;
  display: flex;
  flex-direction: column;
    img{
      width: 200px;
    }
`
export const ContainerPowers = styled.div`
  border: dotted black 1px;
  background-color: lightgray;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const ContainerDetails = styled.div`
  display: flex;
  flex-direction: column;
`
export const ContainerType = styled.div`
  border: dotted black 1px;
  background-color: lightgray;
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
`
export const ContainerAttack = styled.div`
  border: dotted black 1px;
  flex-grow: 1;
  background-color: lightgray;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`