import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";

import { FlatList, View } from "react-native";
import { CartItem } from "../../components/CartItem";
import { HighlightButton } from "../../components/HighlightButton";
import { ProductType } from "../../global/types";
import { useAuth } from "../../hooks/useAuth";
import { useCart } from "../../hooks/useCart";
import {
  Container,
  PrimaryView,
  ResumeText,
  ResumeTitle,
  ResumeView,
} from "./styles";

export function Cart() {
  const { cart, cartTotal, createSell } = useCart();
  const { user } = useAuth();
  const navigation = useNavigation();

  const formattedPrice = `R$ ${Math.floor(cartTotal / 100)},${String(
    cartTotal
  ).slice(-2)}`;

  async function handleSellConfirm() {
    createSell(user).then(() => {
      navigation.navigate("Home" as never, {} as never);
    });
  }

  return (
    <Container>
      <PrimaryView />
      <ResumeView>
        <ResumeTitle>Total do carrinho: </ResumeTitle>
        <ResumeText>{cart.length >= 1 ? formattedPrice : "R$ -"}</ResumeText>
      </ResumeView>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CartItem product={item} />}
        contentContainerStyle={{
          alignItems: "center",
        }}
      />
      <HighlightButton
        onPress={() => {
          handleSellConfirm();
        }}
      >
        Finalizar compra
      </HighlightButton>
    </Container>
  );
}
