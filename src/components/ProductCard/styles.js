import styled from "styled-components";

export const Card = styled.div`
  width: 250px;
  height: 400px;

  background-color: #FFF;

  display: flex;
  flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
  box-sizing: border-box;
  row-gap: 15px;
  cursor: pointer;

  padding: 20px;

  border-radius: 3px;

  -webkit-box-shadow: 0px 0px 5px 0px rgba(71, 71, 71, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(71, 71, 71, 1);
  box-shadow: 0px 0px 5px 0px rgba(71, 71, 71, 1);

  transition: 0.2s ease;

  &:hover {
      transform: scale(1.1);
  }
`;

export const Image = styled.img`
//   width: 100%;
  height: 210px;
  background-color: #c1c1c1;
`;

export const Name = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: #474747;
`;

export const Stars = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 5px;
  // justify-content: flex-start;

  & svg {
    fill: #f1c831;
  }
`;

export const Price = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
`;

export const Parcelas = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 14px;
  color: #6e6e6e;
`;
