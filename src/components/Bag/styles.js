import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 1450px;
  padding-top: 20px;
`;

export const ForYou = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: ${props => props.size ? `${props.size}px` : '30px'};
  margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0'};
  font-weight: bold;
  color: #4d4d4d;
`;

export const LeveTambem = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 40px;
  height: 140px;
  padding: 20px 0;
`;

export const LeveTambemItem = styled.div`
  width: 310px;
  height: 100%;
  display: flex;
  flex-direction: row;
  column-gap: 10px;
`;

export const LeveTambemLeft = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  row-gap: 5px;
`;

export const LeveTambemRight = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 10px;
  color: #4d4d4d;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
`;

export const LeveTambemPrice = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  color: #4d4d4d;
  font-size: 24px;
`;

export const IncluirBtn = styled.button`
  width: 80%;
  height: 40px;
  border-radius: 3px;
  border: 2px solid #012269;
  background-color: transparent;
  color: #012269;
  font-size: 12px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #012269;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 40px;
`

export const ProdutoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  // border: 1px solid red;
`

export const TableTitles = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #C1C1C1;
`

export const TableItem = styled.div`
  font-weight: ${props => props.light ? 'normal' : 'bold'};
  font-family: 'Roboto', sans-serif;
  width: ${props => props.width}px;
  display: flex;
  align-items: center;
  padding: 10px 0;
  text-align: center;
  justify-content: ${props => props.center ? 'center' : 'none'};
`

export const ResumoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  background-color: #F8F8F8;
  box-sizing: border-box;
  padding: 25px 20px;
`

export const ResumoLabel = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #4d4d4d;
  margin-bottom: 20px;
`

export const ResumoItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  & span{
    font-size: 14px;
    color: ${props => props.green ? "#298219" : "#4d4d4d"};
    font-family: 'Roboto', sans-serif;
  }
`

export const Separator = styled.hr`
  width: 100%;
  border-top: none;
  border-color: #c1c1c1;
  margin: ${props => props.margin || 0};
`

export const ResumoTotal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;

  & span{
    font-size: ${props => props.size || 14}px;
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
    color: #4d4d4d;
    font-family: 'Roboto', sans-serif;
  }
`

export const BuyBtn = styled.button`
  background-color: #012269;
  margin-top: 20px;
  width: 100%;
  height: 60px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-size: 22px;

  & svg {
    fill: #fff;
    width: 30px;
    height: 30px;
  }
`