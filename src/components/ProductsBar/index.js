import React from "react";

import { Container, Department, Item } from "./styles";

import { FaChevronDown, FaBars } from "react-icons/fa";

const ProductsBar = () => {
  return (
    <Container>
      <Department>
        <FaBars />
        compre por categoria
        <FaChevronDown />
      </Department>
      <Item>tvs</Item>
      <Item>smartphones</Item>
      <Item>notebooks</Item>
      <Item>móveis</Item>
      <Item>áudio</Item>
      <Item>livros</Item>
      <Item>games</Item>
    </Container>
  );
};

export default ProductsBar;
