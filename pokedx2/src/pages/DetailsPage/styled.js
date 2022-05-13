import styled from 'styled-components';

export const MainContainer = styled.div`
  background-color: #f6e652;
  padding-bottom: 5vw;
`
export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 100px;
`
export const ContainerImg = styled.div`
  background-color: #41414a;
  border: solid #c52018 3px;
  height: 100%;
  display: flex;
  flex-direction: column;
    img{
      width: 200px;
    }
`
export const ContainerPowers = styled.div`
  border: solid #c52018 3px;
  background-color: #41414a;
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
  height: 100%;
  color: white;
`
export const ContainerType = styled.div`
  border: solid #c52018 3px;
  background-color: #41414a;
  color: white;
  padding: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-grow: 1; 
`
export const ContainerAttack = styled.div`
  border: solid #c52018 3px;
  background-color: #41414a;
  color: white;
  width: 20%;
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`