import React, { useState } from "react";

import { AntDesign } from "@expo/vector-icons";
import { InCartProductType } from "../../global/types";
import { ModalView } from "../ModalView";
import { ProductModal } from "../ProductModal";

import {
  AmountItemButton,
  AmountItemContainer,
  AmountItemInput,
  ImageBox,
  ItemContainer,
  ItemContent,
  ProductDetails,
  ProductPrice,
  ProductTitle,
  TotalProduct,
} from "./styles";
import { useCart } from "../../hooks/useCart";

interface CartItemType {
  product: InCartProductType;
}

export function CartItem({ product }: CartItemType) {
  const [modalVisibility, setModalVisibility] = useState(false);

  const { updateProductAmount } = useCart();

  function handleIncreaseAmount() {
    updateProductAmount(product.product_id, product.inCartAmount + 1);
  }

  function handleDecreaseAmount() {
    updateProductAmount(product.product_id, product.inCartAmount - 1);
  }

  function handleOpenModal() {
    setModalVisibility(true);
  }

  function handleCloseModal() {
    setModalVisibility(false);
  }

  return (
    <>
      <ItemContainer activeOpacity={0.9} onPress={handleOpenModal}>
        <ItemContent>
          <ImageBox
            source={{ uri: product.image_url }}
            resizeMode={"contain"}
          />
          <ProductDetails>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>{(product.price / 100).toFixed(2)}</ProductPrice>
            <TotalProduct>
              Total R${" "}
              {((product.price / 100) * product.inCartAmount).toFixed(2)}
            </TotalProduct>
          </ProductDetails>
          <AmountItemContainer>
            <AmountItemButton
              onPress={handleDecreaseAmount}
              activeOpacity={0.8}
            >
              <AntDesign name="minuscircleo" size={20} color="black" />
            </AmountItemButton>
            <AmountItemInput
              value={product.inCartAmount.toString()}
              editable={false}
            />
            <AmountItemButton
              onPress={handleIncreaseAmount}
              activeOpacity={0.8}
            >
              <AntDesign name="pluscircleo" size={20} color="black" />
            </AmountItemButton>
          </AmountItemContainer>
        </ItemContent>
      </ItemContainer>

      <ModalView
        transparent
        closeModal={handleCloseModal}
        onDismiss={handleCloseModal}
        onRequestClose={handleCloseModal}
        visible={modalVisibility}
      >
        <ProductModal product={product} />
      </ModalView>
    </>
  );
}
