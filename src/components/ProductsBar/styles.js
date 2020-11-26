import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fff;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Department = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    column-gap: 10px;
    font-weight: bold;
    align-items: center;
    cursor: pointer;
    color: #012269;
    margin-right: 50px;

    & svg {
        fill: #012269;
    }
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: #fff;
    transition: 0.5s ease;
    padding: 0 60px;
    cursor: pointer;

    &:hover {
        background-color: #e8e8e8;
    }
`