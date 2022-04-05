import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";

import { ProductType } from "../../global/types";
import { useCart } from "../../hooks/useCart";
import {
  BlanckProduct,
  ImageBox,
  ProductContainer,
  ProductPrice,
  ProductTitle,
  TitleContainer,
} from "./styles";

interface ProductButtonType {
  product: ProductType;
}

export function ProductButton({ product }: ProductButtonType) {
  const [modalVisibility, setModalVisibility] = useState(false);
  const { setProduct } = useCart();
  const navigation = useNavigation();

  const formattedPrice = `R$ ${Math.floor(product.price / 100)},${String(
    product.price
  ).slice(-2)}`;

  function handleOpenModal() {
    setModalVisibility(true);
  }

  function handleCloseModal() {
    setModalVisibility(false);
  }

  return (
    <>
      {product.id === 0 ? (
        <BlanckProduct />
      ) : (
        <ProductContainer
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate("ProductDetail" as never, { product } as never);
            setProduct(product);
          }}
          style={{ elevation: 5 }}
        >
          <ImageBox source={{ uri: product.img_url }} />
          <TitleContainer>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>{formattedPrice}</ProductPrice>
          </TitleContainer>
        </ProductContainer>
      )}
    </>
  );
}
