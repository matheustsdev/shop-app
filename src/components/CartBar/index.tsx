import React, { useEffect, useState } from "react";

import { useCart } from "../../hooks/useCart";
import {
  ActionButton,
  ActionText,
  Container,
  Total,
  TotalContainer,
  TotalTitle,
} from "./styles";

export function CartBar() {
  const { cartTotal } = useCart();
  const [subTotal, setSubTotal] = useState(
    () => `R$ ${Math.floor(cartTotal / 100)},${String(cartTotal).slice(-2)}`
  );

  useEffect(() => {
    const formattedPrice =
      cartTotal !== 0
        ? `R$ ${Math.floor(cartTotal / 100)},${String(cartTotal).slice(-2)}`
        : "R$ -";

    setSubTotal(formattedPrice);
  }, [cartTotal]);

  return (
    <Container>
      <TotalContainer>
        <TotalTitle>Total:</TotalTitle>
        <Total>{subTotal} </Total>
      </TotalContainer>
      <ActionButton activeOpacity={0.9} onPress={() => {}}>
        <ActionText>Finalizar</ActionText>
      </ActionButton>
    </Container>
  );
}
