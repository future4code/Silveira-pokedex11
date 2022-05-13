import styled from "styled-components";

export const HomeContainer = styled.div`
  background-color: #f6e652;
  padding-bottom: 2vw;
`;

export const ContainerGrid = styled.div`
    display: grid;
    height: 100%;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    row-gap: 30px;
    column-gap: 0px;
    margin-top: 4vw;
    margin-bottom: 2vw;
`;
