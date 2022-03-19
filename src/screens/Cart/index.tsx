import React from "react";

import { FlatList, View } from "react-native";
import { CartItem } from "../../components/CartItem";
import { HighlightButton } from "../../components/HighlightButton";
import { ProductType } from "../../global/types";
import { useCart } from "../../hooks/useCart";
import {
  Container,
  PrimaryView,
  ResumeText,
  ResumeTitle,
  ResumeView,
} from "./styles";

export function Cart() {
  const { cart, cartTotal } = useCart();

  return (
    <Container>
      <PrimaryView />
      <ResumeView>
        <ResumeTitle>Total do carrinho: </ResumeTitle>
        <ResumeText>{cart.length >= 1 ? cartTotal : "R$ -"}</ResumeText>
      </ResumeView>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.product_id.toString()}
        renderItem={({ item }) => <CartItem product={item} />}
        contentContainerStyle={{
          alignItems: "center",
        }}
      />
      <HighlightButton>Finalizar compra</HighlightButton>
    </Container>
  );
}
