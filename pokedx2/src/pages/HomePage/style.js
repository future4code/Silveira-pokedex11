import styled from "styled-components";

export const HomeContainer = styled.div`
  background-color: #f6e652;
`;

export const SelectCategory = styled.select`
  margin-bottom: 40px;
  margin-top: 40px;
  margin-left: 38vw;
  background-color: #737383;
  border-radius: 19px;
  border: 2px solid #41414a;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 18px;
  padding: 6px 15px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #8f313a;
  &:hover {
    background-color: #41414a;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;

export const ContainerGrid = styled.div`
    
    display: grid;
    height: 100%;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    row-gap: 30px;
    column-gap: 0px;
`;
