import React from "react";

import { View } from "react-native";
import { ProductType } from "../../global/types";
import { useCart } from "../../hooks/useCart";
import { HighlightButton } from "../HighlightButton";
import {
  DescriptionContainer,
  DescriptionText,
  ModalContainer,
  ModalContent,
  ModalImg,
  ModalPrice,
  ModalText,
  ModalTitle,
} from "./styles";

interface ProductModalType {
  product: ProductType;
}
export function ProductModal({ product }: ProductModalType) {
  const { addProductCart } = useCart();

  const formattedPrice = `R$ ${Math.floor(product.price / 100)},${String(
    product.price
  ).slice(-2)}`;

  return (
    <ModalContainer>
      <ModalImg source={{ uri: product.img_url }} resizeMode={"cover"} />
      <ModalPrice>{formattedPrice}</ModalPrice>
      <ModalContent>
        <ModalTitle>{product.title}</ModalTitle>
        <ModalText>
          {product.stock > 0 ? "Em estoque!" : "Fora de estoque."}
        </ModalText>

        <ModalText style={{ fontWeight: "bold", marginTop: 25 }}>
          Detalhes
        </ModalText>
        <DescriptionContainer>
          <DescriptionText>{product.description}</DescriptionText>
        </DescriptionContainer>
      </ModalContent>
      <HighlightButton
        onPress={() => {
          addProductCart(product.id);
        }}
      >
        Adicionar ao carrinho
      </HighlightButton>
    </ModalContainer>
  );
}
