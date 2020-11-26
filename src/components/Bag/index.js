import React from "react";

import Iphone11 from '../../assets/small/iphone11.png';
import IphoneXR from '../../assets/small/iphoneXR.png';
import MotoG8 from '../../assets/small/motoG8.png';
import A10S from '../../assets/small/galaxyA10S.png';

import { FaShoppingBasket } from "react-icons/fa";

import {
  Container,
  TitleContainer,
  ForYou,
  LeveTambem,
  LeveTambemItem,
  LeveTambemLeft,
  LeveTambemRight,
  LeveTambemPrice,
  IncluirBtn,
  BottomContainer,
  ProdutoContainer,
  ResumoContainer,
  TableTitles,
  TableItem,
  ResumoLabel,
  ResumoItem,
  Separator,
  ResumoTotal,
  BuyBtn
} from "./styles";

const Bag = () => {
  return (
    <Container>
      <TitleContainer>
        <ForYou size={24}>aproveite e leve também</ForYou>
      </TitleContainer>
      <LeveTambem>
        <LeveTambemItem>
          <LeveTambemLeft>
              <img src={Iphone11} alt="iPhone 11" />
          </LeveTambemLeft>
          <LeveTambemRight>
            <span>iPhone 11 128GB Preto iOS 4G Câmera 12MP</span>
            <LeveTambemPrice>R$ 5.289,00</LeveTambemPrice>
            <IncluirBtn>incluir na cesta</IncluirBtn>
          </LeveTambemRight>
        </LeveTambemItem>

        <LeveTambemItem>
          <LeveTambemLeft>
              <img src={IphoneXR} alt="iPhone XR" />
          </LeveTambemLeft>
          <LeveTambemRight>
            <span>iPhone XR 64GB Preto Tela 6.1" iOS 12</span>
            <LeveTambemPrice>R$ 3.929,00</LeveTambemPrice>
            <IncluirBtn>incluir na cesta</IncluirBtn>
          </LeveTambemRight>
        </LeveTambemItem>

        <LeveTambemItem>
          <LeveTambemLeft>
              <img src={MotoG8} alt="Moto G8" />
          </LeveTambemLeft>
          <LeveTambemRight>
            <span>Smartphone Moto G8 Power Lite 64GB</span>
            <LeveTambemPrice>R$ 1.299,00</LeveTambemPrice>
            <IncluirBtn>incluir na cesta</IncluirBtn>
          </LeveTambemRight>
        </LeveTambemItem>

        <LeveTambemItem>
          <LeveTambemLeft>
              <img src={A10S} alt="Galaxy A10S" />
          </LeveTambemLeft>
          <LeveTambemRight>
            <span>Smartphone Samsung Galaxy A10S - Vermelho</span>
            <LeveTambemPrice>R$ 999,00</LeveTambemPrice>
            <IncluirBtn>incluir na cesta</IncluirBtn>
          </LeveTambemRight>
        </LeveTambemItem>
      </LeveTambem>

      <TitleContainer>
          <ForYou marginTop={20}>
            meu carrinho
          </ForYou>
      </TitleContainer>

      <BottomContainer>
        <ProdutoContainer>
          <TableTitles>
            <TableItem width={150}>produto</TableItem>
            <TableItem width={400}></TableItem>
            <TableItem width={150} center>qtd.</TableItem>
            <TableItem width={150} center>entrega</TableItem>
            <TableItem width={150} center>preço</TableItem>
          </TableTitles>
          <TableTitles>
            <TableItem width={150}>
              <img src={Iphone11} alt="iPhone 11" />
            </TableItem>
            <TableItem width={400} center>iPhone 11 64GB Preto iOS 4G Câmera 12MP - Apple</TableItem>
            <TableItem width={150} center>1</TableItem>
            <TableItem width={150} light center>receber até mês que vem</TableItem>
            <TableItem width={150} center>R$ 4.889,00</TableItem>
          </TableTitles>
        </ProdutoContainer>
        <ResumoContainer>
          <ResumoLabel>resumo do pedido</ResumoLabel>
          <ResumoItem>
            <span>1 produto</span>
            <span>R$ 4.889,00</span>
          </ResumoItem>
          <ResumoItem green>
            <span>frete</span>
            <span>grátis</span>
          </ResumoItem>
          <Separator margin="10px 0 20px 0" />
          <ResumoTotal size={18} bold>
            <span>total</span>
            <span>R$ 4.889,00</span>
          </ResumoTotal>
          <ResumoTotal>
            <span></span>
            <span>em até 12x sem juros</span>
          </ResumoTotal>
          <Separator margin="10px 0 0 0" />
          <BuyBtn>
              <FaShoppingBasket />
              finalizar
          </BuyBtn>
        </ResumoContainer>
      </BottomContainer>

    </Container>
  );
};

export default Bag;
