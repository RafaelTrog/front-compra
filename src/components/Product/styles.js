import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-radius: 2px;

  display: flex;
  flex-direction: column;
`;

export const ContainerCenter = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 30px;
  justify-content: center;
  padding: 40px;
`;

export const BlankContainer = styled.div`
  width: ${(props) => props.width}px;
  background-color: #fff;
  border-radius: 2px;
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  padding: 40px;
`;

export const ProductLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

export const ProductRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  row-gap: 10px;
`;

export const ProductName = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 25px;
  color: #4d4d4d;
  font-weight: bold;
`;

export const ProductImage = styled.img`
  width: 300px;
`;

export const RateContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;

  & span {
    font-size: 12px;
    color: #8f8f8f;
    font-family: "Roboto", sans-serif;
  }

  & svg {
    fill: #f1c831;
    width: 18px;
    height: 18px;
  }
`;

export const Desc = styled.span`
  margin-top: 20px;
  font-size: 14px;
  color: #4d4d4d;
  font-family: "Roboto", sans-serif;
`;

export const Link = styled.span`
  margin-top: 20px;
  font-size: 14px;
  color: #4d4d4d;
  font-family: "Roboto", sans-serif;
  text-decoration: underline;
  cursor: pointer;
`;

export const Separator = styled.hr`
  width: 100%;
  margin-top: 20px;
  border: 1px solid #ebebeb;
`

export const ProductPrice = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-weight: bold;
  color: #4d4d4d;
`

export const Address = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  cursor: pointer;

  & span {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: #4d4d4d;
    text-decoration: underline;
  }

  & svg {
    fill: #4d4d4d;
  }
`

export const FreteContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: 'Roboto', sans-serif;
  color: #4d4d4d;
  margin-top: 10px;
`

export const FreteLeft = styled.div`
  display: flex;
  flex-direction: column;
`

export const FreteRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FreteLabel = styled.div`
  font-weight: ${props => props.bold ? "bold" : "normal"};
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