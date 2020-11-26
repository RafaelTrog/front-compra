import React from "react";

import ProductCard from "../ProductCard";

import Iphone from '../../assets/iphone11.jpg';
import Lavadora from '../../assets/lavadora.png';
import Tv from '../../assets/tv-samsung.jpeg';
import Notebook from '../../assets/notebook-compaq.jpg';
import ArCond from '../../assets/ar-condicionado.png';

import { Container, CardsContainer, ForYou, TitleContainer } from "./styles";

const Home = () => {
  return (
    <Container>
      <TitleContainer>
        <ForYou>especiais pra você</ForYou>
      </TitleContainer>
      <CardsContainer>
        <ProductCard
          name="iPhone 11 64GB Preto iOS 4G Câmera 12MP - Apple"
          price={4889.9}
          parcelas={12}
          image={Iphone}
        />
        <ProductCard
          name="Lavadora de Roupas Consul 9Kg Branca CWB09"
          price={1229.99}
          parcelas={12}
          image={Lavadora}
        />
        <ProductCard
          name='Smart TV LED 32" Samsung 32T4300 HD WIFI HDR'
          price={1199.99}
          parcelas={12}
          image={Tv}
        />
        <ProductCard
          name="Notebook Compaq Presario CQ-25 Intel Pentium"
          price={1799.99}
          parcelas={12}
          image={Notebook}
        />
        <ProductCard
          name="Ar Condicionad Split Electrolux Ecoturbo"
          price={1658.9}
          parcelas={12}
          image={ArCond}
        />
      </CardsContainer>
    </Container>
  );
};

export default Home;
