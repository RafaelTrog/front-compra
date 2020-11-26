import React from "react";

import { useHistory } from 'react-router-dom';

import {
  Container,
  ContainerCenter,
  BlankContainer,
  ProductLeft,
  ProductRight,
  ProductName,
  ProductImage,
  RateContainer,
  Desc,
  Link,
  Separator,
  ProductPrice,
  Address,
  FreteContainer,
  FreteLeft,
  FreteRight,
  FreteLabel,
  BuyBtn
} from "./styles";

import { FaStar, FaMapMarkerAlt, FaShoppingBasket } from "react-icons/fa";

import IphoneImg from "../../assets/iphone11.jpg";

const Product = () => {
  const history = useHistory();

  const goTo = () => {
    history.push('/carrinho');
  }

  return (
    <Container>
      <ContainerCenter>
        <BlankContainer width={900} flexDirection="row">
          <ProductLeft>
            <ProductImage src={IphoneImg} alt="iPhone 11" />
          </ProductLeft>
          <ProductRight>
            <ProductName>
              iPhone 11 64GB Preto iOS 4G Câmera 12MP - Apple
            </ProductName>
            <RateContainer>
              <span>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <span>(63)</span>
              <span>(Cód. 1611315933)</span>
            </RateContainer>
            <Desc>
              Tudo. Na medida certa. O iPhone 11 tem novo sistema de câmera
              dupla para capturar mais do que você vê e ama. Ele vem com o chip
              mais rápido em um smartphone. E bateria para o dia todo: você faz
              muito e recarrega pouco.
            </Desc>
            <Link>mais informações</Link>
            <Link>política de troca e devolução</Link>
            <Separator />
            <Desc>frete totalmente grátis!</Desc>
            <Link>veja todos os benefícios</Link>
          </ProductRight>
        </BlankContainer>
        <BlankContainer width={280} flexDirection="column">
          <ProductPrice>R$ 4.889,00</ProductPrice>
          <Desc>
            em até 12x sem juros no <b>cartão de crédito com ame</b> e receba{" "}
            <b>R$ 100,00</b> de volta
          </Desc>
          <Link>mais informações de pagamento</Link>
          <Separator />
          <Address>
            <FaMapMarkerAlt />
            <span>Avenida Manoel Ribas 728</span>
          </Address>
          <FreteContainer>
            <FreteLeft>
              <FreteLabel>receber até</FreteLabel>
              <FreteLabel bold>este mês</FreteLabel>
            </FreteLeft>
            <FreteRight>
              <FreteLabel bold>grátis</FreteLabel>
            </FreteRight>
          </FreteContainer>
          <FreteContainer>
            <FreteLeft>
              <FreteLabel>retirar na loja até</FreteLabel>
              <FreteLabel bold>este mês</FreteLabel>
            </FreteLeft>
            <FreteRight>
              <FreteLabel bold>grátis</FreteLabel>
            </FreteRight>
          </FreteContainer>
          <Link>
            mais formas de frete
          </Link>
          <Separator />
          <BuyBtn onClick={goTo}>
              <FaShoppingBasket />
              comprar
          </BuyBtn>
          <Desc>
              Este produto é vendido e entrege por <b>Australianas</b>.
          </Desc>
        </BlankContainer>
      </ContainerCenter>
    </Container>
  );
};

export default Product;
