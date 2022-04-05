import React, { useEffect, useState } from "react";

import { InCartProductType } from "../../global/types";
import { Ionicons } from "@expo/vector-icons";

import {
  ImageBox,
  ItemContainer,
  ItemContent,
  ProductDetails,
  ProductTitle,
  RemoveItem,
  TotalProduct,
} from "./styles";
import { useCart } from "../../hooks/useCart";
import { UpdateAmountBar } from "../UpdateAmountBar";
import { mainTheme } from "../../global/themes";

interface CartItemType {
  product: InCartProductType;
}

export function CartItem({ product }: CartItemType) {
  const [subTotal, setSubTotal] = useState("");

  const { updateProductAmount } = useCart();

  function handleIncreaseAmount() {
    updateProductAmount(product.id, product.inCartAmount + 1);
  }

  function handleDecreaseAmount() {
    updateProductAmount(product.id, product.inCartAmount - 1);
  }

  function handleRemoveProduct() {
    updateProductAmount(product.id, 0);
  }

  useEffect(() => {
    const newPrice = product.price * product.inCartAmount;

    const formattedPrice = `R$ ${Math.floor(newPrice / 100)},${String(
      newPrice
    ).slice(-2)}`;

    setSubTotal(formattedPrice);
  }, [product]);

  return (
    <ItemContainer
      activeOpacity={0.9}
      onPress={() => {}}
      style={{ elevation: 5 }}
    >
      <ItemContent>
        <ImageBox source={{ uri: product.img_url }} resizeMode={"contain"} />
        <ProductDetails>
          <ProductTitle>{product.title}</ProductTitle>
          <TotalProduct>{subTotal}</TotalProduct>
        </ProductDetails>
        <UpdateAmountBar
          onDecrease={handleDecreaseAmount}
          onIncrease={handleIncreaseAmount}
          amount={product.inCartAmount}
          color={"black"}
        />
        <RemoveItem onPress={handleRemoveProduct}>
          <Ionicons name="trash-outline" size={24} color={mainTheme.primary} />
        </RemoveItem>
      </ItemContent>
    </ItemContainer>
  );
}
