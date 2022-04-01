import React, { useState } from "react";

import { ProductType } from "../../global/types";
import { ModalView } from "../ModalView";
import { ProductModal } from "../ProductModal";
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
        <ProductContainer activeOpacity={0.8} onPress={handleOpenModal}>
          <ImageBox source={{ uri: product.img_url }} />
          <TitleContainer>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>{formattedPrice}</ProductPrice>
          </TitleContainer>
          <ModalView
            transparent
            closeModal={handleCloseModal}
            onDismiss={handleCloseModal}
            onRequestClose={handleCloseModal}
            visible={modalVisibility}
          >
            <ProductModal product={product} />
          </ModalView>
        </ProductContainer>
      )}
    </>
  );
}
