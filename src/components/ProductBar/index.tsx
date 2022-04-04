import React, { useEffect, useState } from "react";

import { View } from "react-native";
import { ProductType } from "../../global/types";
import { useCart } from "../../hooks/useCart";
import { UpdateAmountBar } from "../UpdateAmountBar";
import { ActionButton, ActionText, Container, Total } from "./styles";

interface BarType {
  product: ProductType;
}

export function ProductBar({ product }: BarType) {
  const { addProductCartWithAmount } = useCart();
  const [amount, setAmount] = useState(1);
  const [subTotal, setSubTotal] = useState(
    () =>
      `R$ ${Math.floor(product.price / 100)},${String(product.price).slice(-2)}`
  );

  function handleIncrease() {
    if (amount < product.stock) {
      setAmount(amount + 1);
    }
  }

  function handleDecrease() {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  }

  useEffect(() => {
    const newPrice = product.price * amount;

    const formattedPrice = `R$ ${Math.floor(newPrice / 100)},${String(
      newPrice
    ).slice(-2)}`;

    setSubTotal(formattedPrice);
  }, [amount]);

  return (
    <Container>
      <Total>{subTotal} </Total>
      <UpdateAmountBar
        amount={amount}
        onDecrease={handleDecrease}
        onIncrease={handleIncrease}
      />
      <ActionButton
        activeOpacity={0.9}
        onPress={() => addProductCartWithAmount(product.id, amount)}
      >
        <ActionText>Comprar</ActionText>
      </ActionButton>
    </Container>
  );
}
