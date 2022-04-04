import React from "react";

import { View, Text } from "react-native";
import { ProductBar } from "../../components/ProductBar";
import { ProductHeader } from "../../components/ProductHeader";
import { ProductType } from "../../global/types";
import { useCart } from "../../hooks/useCart";
import {
  Container,
  ProductBody,
  ProductImg,
  TextBody,
  TextPrice,
  TextTitle,
} from "./styles";

export function ProductDetail() {
  const { product } = useCart();
  const formattedPrice = `R$ ${Math.floor(product.price / 100)},${String(
    product.price
  ).slice(-2)}`;

  return (
    <Container>
      <ProductHeader />
      <ProductImg source={{ uri: product.img_url }} />
      <ProductBody>
        <TextTitle>{product.title}</TextTitle>
        <TextPrice>{formattedPrice}</TextPrice>
        <TextBody>{product.description}</TextBody>
      </ProductBody>
      <ProductBar product={product} />
    </Container>
  );
}
