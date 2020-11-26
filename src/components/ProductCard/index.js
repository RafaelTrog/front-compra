import React from "react";

import { Card, Image, Name, Price, Stars, Parcelas } from "./styles";

import { useHistory } from 'react-router-dom';

import { FaStar } from "react-icons/fa";

const ProductCard = (props) => {
  const history = useHistory();
  const { name, price, parcelas, image } = props;

  const handleParcelas = (parcelas, price) => {
    let num = price / parcelas;
    num = num.toFixed(2).toString();
    return num.replace(".", ",");
  };

  const handlePrice = (price) => {
    if (price) {
      let num = price;
      num = num.toFixed(2);
      num = num.toString();
      return num.replace(".", ",");
    } else {
      return "null";
    }
  };

  const goTo = () => {
    history.push('/produto')
  }

  return (
    <Card onClick={goTo}>
      <Image src={image} alt={name} />
      <Name>{name || "null"}</Name>
      <Stars>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </Stars>
      <Price>{`R$ ${handlePrice(price)}` || "undefined"}</Price>
      <Parcelas>{`${parcelas}x de R$ ${handleParcelas(
        parcelas,
        price
      )}`}</Parcelas>
    </Card>
  );
};

export default ProductCard;
